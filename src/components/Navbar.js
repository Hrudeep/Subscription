import React, { useState, useEffect } from 'react';
import { Navbar, Button, Offcanvas } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; 
import CustomAccordion from '../components/CustomAccordion';
import { data } from '../data/accordionData';
import '../styles/Navbar.css';

const NavbarComponent = () => {
  const [accordionItems, setAccordionItems] = useState([]);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    setAccordionItems(data);
  }, []);

  const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-light fixed-top" expand="lg">
        <div className="container-fluid border-style">
          <div className="navbar-left">
            <CustomAccordion accordionData={accordionItems} />
          </div>
          <div className="navbar-right">
            <Button className="btn-signin">
              <i className="fas fa-sign-in-alt"></i> Sign In
            </Button>
          </div>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggleOffcanvas} className="d-lg-none">
            <FaBars className="hamburger-icon" />
          </Navbar.Toggle>
        </div>
      </Navbar>

      {/* Offcanvas Menu for Mobile */}
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* No Accordion or Sign In button here */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarComponent;