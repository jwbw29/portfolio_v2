"use client";

import education from "../../public/data/education.json";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";
import { cn } from "../lib/utils";

export default function Education() {
  return (
    <section
      id="education"
      className="mb-24 scroll-mt-16"
      aria-label="education"
    >
      <h2 className="tracking-tight">Education</h2>
      <ul className="ml-1 mt-5 flex flex-col">
        {education.map((edu, index) => (
          <li
            className={cn(
              "relative ml-3 pl-5 before:absolute before:-left-2 before:top-2 before:h-full before:w-0.5 before:rounded-full before:bg-slate-200 before:content-[''] after:absolute after:-left-[0.93rem] after:top-1 after:size-4 after:rounded-full after:bg-slate-200 after:content-['']",
              index !== education.length - 1 && "pb-10"
            )}
            key={index}
          >
            <div className="flex flex-col-reverse justify-between gap-y-2 sm:flex-row">
              <h3 className="relative flex flex-col leading-snug">
                <span className="leading-none tracking-tight">{edu.major}</span>
                <Link
                  href={edu.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group tracking-tight hover:text-muted-foreground"
                >
                  <h4 className="font-light">
                    {edu.school}
                    <RxExternalLink className="my-auto ml-1.5 inline-block size-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h4>
                </Link>
              </h3>
              <aside className="flex-shrink-0">
                <p
                  aria-label={`Worked from ${edu.dates}`}
                  className="text-sm font-light"
                >
                  {edu.dates}
                </p>
                <p
                  aria-label={`Located in ${edu.location}`}
                  className="text-sm font-light"
                >
                  {edu.location}
                </p>
              </aside>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
