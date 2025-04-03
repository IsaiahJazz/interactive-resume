import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex pt-2 justify-center ">
      <div className="flex-col">
        <h1 className="text-4xl font-bold pb-1">Isaiah Nazaire</h1>
        <h2 className="font-semibold text-lg">Software Engineer</h2>
        <a
          href="/Isaiah-Nazaire-Resume.pdf"
          download="Isaiah-Nazaire-Resume.pdf"
        >
          <button className="text-zinc-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 rounded-full p-2">
            Download Resume
          </button>
        </a>
      </div>
      <Image
        src="/new-profile-pic.jpeg"
        alt="Picture of the author"
        className="rounded-full"
        width={300}
        quality={100}
        height={0}
      />
    </section>
  );
};

export default Hero;
