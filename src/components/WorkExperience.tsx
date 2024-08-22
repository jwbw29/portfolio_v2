"use client";
import workExperience from "../../public/data/workExperience.json";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

export default function WorkExperience() {
  return (
    <section
      id="work"
      className="border border-dashed border-black rounded-lg p-2 m-2 flex flex-col gap-4 md:gap-8"
    >
      <h2>Work Experience</h2>
      <ul className="flex flex-col gap-4 md:gap-8 ml-1">
        {/* //// map work experience here */}
        {workExperience.map((work, index) => (
          <li key={index} className="flex flex-col gap-2 ">
            <h3 className="font-medium">{work.title}</h3>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <h4>{work.company}</h4>
                <Link href={work.url} className="flex items-center">
                  <RxExternalLink />
                </Link>
              </div>
              <p className="font-light">{work.dates}</p>
            </div>
            <p>{work.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
