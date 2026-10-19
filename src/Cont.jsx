
import React, { useState } from "react";
import "./Cont.css";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

function Cont() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email Us",
      value: "support@laptopx.com",
      detail: "We're here to help",
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      value: "+91 98765 43210",
      detail: "Mon – Sat, 9 AM – 6 PM",
    },
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      value: "Gujarat, India",
      detail: "We'd love to meet you",
    },
  ];

  return (
    <section className="cont-section" id="contact">
      <div className="cont-glow cont-glow-one" />
      <div className="cont-glow cont-glow-two" />

      <div className="cont-container">
        <div className="cont-heading">
          <span className="cont-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's Talk About
            <span> Your Next Laptop.</span>
          </h2>

          <p>
            Have a question or need help choosing the right machine?
            Our team is ready to help you find your perfect match.
          </p>
        </div>

        <div className="cont-layout">
          <div className="cont-left">
            <div className="cont-info-heading">
              <h3>Contact Information</h3>
              <p>Reach out to us anytime.</p>
            </div>

            <div className="cont-info-list">
              {contactInfo.map((item, index) => (
                <div
                  className="cont-info-card"
                  key={item.title}
                  style={{ "--cont-delay": `${index * 130}ms` }}
                >
                  <div className="cont-info-icon">{item.icon}</div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                    <span>{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="cont-note">
              <div className="cont-note-icon">
                <FiMessageSquare />
              </div>

              <div>
                <h4>Need quick assistance?</h4>
                <p>
                  Send us a message and tell us what you're looking for.
                </p>
              </div>
            </div>
          </div>

          <div className="cont-form-card">
            <div className="cont-form-heading">
              <span>CONTACT US</span>
              <h3>Send us a message</h3>
              <p>Fill in the details below and we'll be happy to help.</p>
            </div>

            {submitted && (
              <div className="cont-success" role="status">
                <FiCheckCircle />
                Thanks! Your demo form was submitted successfully.
              </div>
            )}

            <form className="cont-form" onSubmit={handleSubmit}>
              <div className="cont-form-row">
                <label className="cont-field">
                  <span>Your Name</span>

                  <div className="cont-input-wrap">
                    <FiUser />

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </label>

                <label className="cont-field">
                  <span>Email Address</span>

                  <div className="cont-input-wrap">
                    <FiMail />

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </label>
              </div>

              <label className="cont-field">
                <span>Subject</span>

                <input
                  className="cont-plain-input"
                  type="text"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="cont-field">
                <span>Your Message</span>

                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button className="cont-submit" type="submit">
                Send Message
                <FiSend />
              </button>

              <p className="cont-privacy">
                We respect your privacy and personal information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cont;
