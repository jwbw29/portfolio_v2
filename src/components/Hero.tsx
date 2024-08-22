"use client";

import Image from "next/image";
import Link from "next/link";
// import ButtonGroup from "@/components/ButtonGroup";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Nav from "@/components/Nav";
import headshot from "../../public/assets/headshot.jpg";

export default function Hero() {
  return (
    <header className="flex flex-col p-2 md:p-8 m-2 md:w-fit gap-4">
      <div className="md:p-4">
        <Image
          src={headshot}
          alt="hero"
          height={250}
          width={250}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Justin Byrd</h1>
        <h3 className="subtitle">Full-Stack Web Developer</h3>
        <Button asChild className="w-fit">
          <Link
            href="/assets/Justin Byrd Web Developer Resume.pdf"
            target="_blank"
          >
            Resume
          </Link>
        </Button>
        <Socials />
        <Nav /> {/*hidden on mobile */}
      </div>
    </header>
  );
}
