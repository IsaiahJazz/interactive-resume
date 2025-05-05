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
            {[
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg",
                alt: "JavaScript",
                label: "JavaScript",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg",
                alt: "TypeScript",
                label: "TypeScript",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg",
                alt: "Java",
                label: "Java",
              },
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-12 h-12 mb-2 hover:scale-110 transition-all"
                />
                <span className="text-lg text-gray-700">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Group 2: Frontend */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
            Frontend
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            {[
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
                alt: "React.js",
                label: "React.js",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg",
                alt: "Next.js",
                label: "Next.js",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg",
                alt: "HTML5",
                label: "HTML5",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg",
                alt: "CSS3",
                label: "CSS",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sass.svg",
                alt: "SCSS",
                label: "SCSS",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg",
                alt: "Tailwind CSS",
                label: "Tailwind CSS",
              },
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-12 h-12 mb-2 hover:scale-110 transition-all"
                />
                <span className="text-lg text-gray-700">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Group 3: Backend */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
            Backend
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            {[
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/node-dot-js.svg",
                alt: "Node.js",
                label: "Node.js",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg",
                alt: "Express.js",
                label: "Express.js",
              },
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-12 h-12 mb-2 hover:scale-110 transition-all"
                />
                <span className="text-lg text-gray-700">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Group 4: Tools & CI/CD */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#F76B1C] mb-4">
            Tools & CI/CD
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
            {[
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubactions.svg",
                alt: "GitHub Actions",
                label: "GitHub Actions",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg",
                alt: "Git",
                label: "Git",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kubernetes.svg",
                alt: "Kubernetes",
                label: "Kubernetes",
              },
              {
                src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/datadog.svg",
                alt: "Datadog",
                label: "Datadog",
              },
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-12 h-12 mb-2 hover:scale-110 transition-all"
                />
                <span className="text-lg text-gray-700">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Methodologies Section */}
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
            <li>Trunk-Based Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
