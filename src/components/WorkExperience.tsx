"use client";
import workExperience from "../../public/data/workExperience.json";
import Link from "next/link";

export default function WorkExperience() {
  return (
    <section
      id="work"
      className="border border-dashed border-black rounded-lg p-2 m-2 flex flex-col gap-4 md:gap-8"
    >
      <h2>Work Experience</h2>
      {/* //// map work experience here */}
      {workExperience.map((work, index) => (
        <div key={index} className="flex flex-col">
          <h3>{work.title}</h3>
          <div className="flex flex-col">
            <div className="flex">
              <h4>{work.company}</h4>
              <Link href={work.url}>link</Link>
            </div>
            <p>{work.dates}</p>
          </div>
          <p>{work.description}</p>
        </div>
      ))}
    </section>
  );
}
