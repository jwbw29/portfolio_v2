import Hero from "@/components/Hero";
import Main from "@/components/Main";

export default function Home() {
  return (
    <main className="border-2 border-green-500 p-2 flex flex-col md:flex-row min-h-screen max-w-4/5">
      <Hero />
      <Main />
    </main>
  );
}
