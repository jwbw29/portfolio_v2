"use client";

import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border border-dashed border-black rounded-lg p-2 m-2 flex flex-col gap-4 md:gap-8"
    >
      <h2>Projects</h2>
      {/* //// map projects here */}
      <div className="flex flex-col">
        <div className="flex">
          <h3>Project 1</h3>
          <Link href="">link</Link>
        </div>
        <div className="flex">
          <p>image</p>
          <div className="flex flex-col">
            <p>description</p>
            <div className="flex">
              <p>tags</p>
              <p>tags</p>
              <p>tags</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
