import React from "react";
// stylesheet
import "../css/footer.css";
// images
import logo from "..//assests/images/logo.webp";
// icons
import { GoLocation } from "react-icons/go"
import { AiOutlineMail, AiOutlineContacts } from "react-icons/ai"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__subscription_form">
        <div>
          <p>Subscribe</p>
          <input type={"text"} placeholder={"Email address..."} />
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
        <div className="footer__links">
          <ul>
            <p>MEDICATIONS</p>
            <li>Therapy for ADHD</li>
            <li>Therapy for Depression</li>
            <li>Therapy for Anxiety</li>
            <li>Therapy for stress</li>
            <li>Therapy for OCD</li>
            <li>Sleeping Disorders</li>
            <li>Therapy for Bullying</li>
            <li>Therapy for Breakups</li>
          </ul>
          <ul>
            <p>LINKS</p>
            <li>About Us</li>
            <li>Contact</li>
            <li>Online Medication</li>
          </ul>
          <ul>
            <p>FOUNDERS</p>
            <li>MR. xyz</li>
          </ul>
        </div>
        <div className="footer__address">
          <div className="footer__address-data">
            <h3>ADDRESS</h3>
            <p>
              <span><GoLocation /></span><span>
                Sitapura Industrial Area, Jaipur, Rajasthan
                </span>
            </p>
            <p>
              <span><AiOutlineMail/></span><span>
                aayusah007@gmail.com
                </span>
            </p>
            <p>
              <span><AiOutlineContacts/></span><span>
                8825312144
                </span>
            </p>
          </div>
          <div className="footer__address-img-cont">
            <img src={logo} />
            <p>Neuron Foundation</p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&#169;2022 by Neurons - by Aryan Yadav</p>
      </div>
    </footer>
  );
};
