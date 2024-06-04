import { EducationItem, ExperienceItem, TimelineItem } from "@/types";
import React from "react";

interface TimelineSectionProps {
  title: string;
  subtitle: string;
  items: TimelineItem[];
  isEducation: boolean;
}

const TimelineSection = ({
  title,
  subtitle,
  items,
  isEducation,
}: TimelineSectionProps) => {
  return (
    <section className="grid max-w-6xl gap-4 sm:grid-cols-12">
      <div className="col-span-12 sm:col-span-3">
        <div className="before:mb-5 before:block before:h-3 before:w-24 before:rounded-md before:bg-primary">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <span className="text-sm font-bold uppercase tracking-wider dark:text-gray-600">
            {subtitle}
          </span>
        </div>
      </div>
      <div className="relative col-span-12 space-y-6 sm:col-span-9 sm:px-4">
        <div className="relative space-y-12 before:bg-gray-300 sm:space-y-8 sm:px-4 sm:before:absolute sm:before:-left-3 sm:before:bottom-0 sm:before:top-2 sm:before:w-0.5">
          {items.reverse().map((item, index) => (
            <div
              key={index}
              className="flex flex-col before:bg-primary sm:relative sm:before:absolute sm:before:left-[-35px] sm:before:top-2 sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full"
            >
              <h3 className="text-xl font-semibold tracking-wide">
                {isEducation
                  ? (item as EducationItem).degree
                  : (item as ExperienceItem).position}
              </h3>
              <p className="font-semibold text-gray-500 dark:text-gray-600">
                {isEducation
                  ? (item as EducationItem).institution
                  : (item as ExperienceItem).location}
              </p>
              <time className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-600">
                {item.dates}
              </time>
              <p className="mt-3 text-gray-600 dark:text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
