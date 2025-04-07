import Image from "next/image";
import NavBar from "@/components/NavBar";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div>
        <Hero />
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}
