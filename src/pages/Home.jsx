import { Typography } from '@material-tailwind/react'
import React from 'react'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <>
    <div id='home' className='block sm:flex lg:flex justify-between items-center pt-[70px]'>
       <div className=' w-[100%] px-10 block lg:flex justify-between items-center '>
         <div className='content w-[50%] flex '>
         <div className='block'>
         <div color='black'
            style={{
               fontWeight:'bold',  
                width: '50%', 
                padding:'2px 30px',
                fontSize:'70px',
                
               }}
             >
          I'm Software Enginer
           </div>
         
         </div>
         </div>

         <div className='image '>
           <div>
           <motion.div
            
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease:'easeIn'
            }}
          
          >
          <img
           className="h-100 w-96 rounded-full object-cover object-center"
           src="/img/light.jpg"
           alt="nature image"
          />
          </motion.div>
           </div>
         </div>
       </div>
    </div>
    </>
  )
}

export default Home