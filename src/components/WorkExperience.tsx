"use client";
import experience from "../../public/data/experience.json";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import { cn } from "../lib/utils";
import { Badge } from "@/components/ui/badge";

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="mb-24 scroll-mt-16"
      aria-label="Professional work experience"
    >
      <h2 className="tracking-tight">Work Experience</h2>
      <ul className="ml-1 mt-5 flex flex-col">
        {experience.map((exp, index) => (
          <li
            className={cn(
              "relative ml-3 pl-5 before:absolute before:-left-2 before:top-2 before:h-full before:w-0.5 before:rounded-full before:bg-slate-200 before:content-[''] after:absolute after:-left-[0.93rem] after:top-1 after:size-4 after:rounded-full after:bg-slate-200 after:content-['']",
              index !== experience.length - 1 && "pb-10",
              index === 0 && "after:bg-muted-foreground"
            )}
            key={index}
          >
            <div className="flex flex-col-reverse justify-between gap-y-2 sm:flex-row">
              <h3 className="relative flex flex-col leading-snug">
                <span className="font-medium leading-none tracking-tight">
                  {exp.title}
                </span>
                <Link
                  href={exp.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group tracking-tight hover:text-muted-foreground"
                >
                  <h4>
                    {exp.company}
                    <RxExternalLink className="my-auto ml-1.5 inline-block size-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h4>
                </Link>
              </h3>
              <aside className="flex-shrink-0">
                <p
                  aria-label={`Worked from ${exp.dates}`}
                  className="text-sm font-light"
                >
                  {exp.dates}
                </p>
                <p
                  aria-label={`Located in ${exp.location}`}
                  className="text-sm font-light"
                >
                  {exp.location}
                </p>
              </aside>
            </div>
            <div className="mt-3 text-skeptic-950">
              <p className="font-light">{exp.description}</p>
              <ul
                className="mr-14 mt-3 flex flex-wrap gap-1.5 tracking-wide sm:gap-2"
                aria-label="Technology stack"
              >
                {exp.skills.map((skill) => (
                  <li className="" key={skill}>
                    <Badge className="font-normal">{skill}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
