import {
	defineDocumentType,
	defineNestedType,
	makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";
// import highlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

const GlobalSeo = defineDocumentType(() => ({
	fields: {
		description: {
			description: "Site description",
			required: true,
			type: "string",
		},
		icon: {
			description: "Site Icon",
			required: true,
			type: "string",
		},
		ogImageApi: {
			description: "Site Og Image Generator Api Url",
			required: true,
			type: "string",
		},
		sitemapPaths: {
			description: "SiteMap Paths",
			of: { type: "string" },
			required: true,
			type: "list",
		},
		title: {
			description: "Site Title",
			required: true,
			type: "string",
		},
		titleTemplate: {
			description: "Site Title Template",
			required: true,
			type: "string",
		},
		url: {
			description: "Site Url",
			required: true,
			type: "string",
		},
	},
	filePathPattern: `configs/seo.yaml`,
	isSingleton: true,
	name: "GlobalSeo",
}));

const SEO = defineNestedType(() => ({
	fields: {
		description: {
			description: "The SEO description of the Post",
			type: "string",
		},
		ogImage: {
			description: "The Og Image of the Post",
			type: "string",
		},
		publishedAt: {
			description: "The SEO date of the Post",
			required: true,
			type: "date",
		},
		title: {
			description: "The SEO title of the Post",
			type: "string",
		},
	},
	name: "SEO",
}));

const Author = defineNestedType(() => ({
	fields: {
		image: { required: true, type: "string" },
		name: { required: true, type: "string" },
	},
	name: "Author",
}));

const Post = defineDocumentType(() => ({
	computedFields: {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
		readingTime: { resolve: (doc) => readingTime(doc.body.raw), type: "json" },
		slug: {
			resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
			type: "string",
		},
		url: {
			resolve: (doc) => doc._raw.flattenedPath,
			type: "string",
		},
		wordCount: {
			resolve: (doc) => doc.body.raw.split(/\s+/u).length,
			type: "number",
		},
	},
	contentType: "mdx",
	fields: {
		author: {
			of: Author,
			type: "nested",
		},
		cover: {
			required: false,
			type: "image",
		},
		seo: {
			of: SEO,
			required: true,
			type: "nested",
		},
		title: {
			description: "The title of the Post",
			required: true,
			type: "string",
		},
	},
	filePathPattern: `posts/**/*.mdx`,
	name: "Post",
}));

const Page = defineDocumentType(() => ({
	contentType: "mdx",
	fields: {
		title: {
			description: "The title of the Page",
			required: true,
			type: "string",
		},
	},
	filePathPattern: "pages/**/*.md",
	name: "Doc",
}));

const Doc = defineDocumentType(() => ({
	contentType: "mdx",
	fields: {
		title: {
			description: "The title of the Doc Page",
			required: true,
			type: "string",
		},
	},
	filePathPattern: "docs/**/*.md",
	name: "Doc",
}));

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Post, Doc, Page, GlobalSeo],
	mdx: {
		// rehypePlugins: [highlight],
		remarkPlugins: [remarkGfm],
	},
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const OtherFields = defineNestedType(() => ({
// 	fields: {
// 		booleanControl: {
// 			default: false,
// 			type: "boolean",
// 		},
// 		enumTheme: {
// 			default: "dark",
// 			options: ["light", "dark"],
// 			type: "enum",
// 		},
// 		jsonOptions: {
// 			type: "json",
// 		},
// 		markdownDescription: {
// 			type: "markdown",
// 		},
// 		mdxComponent: {
// 			type: "mdx",
// 		},
// 		numberCount: {
// 			default: 0,
// 			type: "number",
// 		},
// 		referencePost: {
// 			of: Post,
// 			type: "reference",
// 		},
// 	},
// 	name: "OtherFields",
// }));
