import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "bootstrap-4-react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="openings text-center">
        Godziny otwarcia elastyczne. Prosze dzwonic, aby umowic sie na
        preferowana godzine.
      </div>
      <Row className="text-center">
        <Col md="6" className="text-center adressDiv">
          Adres:
          <br />
          Białostocka 25
          <br />
          93-355 Łódź
          <br />
          <a href="tel:+48602104565" className="tel-nr notranslate">
            <FontAwesomeIcon icon={faPhone} />
            +48602104565
          </a>
        </Col>
        <Col  md="6" className="mapDiv">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.734796315141!2d19.480454090688863!3d51.71959430288734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a3486d6734d89%3A0x6c625379a247fbd5!2zQmlhxYJvc3RvY2thIDI1LCA5My0zNTUgxYHDs2TFuiwgUG9sc2th!5e0!3m2!1spl!2snl!4v1644897147091!5m2!1spl!2snl"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="google maps addon"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
