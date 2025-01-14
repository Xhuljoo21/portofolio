import React from "react";
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Xhuljano.dev
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <a
              href="https://github.com/Xhuljoo21"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/xhuljano-karafilaj-9b78a522b/"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:xhuljano2121@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
