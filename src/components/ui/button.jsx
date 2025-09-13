import React from "react";

// Minimal Button shim to match the project's usage.
// Accepts: variant, size, className, onClick, children
export const Button = ({ variant = "default", size = "md", className = "", children, ...props }) => {
  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-shadow duration-150";

  // Invisible / subtle button design by default: transparent background, subtle shadow, faint border.
  const variantMap = {
    hero: "bg-indigo-600 text-white hover:bg-indigo-700",
    default: "bg-transparent text-foreground shadow-sm border border-border/20 hover:shadow",
    outline: "bg-background/80 backdrop-blur-md border border-border/50 hover:bg-muted/80 text-foreground",
  };

  const sizeMap = {
    lg: "text-lg px-6 py-3",
    md: "text-sm px-4 py-2",
    sm: "text-xs px-3 py-1.5",
  };

  const classes = [base, variantMap[variant] || variantMap.default, sizeMap[size] || sizeMap.md, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
