import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  href?: string;
  to?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Button({
  children,
  href,
  to,
  variant = "primary",
  size = "md",
  className,
}: Props) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90",
    secondary: "text-white bg-primary hover:bg-primary/90",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const styles = clsx(baseStyles, variants[variant], sizes[size], className);

  // * Internal link
  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  // * External link
  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  // Default button
  return <button className={styles}>{children}</button>;
}
