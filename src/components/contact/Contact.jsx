import axios from "axios";
import React, { useState } from "react";
import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";
import shapeOne from "../../assets/shape-1.png";
import "./contact.css";
import { send } from "emailjs-com";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
    
    const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

    const handleSubmit = (e) => {
      setLoading(true)
    e.preventDefault();
    const toSend = {
      from_name: form.name,
      to_name: "Yohannes Teshome",
      subject: form.subject,
      message: form.message,
      from_email: form.email,
      reply_to: form.email,
    };

    send("service_396gx1m", "template_3dcigxk", toSend, "yHTDmDB2F3BFqTKf-")
        .then((response) => {
            setLoading(false)
          toast.success("Email sent successfully!")
        console.log("SUCCESS", response.status, response.text);
      })
        .catch((err) => {
            setLoading(false)
          toast.error("Email could not be sent!")
        console.log("FAILED", err);
      });
  };

  return (
    <section
      className='contact section'
      id='contact'>
      <h2 className='section__title text-cs'>Contact Me</h2>
      <p className='section__subtitle'>
        Let's <span>Talk About Ideas</span>
      </p>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegMap />
            </span>

            <h3 className='contact__card-title'>Address</h3>
            <p className='contact__card-data'>Addis Ababa, Ethiopia</p>
          </div>

          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegUser />
            </span>

            <h3 className='contact__card-title'>Freelance</h3>
            <p className='contact__card-data'>Available Right Now</p>
          </div>

          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegEnvelope />
            </span>

            <h3 className='contact__card-title'>Email</h3>
            <p className='contact__card-data'>yohannesteshome632@gmail.com</p>
          </div>

          <div className='contact__card'>
            <span className='contact__card-icon'>
              <FaRegAddressBook />
            </span>

            <h3 className='contact__card-title'>Phone</h3>
            <p className='contact__card-data'>+251 - 941 - 929438</p>
          </div>
        </div>

        <form
          className='contact__form'
          onSubmit={handleSubmit}>
          <div className='contact__form-group grid'>
            <div className='contact__form-div'>
              <label className='contact__form-tag text-cs'>
                Your full Name <b>*</b>
              </label>
              <input
                type='text'
                name='name'
                onChange={handleChange}
                value={form.name}
                className='contact__form-input'
              />
            </div>

            <div className='contact__form-div'>
              <label className='contact__form-tag text-cs'>
                Your Email Address <b>*</b>
              </label>
              <input
                type='email'
                name='email'
                onChange={handleChange}
                value={form.email}
                className='contact__form-input'
              />
            </div>
          </div>

          <div className='contact__form-div'>
            <label className='contact__form-tag text-cs'>
              Your Subject <b>*</b>
            </label>
            <input
              type='text'
              name='subject'
              onChange={handleChange}
              value={form.subject}
              className='contact__form-input'
            />
          </div>

          <div className='contact__form-div contact__form-area'>
            <label className='contact__form-tag text-cs'>
              Your Message <b>*</b>
            </label>
            <textarea
              name='message'
              onChange={handleChange}
              value={form.message}
              className='contact__form-input'></textarea>
          </div>

          <div className='contact__submit'>
            <button
              type='submit'
              className='btn text-cs'>
              {loading ? "Loading..." : "Send Message"}
              
            </button>
          </div>
        </form>
      </div>

      <div className='section__deco deco__left'>
        <img
          src={shapeOne}
          alt=''
          className='shape'
        />
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Contact Me</span>
      </div>
    </section>
  );
};

export default Contact;
