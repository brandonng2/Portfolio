import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Projects from './components/projects/Projects';

function App() {
  return (
   <>
   <Header />
   <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Projects />
   </main>
   </>
  );
}

export default App;
