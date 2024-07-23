import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="border-2 border-green-500 mx-auto flex min-h-screen max-w-screen-xl flex-col justify-center px-6 md:px-12 md:flex-row md:gap-20 xl:gap-20">
      <Hero />
      <Main />
    </div>
  );
}
