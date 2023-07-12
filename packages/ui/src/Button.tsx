import type { ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children: ReactNode;
}

export function Button({ className, children }: ButtonProps) {
  return <button className={className}>{children}</button>;
}

Button.displayName = "Button";
