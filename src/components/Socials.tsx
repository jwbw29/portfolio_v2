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

export default function Socials() {
  return (
    <div id="socials" className="flex gap-4 mt-4">
      <Link href="http://www.linkedin.com/in/justin-byrd7">
        <PiLinkedinLogoLight className="text-xl" />
      </Link>
      <Link href="http://www.github.com/jwbw29">
        <PiGithubLogoLight className="text-xl" />
      </Link>
      <Link href="http://www.facebook.com/justin.byrd">
        <PiFacebookLogoLight className="text-xl" />
      </Link>
      <Link href="http://www.instagram.com/justin.byrd10">
        <PiInstagramLogoLight className="text-xl" />
      </Link>
      <Link href="http://www.x.com/tweeter__byrd">
        <PiXLogoLight className="text-xl" />
      </Link>
      <Link href="http://www.youtube.com/jwbw29">
        <PiYoutubeLogoLight className="text-xl" />
      </Link>
      <Link href="https://t.snapchat.com/plTVcv4U">
        <PiSnapchatLogoLight className="text-xl" />
      </Link>
    </div>
  );
}
