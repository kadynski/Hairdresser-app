import React from "react";

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
          <i className="fas fa-phone"></i>
          +48602104565
        </a>
      </div>
    </div>
  );
};

export default Contact;
