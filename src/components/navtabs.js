import React from 'react'
import { Nav } from 'react-bootstrap'
import '../../src/App.css'
import { NavDropdown } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { NavLink } from 'react-bootstrap';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Nav variant="pills" className="justify-content-center nav nav-tabs flex-column tabmarg"
    // activeKey="#about"
    >
      <Nav.Item className="nav-item">
        <Nav.Link href="#About"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link  href="#Projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link href="#Contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
      </Nav.Item>
      <NavDropdown title="More!" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" target="_blank" href="https://soundcloud.com/evanoeb">My Music
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">TO BE EXPANDED...</NavDropdown.Item>
      </NavDropdown>
    </Nav>

    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <a
    //       href="#about"
    //       onClick={() => handlePageChange('About')}
    //       // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //       // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Home
    //     </a>
    //   </li>
    //   {/* <li className="nav-item">
    //     <a
    //       href="#resume"
    //       onClick={() => handlePageChange('Resume')}
    //       // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Resume
    //     </a>
    //   </li> */}
    //   <li className="nav-item">
    //     <a
    //       href="#Projects"
    //       onClick={() => handlePageChange('Projects')}
    //       // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Projects
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       onClick={() => handlePageChange('Contact')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavTabs;