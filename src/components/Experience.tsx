import React from "react";
import { Briefcase } from "lucide-react";

export function Experience() {
  const projects = [
    {
      title: "POS System Development",
      description: `
        Spearheaded the development of a scalable POS system tailored for retail and bar management using React, Laravel, and MySQL. 
        Led a team of developers, focused on user-friendly interfaces, and implemented features for product synchronization with CS-Cart.
      `,
      technologies: ["React", "Laravel", "MySQL", "Redux", "REST APIs"],
    },
    {
      title: "CS-Cart Add-ons Development",
      description: `
        Created multiple CS-Cart add-ons, including:
        - A fiscalization add-on integrating order processing with third-party APIs.
        - A shipping add-on for order detail transmission to shipping companies.
        - A booking filter enhancing room and car rental booking experiences.
        - A warehouse management add-on for inventory control across warehouses.
      `,
      technologies: ["PHP", "Smarty", "MySQL", "CS-Cart"],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <Briefcase className="text-blue-600 mr-4" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-6 space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-500">{project.period}</p>
                </div>
              </div>
              <p className="text-gray-600 whitespace-pre-wrap">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
