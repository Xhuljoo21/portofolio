import React from "react";
import { Code, Palette, Terminal, Database } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-600" size={32} />,
      skills: [
        "Javascript",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "SCSS",
        "Bootstrap",
      ],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="text-blue-600" size={32} />,
      skills: ["Canva", "Responsive Design", "User Research", "Prototyping"],
    },
    {
      title: "Tools & Deployment",
      icon: <Terminal className="text-blue-600" size={32} />,
      skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
    },
    {
      title: "Backend Knowledge",
      icon: <Database className="text-blue-600" size={32} />,
      skills: ["Node.js", "RESTful APIs", "Laravel", "C#", "MySQL"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
