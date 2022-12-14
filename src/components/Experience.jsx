import React from "react";

import dart from "../assets/dart.png";
import flutter from "../assets/flutter.png";
import javascript from "../assets/js.png";
import reactImage from "../assets/react.png";
import git from "../assets/github.png";
import html from "../assets/html.png";
import ruby from "../assets/ruby.png";
import kotlin from "../assets/kotlin.png";

const Experience = () => {
  const techStack = [
    {
      id: 1,
      src: dart,
      title: "Dart",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: flutter,
      title: "Flutter",
      style: "shadow-cyan-500",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: ruby,
      title: "Ruby",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-700",
    },
    {
      id: 7,
      src: git,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-pink-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-8">This is my tech stack</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techStack.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
