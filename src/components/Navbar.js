import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-scroll"

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <Link className='navbar-brand' href='#'>
          Sai Ganesh
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#000' }} />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link smooth={true} to="home" className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth={true} to="about"  className='nav-link' href='#'>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth={true} to="Skills" className='nav-link' href='#'>
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth={true} to="Experience" className='nav-link' href='#'>
                Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth={true} to="Projects" className='nav-link' href='#'>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth={true} to="contact" className='nav-link' href='#'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
