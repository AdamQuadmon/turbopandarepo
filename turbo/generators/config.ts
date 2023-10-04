import { PlopTypes } from "@turbo/gen";
import fs from "fs";
import path from "path";

import { addComponent } from "./configs/add-component";
import { addI18n } from "./configs/add-i18n";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	// TODO: actions and helpers are stubs, not testes
	// @ts-expect-error no overload matching
	plop.setActionType("copy", (answers, config, plop) => {
		if (!plop || !config) {
			return null;
		}

		// @ts-expect-error property not exists
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const src = plop.renderString(config.src, answers);
		// @ts-expect-error property not exists
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const dest = plop.renderString(config.dest, answers);

		const dirname = path.dirname(dest);

		fs.mkdirSync(dirname, { recursive: true });
		fs.copyFileSync(src, dest);
	});

	plop.setHelper("toArray", (txt: string) =>
		txt
			.split(",")
			.map((e) => `"${e.trim()}"`)
			.join(", "),
	);
	plop.setHelper("toPipeList", (txt: string) =>
		txt
			.split(",")
			.map((e) => e.trim())
			.join("|"),
	);
	plop.setHelper("popArray", (txt: string) => txt.split(",").pop());

	// A simple generator to add a new React component to the internal UI library
	plop.setGenerator("add-component", addComponent);
	plop.setGenerator("add-i18n", addI18n);
}
