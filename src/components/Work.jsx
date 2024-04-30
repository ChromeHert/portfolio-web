import React from 'react';
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'

const Work = () => {
  return (
    <>
      <section className="py-20">
        <h2 className="text-4xl text-black text-center font-bold lg:text-5xl leading-9 sm:text-4xl sm:leading-tight">
          Work
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
                <p className="text-md font-medium text-indigo-500">Home page</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  A simple landing page built with HTML, CSS, and Tailwind
                </p>
                <p className="text-md font-light text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  vel neque ipsam?
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
                <p className="text-md font-medium text-indigo-500">Home page</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                A simple landing page built with HTML, CSS, and Tailwind
                </p>
                <p className="text-md font-light text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  vel neque ipsam?
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
                <p className="text-md font-medium text-indigo-500">Coding</p>
                <p className="mb-2 text-xl font-medium text-gray-800">
                  A react app
                </p>
                <p className="text-md font-light text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                  vel neque ipsam?
                </p>
              </div>
            </a>
          </article>
        </div>
      </section>
    </>
  );
}

export default Work