import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-[#F76B1C]">
          About Me
        </h1>

        <div className="flex flex-col items-center space-y-6 text-lg md:text-xl text-gray-700 max-w-3xl">
          <p className="py-2 text-center">
            Hi, I&apos;m Isaiah Nazaire, a Full-Stack Software Engineer.
            I&apos;m passionate about creating modern, scalable web applications
            that prioritize performance and user experience. My goal is always
            to write clean, efficient code that brings seamless experiences to
            users.
          </p>
          <p className="py-2 text-center">
            After transitioning from engineering business analysis to software
            engineering, I&apos;ve found immense satisfaction in problem-solving
            and building something from scratch. Each project is an exciting
            opportunity to learn new technologies and solve real-world problems.
          </p>
          <p className="py-2 text-center">
            Outside of coding, I’m an avid chess player, a lover of cooking, and
            a weightlifting enthusiast. I’m always exploring new ways to
            challenge myself—whether it's refining my skills on the chess board
            or in the kitchen.
          </p>
          <p className="py-2 text-center">
            Feel free to check out my{" "}
            <a
              href="#projects"
              className="text-[#F76B1C] font-semibold hover:underline"
              aria-label="Check out my projects"
            >
              projects
            </a>{" "}
            or{" "}
            <a
              href="#contact"
              className="text-[#F76B1C] font-semibold hover:underline"
              aria-label="Contact me for collaborations or job opportunities"
            >
              contact me
            </a>{" "}
            for collaborations or job opportunities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
