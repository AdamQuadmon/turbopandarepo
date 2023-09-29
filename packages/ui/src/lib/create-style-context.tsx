"use client";
import {
	type ComponentProps,
	type ElementType,
	createContext,
	forwardRef,
	useContext,
} from "react";

// see https://github.com/cschroeter/park-ui/blob/main/website/src/lib/create-style-context.tsx

type Props = Record<string, unknown>;
interface Recipe {
	(props?: Props): Record<string, string>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	splitVariantProps: (props: Props) => any;
}
type Slot<R extends Recipe> = keyof ReturnType<R>;
type SlotRecipe<R extends Recipe> = Record<Slot<R>, string>;
type VariantProps<R extends Recipe> = Parameters<R>[0];
type Assign<T, U> = Omit<T, keyof U> & U;

export interface StyledContextProvider<
	T extends ElementType,
	R extends Recipe,
> {
	// eslint-disable-next-line deprecation/deprecation, no-undef
	(props: ComponentProps<T> & VariantProps<R>): JSX.Element;
	<P extends object>(
		props: Assign<ComponentProps<T>, P> & VariantProps<R>,
		// eslint-disable-next-line deprecation/deprecation, no-undef
	): JSX.Element;
}

const cx = (...args: (string | undefined)[]) => args.filter(Boolean).join(" ");

export const createStyleContext = <R extends Recipe>(recipe: R) => {
	const StyleContext = createContext<SlotRecipe<R> | null>(null);

	const withProvider = <T extends ElementType>(
		Component: T,
		slot?: Slot<R>,
	) => {
		const Comp = forwardRef(
			(props: ComponentProps<T> & VariantProps<R>, ref) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
				const [variantProps, localProps] = recipe.splitVariantProps(props);
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				const slotRecipe = recipe(variantProps) as SlotRecipe<R>;
				return (
					<StyleContext.Provider value={slotRecipe}>
						<Component
							ref={ref}
							{...localProps}
							// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
							className={cx(slotRecipe[slot ?? ""], localProps.className)}
						/>
					</StyleContext.Provider>
				);
			},
		);
		// @ts-expect-error JSX.IntrinsicElements do not have a displayName but Function and Class components do
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		Comp.displayName = Component.displayName || Component.name || "Component";
		return Comp as unknown as StyledContextProvider<T, R>;
	};

	const withContext = <T extends ElementType>(Component: T, slot?: Slot<R>) => {
		const Comp = forwardRef((props: ComponentProps<T>, ref) => {
			const slotRecipe = useContext(StyleContext);
			return (
				// @ts-expect-error typescript issues
				<Component
					ref={ref}
					{...props}
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					className={cx(slotRecipe?.[slot ?? ""], props.className)}
				/>
			);
		});
		// @ts-expect-error JSX.IntrinsicElements do not have a displayName but Function and Class components do
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		Comp.displayName = Component.displayName || Component.name || "Component";

		return Comp as unknown as T;
	};

	return {
		withContext,
		withProvider,
	};
};
