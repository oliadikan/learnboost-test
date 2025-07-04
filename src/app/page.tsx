import { Hero } from "@/components/hero";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col items-center">
        <Navbar />
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <Hero />
        </div>

        <Footer />
      </div>
    </main>
  );
}
