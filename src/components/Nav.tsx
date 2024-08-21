"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <nav className="hidden md:flex flex-col mt-12 items-start">
      <Button variant="link" asChild className="font-normal text-base">
        <Link href={"#about"}>
          <p>About Me</p>
        </Link>
      </Button>
      <Button variant="link" asChild className="font-normal text-base">
        <Link href={"#projects"}>
          <p>Projects</p>
        </Link>
      </Button>
      <Button variant="link" asChild className="font-normal text-base">
        <Link href={"#work"}>
          <p>Work Experience</p>
        </Link>
      </Button>
      <Button variant="link" asChild className="font-normal text-base">
        <Link href={"#education"}>
          <p>Education</p>
        </Link>
      </Button>
    </nav>
  );
}
