import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";



const Skills = () => {
  return (
    <div>
      <section class="py-10 leading-6 text-gray-100 sm:py-16 lg:py-24">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <h2 class="text-4xl text-black font-bold lg:text-5xl leading-9 sm:text-4xl sm:leading-tight">
              My Tech Stack
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4">
            <div class="relative overflow-hidden border-t-4 border-blue-500 bg-gray-600 shadow">
              <div class="px-6 py-10">
                <div class="flex items-center">
                  <i class="relative ml-2 inline-block text-6xl font-bold leading-none text-[#dd4b25]">
                  <FaHtml5 />
                  </i>
                  <span class="ml-3 text-base font-medium capitalize">
                    HTML
                  </span>
                </div>
              </div>
            </div>

            <div class="relative overflow-hidden border-t-4 border-blue-500 bg-gray-600 shadow">
              <div class="px-6 py-10">
                <div class="flex items-center">
                  <i class="relative ml-2 inline-block text-6xl font-bold leading-none text-[#244ade]">
                  <FaCss3 />
                  </i>
                  <span class="ml-3 text-base font-medium capitalize">
                    CSS
                  </span>
                </div>
              </div>
            </div>

            <div class="relative overflow-hidden border-t-4 border-blue-500 bg-gray-600 shadow">
              <div class="px-6 py-10">
                <div class="flex items-center">
                  <i class="relative ml-2 inline-block text-6xl font-bold leading-none text-[#f7d33a]">
                  <IoLogoJavascript />
                  </i>
                  <span class="ml-3 text-base font-medium capitalize">
                    JAVASCRIPT
                  </span>
                </div>
              </div>
            </div>

            <div class="relative overflow-hidden border-t-4 border-blue-500 bg-gray-600 shadow">
              <div class="px-6 py-10">
                <div class="flex items-center">
                  <i class="relative ml-2 inline-block text-6xl font-bold leading-none text-[#00d1f7]">
                  <FaReact />
                  </i>
                  <span class="ml-3 text-base font-medium capitalize">
                    REACT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills