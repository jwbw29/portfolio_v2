"use client";

import About from "./About";
import ChatBot from "./ChatBot";
import Education from "./Education";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";

export default function Main() {
  return (
    <main className="testBorder flex flex-col gap-2 m-2 md:w-3/5">
      <ChatBot />
      <About />
      <Projects />
      <WorkExperience />
      <Education />
    </main>
  );
}
