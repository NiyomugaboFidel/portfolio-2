import React from 'react'

const Footer = () => {
  const link = [
    {
      label:'Home',
      id:'#home', 

    },
    {
      label:'About',
      id:'#about', 
    },
    {
      label:'Projects',
      id:'#projects', 

    },
    {
      label:'Contacts',
      id:'#services', 
    },
    {
      label:'Contacts',
      id:'#contacts', 

    }
  ]
  return (
    <>
    <footer class="flex flex-col space-y-10 justify-center rounded-lg bg-[url('/img/background-3.png')] bg-cover bg-center">
    <div className="mx-auto max-w-5xl py-5">
    <div className="flex justify-center">
    <div className="logo"><strong style={{  fontFamily:'cursive' , fontStyle:'normal'}} 
    className='bg-gray-300 text-black flex justify-center items-center p-1'>
      <img className='w-[40px] h-[40px]' src="/logo.svg" alt="" />NI FIDELE</strong></div>
      
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
      itaque neque.
    </p>
</div>
<nav class="flex justify-center pt flex-wrap gap-6 text-white font-medium">
  {
    link.map(item =>{
     return(<a class="hover:text-gray-300" href={item.id}>{item.label}</a>)
    })
  }
</nav>

<div class="flex justify-center space-x-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
</div>
<p class="text-center text-gray-500 py-5 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>
    </>
  )
}

export default Footer