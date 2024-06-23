import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Footer from './components/layout/Footer'
import './App.css'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <>
      <div className='w-[100%] px-[40px]'>
       <Navbar />
       <Home />
       <About />
       <Projects />
       <Contacts />
      </div>
      <Footer />

    </>
  )
}

export default App