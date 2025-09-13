import React from "react";
import WHAT_I_DO from "@/constants/whatIDo";

const WhatIDo = ({ items = WHAT_I_DO }) => {
  return (
    <div className="space-y-4 pt-8">
      <h3 className="text-xl font-semibold text-foreground">What I Do</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, idx) => {
          const isGradient = idx >= items.length - 2;
          return (
            <div
              key={item.title}
              className={
                "rounded-lg p-4 what-item " +
                (isGradient
                  ? "gradient bg-gradient-to-br from-primary via-primary-glow to-muted"
                  : "bg-muted/50")
              }
            >
              <h4 className={"font-medium mb-2"}>{item.title}</h4>
              <p className={"text-sm"}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatIDo;
