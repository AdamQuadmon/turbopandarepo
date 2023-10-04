import { PlopTypes } from "@turbo/gen";

// actions to implement

// TODO check if is possible and useful to have such actions:

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/require-await
export const createWorkspace: PlopTypes.CustomActionFunction = async () => {
	// exec turbo gen workspace --name workspace-name --copy source-workspace --type  app | package
	return "Workspace created!";
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/require-await
export const runGenerator: PlopTypes.CustomActionFunction = async () => {
	// exec turbo gen run generator-name --args arg1 arg2
	return "Generator executed!";
};

export const addI18n: PlopTypes.CustomActionFunction = async () => {
	// exec turbo gen run generator-name --args arg1 arg2
	return "Generator executed!";
};
