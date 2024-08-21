"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "../public/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border border-dashed border-black rounded-lg p-2 m-2 flex flex-col gap-4 md:gap-8"
    >
      <h2>Projects</h2>
      {/* //// map projects here */}
      {projectsData.map((project, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex">
            <h3>{project.name}</h3>
            <Link href={project.live}>live</Link>
            <Link href={project.github}>github</Link>
          </div>
          <div className="flex">
            <Image
              src={project.image}
              alt={project.name}
              height={250}
              width={250}
            />
            <div className="flex flex-col">
              <p>{project.description}</p>
              <div className="flex">
                {projects.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
