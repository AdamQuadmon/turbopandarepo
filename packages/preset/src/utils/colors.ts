export const makePrimaryColor = (l: number) => {
	return {
		value: `hsl(var(--primary-hue) 100% ${l}%)`,
	};
};
