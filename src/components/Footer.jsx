import React from "react";
// stylesheet
import "../css/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__subscription_form">
        <div>
          <p>Subscribed</p>
          <input type={"text"} placeholder={"Get Subscription"} />
          <button>Get Updates</button>
        </div>
      </div>
      <div>
        <iframe
          className="footer__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8267574038473!2d75.81579872534198!3d26.781791729398485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9763e6030f1%3A0x4137675e5cf54360!2sJECRC%20Foundation!5e0!3m2!1sen!2sin!4v1663917759991!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="footer__data">
        <p>
          Sitapura Cir, Sitapura Industrial Area, Sitapura, Jaipur, Rajasthan
          302022, India
        </p>
        <p>
          <span>Email:</span>aayusah007@gmail.com
        </p>
        <p>
          <span>Phone:</span>8825312144
        </p>
      </div>
      <div className="footer__copyright">&#169;2022 by Neurons</div>
    </footer>
  );
};
