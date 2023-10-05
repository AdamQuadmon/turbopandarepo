// import { globalSeo } from "contentlayer/generated";
import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";
export const runtime = "edge";

// TODO improve
export function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl;
	const title = searchParams.get("title");
	// const { url: baseUrl } = globalSeo;
	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					height: "100%",
					width: "100%",
					// more styles here...
					// backgroundImage: `"url(${baseUrl}/og-bg.png)",
				}}
			>
				{title}
			</div>
		),
		{
			height: 1080,
			width: 1920,
		},
	);
}
