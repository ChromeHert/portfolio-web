import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroimage from '../assets/developer.png'

const Hero = () => {
  return (
    <section class="pt-10 md:pt-20">
    <div class="container mx-auto px-8 flex flex-col md:flex-row items-center">
      <div class="text-center md:text-left md:w-1/2">
        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-8">
          Welcome To My Portfolio <br /> 
          <TypeAnimation 
            sequence={[
                "I'm A Frontend Developer",
                1000,
                "HTML & CSS",
                1000,
                "Bootstrap & Tailwind",
                1000,
                "JavaScript",
                1000,
                "React JS",
                1000,
            ]}
            wrapper='span'
            speed={60}
            repeat={Infinity}
          />
        </h1>
      </div>
      <div class="md:w-auto md:ml-8">
        <img src={heroimage} alt="hero image" />
      </div>
    </div>
  </section>
  
  );
}

export default Hero