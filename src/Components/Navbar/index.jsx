import React from 'react'
import './navbar.css'
const Navbar = ({ sections }) => {
  return (
    <div>Navbar



      <div className='nav-logo'>
        Akash V
      </div>
      <div>
        {/* Use sections prop here */}
        {sections.map((section) => (
          <div key={section.id}>{section.section}</div>
        ))}
        {/* Rest of the Herosection component */}
      </div>
    </div>
  )
}

export default Navbar