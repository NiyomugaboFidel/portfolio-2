import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <main className='w-[100%] '>
    
       <Home />
       <About />
       <Projects />
       <Contacts />
      </main>
      <Footer />

    </>
  )
}

export default App