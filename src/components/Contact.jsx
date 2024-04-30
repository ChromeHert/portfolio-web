import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="md:pt-20" id='contact'>
          <div className="p-4 md:p-8">
            <h2 className="text-4xl text-black text-center font-bold lg:text-5xl leading-9 sm:text-4xl sm:leading-tight py-8">
              Contact Me
            </h2>
            <form className="flex flex-col items-center">
              <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="flex flex-col md:flex-row">
                  <input
                    id="name"
                    type="text"
                    className="my-2 py-2 px-4 rounded-md bg-[#4b5563] text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Name"
                  />
                  <input
                    id="email"
                    type="email"
                    className="my-2 py-2 px-4 rounded-md bg-[#4b5563] text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Email"
                  />
                </div>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Message"
                  className="my-2 py-2 px-4 rounded-md bg-[#4b5563] text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
                Send 
              </button>
            </form>
          </div>
        </div>
    </>
  );
}

export default Contact