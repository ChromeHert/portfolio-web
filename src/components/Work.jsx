import React from 'react';
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png';
import work5 from '../assets/work5.png';
import project4 from '../assets/to-doImg.png'

const Work = () => {
  return (
    <>
      <section className="py-20" id='work'>
        <h2 className="text-4xl text-black text-center font-bold lg:text-5xl leading-9 sm:text-4xl sm:leading-tight">
          Projects
        </h2>
        <p className="mb-8 my-4 text-3xl text-center leading-relaxed">
            Check out some of my recent works
        </p>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src={work1}
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">Landing page</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  A website landing page built with HTML, CSS, Tailwind & JavaScript
                </p>
              </div>
            </a>
          </article>

          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src={work2}
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">Landing page</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                A website landing page built with HTML, CSS, Tailwind & JavaScript
                </p>
              </div>
            </a>
          </article>

          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src={work3}
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">Weather App</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  A weather information website (Tailwind and React JS)
                </p>
                <a href="https://eric-weather-app.netlify.app"
                  className='text-gray-500 text-base'>
                  Built with OpenWeatherApp API
                </a>
              </div>
            </a>
          </article>
        </div>

        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src={project4}
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">To-Do List App</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  Built with HTML, Tailwind CSS & JavaScript
                </p>
              </div>
            </a>
          </article>

          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src={work2}
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">Landing page</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                A website landing page built with HTML, CSS, Tailwind & JavaScript
                </p>
              </div>
            </a>
          </article>

          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src={work4}
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">Dashboard</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  Administrator panel
                </p>
                <a href="https://admcontrolscreen.netlify.app/">
                React JS App
                </a>
              </div>
            </a>
          </article>

          <article className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" className="block h-full w-full">
              <img
                className="max-h-40 w-full object-cover"
                alt="featured image"
                src={work5}
              />
              <div className="w-full bg-white p-4">
                <p className="text-md font-medium text-indigo-500">AsapMoves</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  A landing page website for logistics company (Tailwind and React JS)
                </p>
                <a href="https://asapmoves.netlify.app/">
                React JS app
                </a>
              </div>
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

export default Work