import React from "react";
import { Button, Navbar, BDiv, Nav, Collapse } from "bootstrap-4-react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Tittle = () => {
  return (
    <BDiv>
      <BDiv>
        <h1>
          <a href="/" id="logo">
            Zakład Fryzjerski Bożena
          </a>
        </h1>
      </BDiv>
      <BDiv>
        <Navbar light expand="lg">
          <Button success Tittle="call button">
            Zadzwoń <FontAwesomeIcon icon={faPhone} />
          </Button>
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Collapse navbar id="navbarSupportedContent" text="center">
            <Navbar.Nav mx="auto">
              <Nav.ItemLink href="/#price-div">Cennik</Nav.ItemLink>
              <Nav.ItemLink href="/#contact">Kontakt</Nav.ItemLink>
              <NavLink to="../pages/Gallery" className="nav-item nav-link">
                Galeria
              </NavLink>
            </Navbar.Nav>
          </Collapse>
        </Navbar>
      </BDiv>
    </BDiv>
  );
};

export default Tittle;
