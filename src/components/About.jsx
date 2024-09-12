import React from 'react'
import  aboutpxl  from '../assets/aboutpxl.png'

const About = () => {  
  return (
    <>
      <div
        className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        id="about"
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="text-4xl text-black font-bold lg:text-5xl leading-9 sm:text-4xl sm:leading-tight">
            About Me
          </h2>
          <p className="mb-8 my-8 text-3xl leading-relaxed">
          As a passionate frontend developer, I thrive on turning ideas into reality through clean, elegant code. With a strong foundation in HTML, CSS, JavaScript, TypeScript, React, and Next.js, I'm eager to collaborate on innovative projects and contribute to your web development team. My love for learning new technologies drives me to continuously improve my skills and deliver exceptional results.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="about"
            src={aboutpxl}
          />
        </div>
      </div>
    </>
  );
}

export default About