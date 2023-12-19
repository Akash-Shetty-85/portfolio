import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection/index'

function App() {
  const section = [
    {
      id: 'home',
      section: 'Home'
    },
    {
      id: 'about',
      section: 'About'
    },
    {
      id: 'projects',
      section: 'Projects'
    },
    {
      id: 'contact',
      section: 'Contact'
    }
  ]

  return (
    <>
      <section className='mainbody'>
        <Navbar sections={section} />
        <Herosection />
      </section>
    </>
  );
}

export default App;
