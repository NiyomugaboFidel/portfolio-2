import { Typography } from '@material-tailwind/react'
import React from 'react'

const About = () => {
  return (
    <div  id='about' className='p-10 mb-5'>
    <div className='block sm:flex lg:flex justify-between items-center w-full px-10'>
    <div className='lg:w-[50%] sm:w-[50%]'>
      <Typography
           style={{ fontWeight:'bold', fontSize:'16px'}}
           >
                     <span class="relative flex justify-center">
          <div
          class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
          ></div>

           <span class="relative z-10 bg-white px-6">I'M NIYOMUGABO FIDELE</span>
             </span>
           <span className='block '>About Me</span>


            </Typography>
           <Typography className='text-sm'>
            Lorem ipsum dolor sit
             amet consectetur adipisicing elit.
              Aut culpa dolorum nulla tempore
               mollitia iusto totam ad excepturi,
                eveniet placeat, illum deserunt quo
                 neque aspernatur nisi inventore! Ad, ea ex?
           </Typography>
      </div>
      <div>

      </div>
    </div>
    </div>
  )
}

export default About