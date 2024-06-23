import React, { useState } from 'react'
import Home from '../../pages/Home'
import Contacts from '../../pages/Contacts'
import About from '../../pages/About'
import Projects from '../../pages/Projects'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    const handleRoute = (id) => {
        const element = document.getElementById(id);
        if(element){
          element.scrollIntoView({behavior:'smooth'});
        }
      }
      
  return (
    <div>
        <div className=' pt-5 hidden sm:block lg:block xl:block h-[10vh] w-full'>
        <nav className='z-40 px-10 flex items-center justify-between w-full h-[60px]' >
            <div className="logo"><strong style={{  fontFamily:'cursive' , fontStyle:'normal'}} className='bg-gray-300  text-black flex justify-center items-center border  border-black p-1 rounded-md'><img className='w-[40px] h-[40px]' src="/logo.svg" alt="" />
            <span className='sm:hidden'>NI FIDELE</span></strong></div>
          <ul className='flex justify-center items-center'>
            <li className='px-5 text-center'><Link className='text-black font-semibold' to='/home' onClick={() => handleRoute('home')}>Home</Link></li>
            <li className='px-5 text-center'><Link className='text-black font-semibold' to='/about' onClick={() => handleRoute('about')}>About</Link></li>
            <li className='px-5 text-center'><Link className='text-black font-semibold' to='/projects' onClick={() => handleRoute('projects')}>Projects</Link></li>
            <li className='px-5 text-center'><Link className='text-black font-semibold' to='/contacts' onClick={() => handleRoute('contacts')}>Contacts</Link></li>
          
          </ul>
          <div className='cv flex'>
             <Button variant='text' 
              size='sm'
              className=' bg-black hover:bg-[rgba(40,39,39,0.9)] text-white'
               fullWidth>
                Download CV
             </Button>
             <img className='w-[40px] h-[40px] ml-[8px]' src="/public/img/github.svg" alt="" />
          </div>
        </nav>
      </div>
      {/* mobile phone nav */}
       <div className='h-[100%]  bg-gray-800 sm:hidden lg:hidden xl:hidden'>
       <nav className='container fixed bg-gray-800 px-5  w-full flex flex-col'>
         <div className='flex justify-between  py-2 items-center w-full'>
         <div className="logo"><strong style={{  fontFamily:'cursive' , fontStyle:'normal'}}
          className='bg-gray-300 text-black flex justify-center items-center border  border-black p-1 rounded-md'>
            <img className='w-[40px] h-[40px]' src="/logo.svg" alt="" />NI FID</strong></div>
         <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
         </div>

         

       </nav>
       <div className={`${isOpen ? 'block':'hidden'}  z-auto w-full pt-[35px] bg-gray-800`}>
          <div className='fixed  bg-gray-800 w-full'>
          <ul className='z-40'>
            <li className='px-4 py-3 bg-gray-500 m-2'><Link className='text-black' to='/home' onClick={() => handleRoute('home')}>Home</Link></li>
            <li className='px-4 py-3 bg-gray-500 m-2'><Link className='text-black' to='/about' onClick={() => handleRoute('about')}>About</Link></li>
            <li className='px-4 py-3 bg-gray-500 m-2'><Link className='text-black' to='/projects' onClick={() => handleRoute('projects')}>Projects</Link></li>
            <li className='px-4 py-3 bg-gray-500 m-2'><Link className='text-black' to='/contacts' onClick={() => handleRoute('contacts')}>Contacts</Link></li>
          
          </ul>
          <div className='cv px-2 py-4'>
             <Button variant='text' 
              size='sm'
              fullWidth
              className=' bg-black hover:bg-[rgba(40,39,39,0.9)] text-black'
               >
                Download CV
             </Button>
          </div>
          </div>
         </div>
       </div>
    </div>
   
  )
}

export default Navbar