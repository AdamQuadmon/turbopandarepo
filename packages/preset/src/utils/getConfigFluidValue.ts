import { createFluidValue } from "./create-fluid-value";

export const getConfigFluidValue = (minSize: number, maxSize: number) =>
	createFluidValue(minSize, maxSize, 360, 1024);
