import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center">
     <span> 2022 @ </span>
      <a href="mailto:kadynski@wp.pl" className="footerLink">
      Krzysztof Kadynski
      <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </footer>
  );
};

export default Footer;
