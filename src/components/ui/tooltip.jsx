import React from "react";

// Minimal TooltipProvider shim — if you later want full tooltip behavior,
// replace with the library of your choice (e.g., @radix-ui/react-tooltip).
export const TooltipProvider = ({ children }) => {
  return <div>{children}</div>;
};

export default TooltipProvider;
