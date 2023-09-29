import { Button } from "@turbopandarepo/ui";

export default function Page() {
	return (
		<div>
			<h1>Web</h1>
			<Button variant="solid">Boop</Button>
			<Button label="Large Button" size="lg" />
			{/* Comment this out to see how Storybook refresh adding the warning variant class  */}
			{/* <Button variant="warning" label="Warning Variant Button" /> */}
		</div>
	);
}
