"use client";

import {
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiFacebookLogoLight,
  PiInstagramLogoLight,
  PiXLogoLight,
  PiYoutubeLogoLight,
  PiSnapchatLogoLight,
} from "react-icons/pi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Socials() {
  return (
    <div id="socials" className="flex gap-4 mt-4">
      <Link href="http://www.linkedin.com/in/justin-byrd7">
        <PiLinkedinLogoLight className="text-3xl rounded-xl p-1 hover:bg-[#91a4b8]" />
      </Link>
      <Link href="http://www.github.com/jwbw29">
        <PiGithubLogoLight className="text-3xl rounded-xl p-1 hover:bg-[#91a4b8]" />
      </Link>
      <Link href="http://www.facebook.com/justin.byrd">
        <PiFacebookLogoLight className="text-3xl rounded-xl p-1 hover:bg-[#91a4b8]" />
      </Link>
      <Link href="http://www.instagram.com/justin.byrd10">
        <PiInstagramLogoLight className="text-3xl rounded-xl p-1 hover:bg-[#91a4b8]" />
      </Link>
      <Link href="http://www.x.com/tweeter__byrd">
        <PiXLogoLight className="text-3xl rounded-xl p-1 hover:bg-[#91a4b8]" />
      </Link>
      <Link href="http://www.youtube.com/jwbw29">
        <PiYoutubeLogoLight className="text-3xl rounded-xl p-1 hover:bg-[#91a4b8]" />
      </Link>
      <Link href="https://t.snapchat.com/plTVcv4U">
        <PiSnapchatLogoLight className="text-3xl rounded-xl p-1 hover:bg-[#91a4b8]" />
      </Link>
    </div>
  );
}
