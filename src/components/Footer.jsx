import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="container mt-20 px-4 pt-10 flex justify-evenly mx-auto md:flex-row flex-col items-center">
        <nav
          aria-label="Footer Navigation"
          class="mb-10 flex max-w-lg gap-6 lg:gap-10 sm:flex-row text-2xl"
        >
          <a href="#skills" class="font-medium text-gray-800">
            Skills
          </a>
          <a href="#about" class="font-medium text-gray-800">
            About
          </a>
          <a href="#work" class="font-medium text-gray-800">
            Work
          </a>
          <a href="mailto:ariyeric@gmail.com" class="font-medium text-gray-800">
            Contact
          </a>
        </nav>
        <p class="text-center text-2xl text-gray-800">
          © ariyeric@gmail.com <br /> #webDev2024
        </p>
      </footer>
    </>
  );
}

export default Footer