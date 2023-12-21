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
        <Routes>
          <Route path='/' element={<Herosection />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Eduction />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
