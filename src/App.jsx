import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection/index'

function App() {
  const section =[
    {
      id:'home',
      section:'Home'
    },
    {
      id:'about',
      section:'about'
    },
    {
      id:'projects',
      section:'projects'
    },
    {
      id:'contact',
      section:'contact'
    }
  ]

  return (
    <> 
    <section className='mainbody'>

        <Navbar sections={section}/>
        <Herosection />
    </section>
    </>
  );
}

export default App;
