import React from "react";
// stylesheet
import "../../css/contacthome.css"

export const Contacthome = () => {
  return (
    <section className="contact__section">
      <div className="contact__cont">
        <h1>Contact Us</h1>
        <div className="contact__form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Type Your Message here..."></textarea>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};
