import { PlopTypes } from "@turbo/gen";

// example actions

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/require-await
export const remoteFetch: PlopTypes.CustomActionFunction = async () => {
	// fetch data from a remote API
	// const results = await fetchRemoteData();
	// add the response to the answers, making this data available to actions
	// answers.results = results;
	// return a status string
	return "Finished data fetching!";
};
