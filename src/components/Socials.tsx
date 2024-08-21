"use client";

import {
  PiGithubLogoThin,
  PiLinkedinLogoThin,
  PiFacebookLogoThin,
  PiInstagramLogoThin,
  PiXLogoThin,
  PiYoutubeLogoThin,
  PiSnapchatLogoThin,
} from "react-icons/pi";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex gap-2">
      <Link href="http://www.linkedin.com/in/justin-byrd7">
        <PiLinkedinLogoThin />
      </Link>
      <Link href="http://www.github.com/jwbw29">
        <PiGithubLogoThin />
      </Link>
      <Link href="http://www.facebook.com/justin.byrd">
        <PiFacebookLogoThin />
      </Link>
      <Link href="http://www.instagram.com/justin.byrd10">
        <PiInstagramLogoThin />
      </Link>
      <Link href="http://www.x.com/tweeter__byrd">
        <PiXLogoThin />
      </Link>
      <Link href="http://www.youtube.com/jwbw29">
        <PiYoutubeLogoThin />
      </Link>
      <Link href="https://t.snapchat.com/plTVcv4U">
        <PiSnapchatLogoThin />
      </Link>
    </div>
  );
}
