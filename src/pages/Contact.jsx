import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact">
      <div className="openings text-center">
        Godziny otwarcia elastyczne. Prosze dzwonic, aby umowic sie na
        preferowana godzine.
      </div>
      <div className="text-center">
        Adres:
        <br />
        Białostocka 25
        <br />
        93-355 Łódź
        <br />
        <a href="tel:+48602104565" className="tel-nr">
          <FontAwesomeIcon icon={faPhone} />
          +48602104565
        </a>
      </div>
    </div>
  );
};

export default Contact;
