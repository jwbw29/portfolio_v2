import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="border-2 border-green-500 mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center md:flex-row">
      <Hero />
      <Main />
    </div>
  );
}
