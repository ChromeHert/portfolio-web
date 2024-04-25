import React from 'react'
import  aboutpxl  from '../assets/aboutpxl.png'

const About = () => {  
  return (
    <>
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" id='about'>
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-medium leading-8">About Us
        </h2>
        <p class="mb-8 my-8 leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum modi aliquam eligendi temporibus quae doloribus reiciendis! Velit pariatur amet vitae natus. Modi quo sapiente nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, optio natus placeat, nulla ipsam provident, est odit dolores excepturi omnis incidunt soluta dolorem. Totam repellat sunt illo perferendis quaerat quia.</p>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="about"
            src={aboutpxl} />
     </div>
</div>  
    </>
  )
}

export default About