import React, {useState} from 'react'
import {AiOutlineClose, AiOutlieMenu} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='bg-black h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='text-3xl font-medium primary-color ml-4'>@Eric</h1>
        <ul className='hidden md:flex'>
            <li className='p-5'><a href="about">About</a></li>
            <li className='p-5'><a href="work">Work</a></li>
            <li className='p-5'><a href="contact">Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'> 
            {nav ? <AiOutlineClose size={20}/> : <AiOutlieMenu size={20}/>}
        </div>

        <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]' }>
        <h1 className='text-3xl font-medium primary-color m-4'>@Eric</h1>
        <ul className='p-8 text-2xl'>
            <li className='p-2'><a href="about">About</a></li>
            <li className='p-2'><a href="work">Work</a></li>
            <li className='p-2'><a href="contact">Experience</a></li>
            <li className='p-2'><a href="contact">Contact</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar