import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-[#F76B1C] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
          Projects
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
            Current Project: Resume Website
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-6 text-left">
            I&apos;m currently building my personal resume website to showcase
            my skills, experience, and projects. The website is designed to be
            both visually appealing and highly functional, providing a seamless
            user experience across devices.
          </p>

          <h3 className="text-xl font-semibold text-[#F76B1C] mb-2">
            Key Features:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-800 mb-6 text-left">
            <li>Responsive design optimized for both desktop and mobile</li>
            <li>Interactive animations and smooth transitions</li>
            <li>Downloadable resume button for easy access to my CV</li>
            <li>Accessible contact form with validation and spam filtering</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#F76B1C] mb-2">
            Technologies Used:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-800 text-left">
            <li>React.js (with hooks for state management)</li>
            <li>Next.js (server-side rendering for SEO optimization)</li>
            <li>Tailwind CSS (for responsive and clean styling)</li>
            <li>
              JavaScript and TypeScript (for building the logic and handling
              types)
            </li>
            <li>Formspree (for sending emails from the contact form)</li>
            <li>
              Next.js API Routes (to handle form submissions and communicate
              with Formspree)
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-white mb-6">
            This is my first of many projects and there is more to come! Stay
            tuned for updates
          </p>
          <button
            className="bg-white text-[#F76B1C] font-semibold px-6 py-2 rounded-full shadow-md cursor-not-allowed"
            disabled
          >
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
