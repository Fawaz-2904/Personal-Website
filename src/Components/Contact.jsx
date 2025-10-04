import { useState } from "react";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }

    const phoneNumber = "919076437341"; 
    const text = `Hello, I am ${formData.name}. My email is ${formData.email}. Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank"); 

    console.log("Form Submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <>
      <header>
        <div>
          <nav className="nav">
            <a href="/" style={{ "--i": 1 }}>
              Home
            </a>
            <a href="/about" style={{ "--i": 2 }}>
              About
            </a>
            <a href="/projects" style={{ "--i": 3 }}>
              Projects
            </a>
            <a href="/contact" style={{ "--i": 4 }} className="active">
              Contact Me
            </a>
          </nav>
        </div>
      </header>

      <div className="contact">
        <h2
        >
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input">
            <label>Message: </label>
            <textarea
              name="message"
              placeholder="Enter the message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="icons">
            <a href="#" style={{ "--i": 1 }} target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="#" style={{ "--i": 2 }} target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:fawaz.abdul.fa@gmail.com" style={{ "--i": 3 }} target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
