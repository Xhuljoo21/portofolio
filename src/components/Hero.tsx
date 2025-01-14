import React from "react";
import { ArrowRight, Code2, Github } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

export function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium">
              <Code2 size={16} className="mr-2" />
              Software Developer
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Crafting Digital
              <span className="block text-blue-600 dark:text-blue-400">
                Solutions with Code
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              Passionate about building scalable applications and creating
              exceptional user experiences. Specialized in modern JavaScript
              frameworks and cloud technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:translate-y-[-2px] transition-all duration-300"
              >
                View Projects
                <ArrowRight className="ml-2 animate-bounceX" size={20} />
              </a>
              <a
                href="https://github.com/Xhuljoo21"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:translate-y-[-2px] transition-all duration-300"
              >
                <Github className="mr-2" size={20} />
                GitHub Profile
              </a>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                Available for projects
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                Remote work
              </div>
            </div>
          </div>

          <div className="relative lg:ml-8">
            <div className="animate-float">
              <CodeBlock />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
