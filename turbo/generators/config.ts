import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	// A simple generator to add a new React component to the internal UI library
	plop.setGenerator("add-component", {
		description:
			"Adds a new component with Storybook stories and preset recipe",
		prompts: [
			{
				message: "What is the name of the component?",
				name: "name",
				type: "input",
			},
		],
		// Actions
		actions: [
			// Docs Storybook
			{
				path: "apps/docs/src/stories/{{pascalCase name}}.stories.ts",
				templateFile: "templates/component/component.stories.ts.hbs",
				type: "add",
			},
			// UI component
			{
				path: "packages/ui/src/{{kebabCase name}}/{{pascalCase name}}.tsx",
				templateFile: "templates/component/Component.tsx.hbs",
				type: "add",
			},
			{
				path: "packages/ui/src/{{kebabCase name}}/index.ts",
				templateFile: "templates/component/index.ts.hbs",
				type: "add",
			},
			{
				path: "packages/ui/src/index.tsx",
				type: "append",
				// pattern: /(\/\/ component exports)/g,
				pattern: /;/,
				template: 'export * from "./{{kebabCase name}}";',
			},
			// Preset recipe
			{
				path: "packages/preset/src/recipes/{{kebabCase name}}.recipe.ts",
				templateFile: "templates/component/component.recipe.ts.hbs",
				type: "add",
			},
			{
				path: "packages/preset/src/recipes/index.ts",
				pattern: /(\/\/ packages:)/g,
				template:
					'import { {{camelCase name}}Recipe }  from "./{{kebabCase name}}.recipe";',
				type: "append",
			},
			{
				path: "packages/preset/src/recipes/index.ts",
				pattern: /(\/\/ recipes:)/g,
				template: "{{camelCase name}}: {{camelCase name}}Recipe,",
				type: "append",
			},
			// Test
			// {
			//   type: "add",
			//   path: "packages/ui/src/{{kebabCase name}}/{{pascalCase name}}.test.tsx",
			//   templateFile: "templates/component/Component.test.tsx.hbs",
			// },
		],
	});
}
