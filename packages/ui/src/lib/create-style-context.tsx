"use client";

import {
	type ComponentProps,
	type ComponentType,
	type ElementType,
	createContext,
	forwardRef,
	useContext,
} from "react";

// The first implementation was from Park-ui https://github.com/cschroeter/park-ui/blob/main/website/src/lib/create-style-context.tsx
// Then we found a variant from Shadow Panda which we fixed by our linter suggestion https://github.com/kumaaa-inc/shadow-panda/blob/main/packages/style-context/src/style-context.tsx
// Some differences from Park-ui version are left commented for reference.
// We preferred the slotRecipe name from Park-ui version instead of the generic styles one.
// We added some eslint-disable rules such:
// - deprecation/deprecation, no-undef: for JSX.Element
// - no-explicit-any
// - no-unnecessary-condition
// - no-unsafe-assignment
// - non-nullable-type-assertion-style

// type Props = Record<string, unknown>;
type AnyProps = Record<string, unknown>;
interface AnyRecipe {
	(props?: AnyProps): Record<string, string>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	splitVariantProps: (props: AnyProps) => any;
}

interface Recipe {
	(props?: AnyRecipe): Record<string, string>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	splitVariantProps: (props: AnyRecipe) => any;
}
// type Slot<R extends Recipe> = keyof ReturnType<R>;
type Slots<R extends () => Record<string, string>> = keyof ReturnType<R>;

// type SlotRecipe<R extends Recipe> = Record<Slot<R>, string>;
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

export const createStyleContext = <R extends AnyRecipe>(recipe: R) => {
	// const StyleContext = createContext<SlotRecipe<R> | null>(null);
	const StyleContext = createContext<ReturnType<R> | null>(null);

	// const withProvider = <T extends ElementType>(
	const withProvider = <T,>(
		// Component: T,
		Component: ComponentType<T>,
		// slot?: Slot<R>,
		slot?: Slots<R>,
		defaultProps?: Partial<T> & { className?: string },
	) => {
		const Comp = forwardRef(
			// (props: ComponentProps<T> & VariantProps<R>, ref) => {
			(props: T & Parameters<R>[0], ref) => {
				// eslint-disable-next-line  @typescript-eslint/no-unsafe-assignment
				const [variantProps, localProps] = recipe.splitVariantProps(
					// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
					props as AnyProps,
				);
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const { className = "", ...rest } = localProps;
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				const slotRecipe = recipe(variantProps) as ReturnType<R> | null;
				const slotClass = slotRecipe?.[slot ?? ""];
				const classNames = [
					defaultProps?.className ?? null,
					slotClass ?? null,
					className ?? null,
				].filter(Boolean);
				return (
					<StyleContext.Provider value={slotRecipe}>
						<Component
							ref={ref}
							{...defaultProps}
							className={classNames.join(" ")}
							{...rest}
						/>
					</StyleContext.Provider>
				);
			},
		);

		Comp.displayName = Component.displayName ?? Component.name;
		return Comp;
	};

	// const withContext = <T extends ElementType>(Component: T, slot?: Slot<R>) => {
	const withContext = <T,>(
		Component: ComponentType<T>,
		slot?: Slots<R>,
		defaultProps?: Partial<T> & { className?: string },
	) => {
		if (!slot) {
			return Component;
		}

		// const Comp = forwardRef((props: ComponentProps<T>, ref) => {
		const Comp = forwardRef(
			({ className, ...rest }: T & { className?: string }, ref) => {
				const slotRecipe = useContext(StyleContext);
				// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				const slotClass = slotRecipe?.[slot ?? ""];
				const classNames = [
					defaultProps?.className ?? null,
					slotClass ?? null,
					className ?? null,
				].filter(Boolean);
				return (
					<Component
						ref={ref}
						{...defaultProps}
						className={classNames.join(" ")}
						{...(rest as T)}
					/>
				);
			},
		);

		Comp.displayName = Component.displayName ?? Component.name;
		return Comp;
	};

	const useSlot = (slot?: Slots<R>) => {
		const slotRecipe = useContext(StyleContext);
		return slotRecipe?.[slot ?? ""] ?? "";
	};

	return {
		useSlot,
		withContext,
		withProvider,
	};
};
