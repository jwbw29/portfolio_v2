"use client";

import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";

export default function Main() {
  return (
    <main id="main" className="testBorder flex flex-col gap-2 m-2 md:w-3/5">
      <About />
      <Projects />
      <WorkExperience />
      <Education />
    </main>
  );
}
