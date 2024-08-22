"use client";

// [ ] Turn this component in to a carousel

import Link from "next/link";
import Image from "next/image";
import projectsData from "../../public/data/projectsData.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <section id="projects" className="p-2 m-2 flex flex-col gap-8 mb-24">
      <h2>Projects</h2>
      {/* //// map projects here */}
      {projectsData.map((project, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex gap-4 py-2">
            <h3 className="self-center">{project.name}</h3>
            <div className="flex gap-2">
              <Button variant="outline" asChild className="rounded-xl">
                <Link href={project.live}>live</Link>
              </Button>
              <Button variant="outline" asChild className="rounded-xl">
                <Link href={project.github}>github</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row w-full">
            <Image
              className="rounded-lg self-start mt-4 border border-muted-foreground"
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
