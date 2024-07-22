"use client";

import Image from "next/image";
import ButtonGroup from "@/components/ButtonGroup";
import Socials from "@/components/Socials";
import Nav from "@/components/Nav";

export default function Hero() {
  return (
    <div className="testBorder p-2 m-2">
      {/* <Image src="/hero.jpg" alt="hero" width={1920} height={1080} /> */}
      <div className="flex size-[250px] testBorder rounded-xl items-center justify-center">
        <h1 className="text-7xl text-center">image</h1>
      </div>
      <h1>Full Name</h1>
      <h3>Job Title</h3>
      <ButtonGroup />
      <Socials />
      <Nav /> {/*hidden on mobile */}
    </div>
  );
}
