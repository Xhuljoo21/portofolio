import React from "react";
import { Code2, ExternalLink, Globe } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "POS",
      description:
        "A fiscalization system for retail businesses that simplifies inventory, sales, and customer service while making sure everything complies with financial regulations.",
      image: "../../public/assets/pos.png",
      technologies: ["React", "Bootstrap", "Redux", "Laravel", "MySQL"],
      website: "https://pos.webmarco.com/",
    },
    {
      title: "Mobileri Rada",
      description: "A sleek and modern furniture retail website.",
      image: "../../public/assets/rada.png",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      website: "https://mobilerirada.al/",
    },
    {
      title: "AutoEno",
      description: "An automotive parts and accessories e-commerce platform.",
      image: "../../public/assets/eno.png",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      website: "https://autoeno.al/",
    },
    {
      title: "Markata Don Peshk",
      description:
        "A seafood restaurant website featuring product listings and contact inforamtion.",
      image: "../../public/assets/markata.png",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      website: "https://markatadonpeshk.com/",
    },
    {
      title: "Marco Travel",
      description: "An international travel agency based in Albania.",
      image: "../../public/assets/travel.png",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      website: "https://marcotravel.it/",
    },
    {
      title: "Morse Code Translator App",
      description:
        "A lightweight application that converts text to Morse code and vice versa. Designed for learners and hobbyists to quickly experiment with Morse code translations.",
      image: "../../public/assets/image.png",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/Xhuljoo21/morse-translator",
      live: "https://morse-translator-alpha.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <Code2 className="text-blue-600 mr-4" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={20} className="mr-2" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
