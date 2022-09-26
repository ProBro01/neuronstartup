import React from "react";
// stylesheet
import "../../css/contacthome.css";
// images
import contactimg from "../../assests/images/contactus.png"

export const Contacthome = () => {
  return (
    <section className="contact__section">
      <div className="contact__cont">
        <div className="contact__heading-cont">
          <img src={contactimg} />
          <h1>Contact Us</h1>
        </div>
        <div className="contact__form-cont">
          <div className="contact__form">
          <input type="text" placeholder="Name" className="contact__form-input" />
          <input type="text" placeholder="Email" className="contact__form-input" />
          <input type="text" placeholder="Phone" className="contact__form-input" />
          <input type="text" placeholder="Address" className="contact__form-input" />
          <input type="text" placeholder="Subject" className="contact__form-input" />
          <textarea placeholder="Type Your Message here..."></textarea>
          <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};
