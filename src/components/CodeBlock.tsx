import React from "react";

export function CodeBlock() {
  return (
    <div className="relative font-mono text-sm bg-gray-900 dark:bg-gray-800 text-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="space-y-2">
        <div className="flex">
          <span className="text-purple-400">const</span>
          <span className="text-blue-400 ml-2">developer</span>
          <span className="text-white ml-2">=</span>
          <span className="text-orange-400 ml-2">{"{"}</span>
        </div>
        <div className="ml-4">
          <span className="text-green-400">name:</span>
          <span className="text-yellow-300 ml-2">'Xhuljano Karafilaj' </span>,
        </div>
        <div className="ml-4">
          <span className="text-green-400">role:</span>
          <span className="text-yellow-300 ml-2">'Software Developer'</span>,
        </div>
        {/* <div className="ml-4">
          <span className="text-green-400">skills:</span>
          <span className="text-blue-400 ml-2">
            ['React', 'TypeScript', 'Node.js']
          </span>
        </div> */}
        <div>
          <span className="text-orange-400">{"}"}</span>
        </div>
      </div>
    </div>
  );
}
