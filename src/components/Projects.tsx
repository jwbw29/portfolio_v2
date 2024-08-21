"use client";

import Link from "next/link";
import Image from "next/image";
import projectsData from "../../public/data/projectsData.json";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border border-dashed border-black rounded-lg p-2 m-2 flex flex-col gap-8"
    >
      <h2>Projects</h2>
      {/* //// map projects here */}
      {projectsData.map((project, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex py-2">
            <h3>{project.name}</h3>
            <Link href={project.live}>live</Link>
            <Link href={project.github}>github</Link>
          </div>
          <div className="flex flex-col gap-6 md:flex-row w-full">
            <Image
              className="rounded-3xl self-start mt-4"
              src={project.image}
              width={180}
              height={180}
              alt={project.name}
            />{" "}
            <div className="flex flex-col gap-4 w-full">
              <p className="md:p-4">{project.description}</p>
              <div className="flex gap-2 md:pl-4">
                {project.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
