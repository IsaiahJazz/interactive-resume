import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F76B1C] mb-8">
          {" "}
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg"
            alt="JavaScript"
            className="w-16 h-16 mb-2"
          />
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg"
            alt="React"
            className="w-16 h-16 mb-2"
          />
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg"
            alt="TypeScript"
            className="w-16 h-16 mb-2"
          />
          <img
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kubernetes.svg"
            alt="Kubernetes"
            className="w-16 h-16 mb-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
