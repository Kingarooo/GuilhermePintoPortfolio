import React from "react";
import { useTranslation } from 'react-i18next'

const WhatIDo = ({ items }) => {
  const { t } = useTranslation()
  const translatedItems = items || t('whatIDo.items', { returnObjects: true })
  const title = t('whatIDo.title')

  return (
    <div className="space-y-4 pt-8">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {translatedItems.map((item, idx) => {
          const isGradient = idx >= translatedItems.length - 2;
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
