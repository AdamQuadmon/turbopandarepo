import { IntlErrorCode } from "next-intl";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }: { locale: string }) => ({
	formats: {
		dateTime: {
			short: {
				day: "numeric",
				month: "short",
				year: "numeric",
			},
		},
		list: {
			enumeration: {
				style: "long",
				type: "conjunction",
			},
		},
		number: {
			precise: {
				maximumFractionDigits: 5,
			},
		},
	},
	getMessageFallback({ error, key, namespace }) {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		const path = [namespace, key].filter((part) => part !== null).join(".");

		if (error.code === IntlErrorCode.MISSING_MESSAGE) {
			return path + " is not yet translated";
		} else {
			return "Dear developer, please fix this message: " + path;
		}
	},
	onError(error) {
		if (error.code === IntlErrorCode.MISSING_MESSAGE) {
			// Missing translations are expected and should only log an error
			console.error(error);
		} else {
			// Other errors indicate a bug in the app and should be reported
			// reportToErrorTracking(error);
			console.error(error);
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
	messages: (await import(`../messages/${locale}.json`)).default,
}));
