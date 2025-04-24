
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  className?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageUrl,
  className,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {primaryButtonText && primaryButtonLink && (
                <Button asChild size="lg">
                  <Link to={primaryButtonLink}>{primaryButtonText}</Link>
                </Button>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <Button asChild variant="outline" size="lg">
                  <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
                </Button>
              )}
            </div>
          </div>
          {imageUrl && (
            <div className="flex items-center justify-center">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                src={imageUrl}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
