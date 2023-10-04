"use client";

import Error from "next/error";

// Render the default Next.js 404 page

export default function NotFound() {
	return (
		<html lang="en">
			<body>
				<Error statusCode={404} />
			</body>
		</html>
	);
}
