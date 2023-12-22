import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection/index';
import About from './Components/About';
import Eduction from './Components/Eduction';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const sections = [
    {
      id: 'about',
      section: 'About'
    },
    {
      id: 'education',
      section: 'Education'
    },
    {
      id: 'projects',
      section: 'Projects'
    },
    {
      id: 'contact',
      section: 'Contact'
    }
  ];

  return (
    <div className='app-container'>
      <Router>
        <Navbar sections={sections} />
        <Herosection/>
        <About />
        <Eduction />
        <Projects />
        <Contact />
        
      </Router>
    </div>
  );
}

export default App;
