"use client";

import type { ComponentProps } from "react";

import { useSelectedLayoutSegment } from "next/navigation";

import { Link } from "~/navigation";

// TODO check this, is unused
export default function NavigationLink({
	href,
	...rest
}: ComponentProps<typeof Link>) {
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
	const isActive = pathname === href;

	return (
		<Link
			aria-current={isActive ? "page" : undefined}
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			href={href}
			style={{ fontWeight: isActive ? "bold" : "normal" }}
			{...rest}
		/>
	);
}
