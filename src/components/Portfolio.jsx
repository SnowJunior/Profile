import React from 'react'
import matatuu from '../assets/portfolio/matatuu.png'
import realtor from '../assets/portfolio/realtor.png'
import elewa from '../assets/portfolio/elewa.png'
import virusMed from '../assets/portfolio/coronaV.png'
import pizza from '../assets/portfolio/pizzariea.png'

const Portfolio = () => {


  const portfolios = [
    {
      id: 1,
      src: matatuu,
      demo: "https://snowjunior.github.io/matatuu/",
      code:"https://github.com/SnowJunior/matatuu",
    },
    {
      id: 2,
      src: realtor,
      demo:"https://realtor-frontend-ruddy.vercel.app/",
      code:"https://github.com/SnowJunior/Realtor-frontend",
    },
    {
      id: 3,
      src: elewa,
      demo:"https://elewa.ke",
      code:"https://github.com/SnowJunior/elewa-group/tree/main",
    },
    {
      id: 4,
      src: virusMed,
    },
    {
      id: 5,
      src: pizza,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={demo}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={code}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio