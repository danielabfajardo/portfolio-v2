import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black-100">
      <div className="w-full flex flex-col lg:flex-row p-9 md:p-16 lg:px-20 lg:py-0">
        <FloatingNav navItems={navItems} />
        <div className="flex flex-col lg:flex-row gap-28 lg:gap-0"> 
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:justify-between lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:py-24 gap-12 lg:gap-0">
            <Hero />
            <Contact />
          </div>
          <div className="lg:py-20 lg:w-1/2 flex flex-col items-start gap-16"> 
            <About />
            <Experience />
            <Projects />
            <Blogs />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
