import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-around px-4 py-6 gap-6 min-h-[500px] bg-[linear-gradient(180deg,rgba(250,217,97,0.1),rgba(247,107,28,0.05))]"
    >
      <div className="flex flex-col items-center md:items-start max-w-[600px] lg:pl-40 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold">Isaiah Nazaire</h1>
        <h2 className="font-black text-3xl md:text-4xl">Software Engineer</h2>
        <h2 className="font-extralight text-xl md:text-2xl mt-2">
          Crafting seamless web experiences with modern technologies
          <br />
          Passionate about design, performance, and scalability
        </h2>
        <a href="/Isaiah-Nazaire-Resume.pdf" download>
          <button className="bg-white mt-5 text-[#F76B1C] font-bold px-6 py-3 rounded-full border-2 border-transparent hover:border-white hover:text-white hover:bg-gradient-to-r from-[#FAD961] to-[#F76B1C] hover:scale-110 ">
            Download Resume
          </button>
        </a>
      </div>
      <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex-shrink-0">
        <Image
          src="/new-profile-pic.jpeg"
          alt="Headshot of Isaiah Nazaire"
          className="rounded-full object-cover"
          fill
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
