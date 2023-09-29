"use client";
import { PopoverAnchor, Portal } from "@ark-ui/react";
import { Stack } from "@turbopandarepo/ds/jsx";
import { useForm } from "react-hook-form";
import { useBoolean } from "usehooks-ts";

import { Button, Textarea } from "../ui";
import {
	Popover,
	PopoverArrow,
	PopoverArrowTip,
	PopoverCloseTrigger,
	PopoverContent,
	PopoverPositioner,
	type PopoverProps,
} from "../ui/popover";

interface Fields {
	message: string;
}

export const FeedbackPopover = (props: PopoverProps) => {
	const {
		formState: { isSubmitting },
		handleSubmit,
		register,
		reset,
	} = useForm<Fields>();
	const { setFalse, toggle, value } = useBoolean(false);

	const onSubmit = async (data: Fields) => {
		await fetch("/api/feedback", {
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
			method: "POST",
		});

		setFalse();
		reset();
	};

	return (
		<Popover portalled {...props} onClose={setFalse} open={value}>
			<PopoverAnchor asChild>
				<Button
					display={{ base: "none", sm: "inline-flex" }}
					onClick={() => {
						toggle();
					}}
					variant="outline"
				>
					Feedback
				</Button>
			</PopoverAnchor>
			<Portal>
				<PopoverPositioner>
					<PopoverContent>
						<PopoverArrow>
							<PopoverArrowTip />
						</PopoverArrow>
						<form
							// eslint-disable-next-line @typescript-eslint/no-misused-promises
							onSubmit={handleSubmit(onSubmit)}
						>
							<Stack gap="4" minW="64">
								<Textarea
									placeholder="Your feedback"
									required
									rows={4}
									{...register("message")}
								/>
								<Stack direction="row" gap="3">
									<PopoverCloseTrigger asChild>
										<Button size="sm" variant="outline" width="full">
											Cancel
										</Button>
									</PopoverCloseTrigger>
									<Button size="sm" type="submit" width="full">
										{isSubmitting ? "Sending..." : "Send"}
									</Button>
								</Stack>
							</Stack>
						</form>
					</PopoverContent>
				</PopoverPositioner>
			</Portal>
		</Popover>
	);
};
