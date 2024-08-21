"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="hidden md:flex-col md:flex">
      <Link href={"#about"}>
        <p>About Me</p>
      </Link>
      <Link href={"#projects"}>
        <p>Projects</p>
      </Link>
      <Link href={"#work"}>
        <p>Work Experience</p>
      </Link>
      <Link href={"#education"}>
        <p>Education</p>
      </Link>
    </nav>
  );
}
