import React from 'react'
import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { HeroSection } from './components/HeroSection'
import { Project } from './components/Project'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
