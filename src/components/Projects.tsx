import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-[#F76B1C] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
          Projects
        </h1>
        <div className="flex overflow-x-auto space-x-6 pb-6 ">
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-12 w-80 min-h-[320px] flex-shrink-0 border-2 border-white">
            <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
              Current Project: Resume Website
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-6 text-left">
              I&apos;m currently building my personal resume website to showcase
              my skills, experience, and projects. The website is designed to be
              both visually appealing and highly functional, providing a
              seamless user experience across devices.
            </p>
            <h3 className="text-xl font-semibold text-[#F76B1C] mb-2">
              Key Features:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-800 mb-6 text-left">
              <li>Responsive design optimized for both desktop and mobile</li>
              <li>Interactive animations and smooth transitions</li>
              <li>Downloadable resume button for easy access to my CV</li>
              <li>
                Accessible contact form with validation and spam filtering
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-[#F76B1C] mb-2">
              Technologies Used:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-800 text-left">
              <li>React.js (with functional components and hooks)</li>
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

          {/* Professional Project: Shared Header Component */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-12 w-80 min-h-[320px] flex-shrink-0 border-2 border-white">
            <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
              Professional Project: Shared Header Component
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-6 text-left">
              At a Fortune 500 eCommerce company, I contributed to the
              development of a shared header component used across all micro
              frontends. The goal was to improve consistency, performance, and
              developer experience by replacing legacy implementations with a
              modern, reusable React-based solution.
            </p>
            <h3 className="text-xl font-semibold text-[#F76B1C] mb-2">
              Key Contributions:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-800 mb-6 text-left">
              <li>Built modular React components using TypeScript and SCSS</li>
              <li>Wrote end-to-end tests using Jest and WebdriverIO (WDIO)</li>
              <li>
                Implemented Datadog monitoring to measure performance and
                stability
              </li>
              <li>
                Managed deployments and environment testing across dev, QA, and
                production
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-[#F76B1C] mb-2">
              Technologies Used:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-800 text-left">
              <li>React.js with TypeScript</li>
              <li>SCSS</li>
              <li>Jest & WebdriverIO (WDIO)</li>
              <li>Datadog</li>
              <li>GitHub Actions (CI/CD)</li>
            </ul>
          </div>

          {/* Professional Project: Order History Page Enhancements */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-12 w-80 min-h-[320px] flex-shrink-0 border-2 border-white">
            <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
              Professional Project: Order History Page Enhancements
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-6 text-left">
              I helped modernize the Order History and Order Details pages for a
              leading industrial supply company. This included displaying cost
              savings, improving user experience, and integrating promotion
              logic — significantly improving usability for B2B customers.
            </p>
            <h3 className="text-xl font-semibold text-[#F76B1C] mb-2">
              Key Contributions:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-800 mb-6 text-left">
              <li>
                Integrated backend APIs to display cost savings and promotional
                pricing
              </li>
              <li>
                Implemented a user-focused default view showing only their
                orders
              </li>
              <li>Improved page load times and reduced redundant API calls</li>
              <li>
                Collaborated with backend, QA, and design teams across a
                microfrontend architecture
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-[#F76B1C] mb-2">
              Technologies Used:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-800 text-left">
              <li>React.js with TypeScript</li>
              <li>Next.js</li>
              <li>SCSS</li>
              <li>REST APIs</li>
              <li>Jest & WDIO</li>
              <li>Feature flagging & A/B testing tools</li>
            </ul>
          </div>
        </div>
        {/*cutoff -------- */}
        <div className="text-center mt-12">
          <p className="text-lg text-white mb-6">
            This is my first of many personal projects and there is more to
            come! Stay tuned for updates
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
