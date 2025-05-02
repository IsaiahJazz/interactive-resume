import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[linear-gradient(180deg,rgba(250,217,97,0.05),rgba(247,107,28,0.03))] py-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-[#F76B1C]">
          Skills
        </h1>

        {/* Skills Group 1: Languages */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
            Languages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg"
                alt="JavaScript"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg"
                alt="TypeScript"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg"
                alt="Java"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">Java</span>
            </div>
            <div className="flex flex-col items-center "></div>
          </div>
        </div>

        {/* Skills Group 2: Frontend */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
            Frontend
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg"
                alt="React.js"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">React.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg"
                alt="Next.js"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg"
                alt="HTML5"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg"
                alt="CSS3"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sass.svg"
                alt="SCSS"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">SCSS</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg"
                alt="Tailwind CSS"
                className="w-16 h-16 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Skills Group 3: Backend */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
            Backend
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg"
                alt="Node.js"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg"
                alt="Express.js"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">Express.js</span>
            </div>
          </div>
        </div>

        {/* Skills Group 4: Tools & CI/CD */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
            Tools & CI/CD
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubactions.svg"
                alt="GitHub Actions"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">GitHub Actions</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg"
                alt="Git"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kubernetes.svg"
                alt="Kubernetes"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/datadog.svg"
                alt="Datadog"
                className="w-12 h-12 mb-2 hover:scale-120"
              />
              <span className="text-lg text-gray-700">Datadog</span>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
            Methodologies
          </h2>
          <ul className="list-disc text-lg font-medium text-gray-700 ml-8">
            <li>Agile</li>
            <li>Scrum</li>
            <li>Kanban</li>
            <li>Test-Driven Development (TDD)</li>
            <li>Pair Programming</li>
            <li>Trunk Based Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
