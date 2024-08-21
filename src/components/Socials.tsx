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

const socialUrls = [
  "http://www.linkedin.com/in/justin-byrd7",
  "http://www.github.com/jwbw29",
  "http://www.facebook.com/justin.byrd",
  "http://www.instagram.com/justin.byrd10",
  "http://www.x.com/tweeter__byrd",
  "http://www.youtube.com/jwbw29",
  "https://t.snapchat.com/plTVcv4U",
];

export default function Socials() {
  return (
    <div className="flex gap-2">
      <PiLinkedinLogoThin />
      <PiGithubLogoThin />
      <PiFacebookLogoThin />
      <PiInstagramLogoThin />
      <PiXLogoThin />
      <PiYoutubeLogoThin />
      <PiSnapchatLogoThin />
    </div>
  );
}
