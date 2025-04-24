
import React from "react";
import { cn } from "@/lib/utils";

interface CardFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const CardFeature: React.FC<CardFeatureProps> = ({ 
  icon, 
  title, 
  description, 
  className 
}) => {
  return (
    <div 
      className={cn(
        "bg-card p-6 rounded-lg border border-border shadow-sm card-hover", 
        className
      )}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default CardFeature;
