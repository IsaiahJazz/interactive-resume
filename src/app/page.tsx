import NavBar from "@/components/NavBar";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import "./globals.css";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
