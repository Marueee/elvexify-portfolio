import { Navbar } from "@/components/navbar/Navbar";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { Hero } from "@/components/hero/Hero";
import { Intro } from "@/components/intro/Intro";
import { Services } from "@/components/services/Services";
import { Solutions } from "@/components/solutions/Solutions";
import { Projects } from "@/components/projects/Projects";
import { Technologies } from "@/components/technologies/Technologies";
import { About } from "@/components/about/About";
import { Team } from "@/components/team/Team";
import { Values } from "@/components/values/Values";
import { Process } from "@/components/process/Process";
import { Cta } from "@/components/cta/Cta";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <Solutions />
        <Projects />
        <Technologies />
        <About />
        <Team />
        <Values />
        <Process />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
