import React from 'react';
import './contact.css';
import { FaFacebookF, FaDribbble, FaLinkedinIn } from 'react-icons/fa'; // Import FontAwesome icons

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div id="contact" className="section1">
      <div className="contact-container">
        {/* Profile Section */}
        <div className="profile-section">
          <img src="src/assets/IMG_20230814_185743.jpg" alt="Professional portrait" className="profile-image" />
          <div className="contact-info">
            <label>Email</label>
            <p className="email">sample@domain.com</p>
            <label>Phone</label>
            <p className="phone">+044 9696 9696 3636</p>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://dribbble.com" className="social-icon dribbble" target="_blank" rel="noopener noreferrer">
              <FaDribbble />
            </a>
            <a href="https://linkedin.com" className="social-icon linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <h1>Let's Discuss Your Project</h1>
          <p className="subtitle">Always available for freelancing. Feel free to contact me.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            
            {/* Name and Email Side by Side */}
            <div className="form-row">
              <div className="form-group">
                <label>YOUR NAME</label>
                <input type="text" name="name" placeholder="Name *" required />
              </div>
              <div className="form-group">
                <label>YOUR EMAIL</label>
                <input type="email" name="email" placeholder="Email *" required />
              </div>
            </div>

            <div className="form-group">
              <label>SUBJECT</label>
              <input type="text" name="subject" placeholder="Subject *" required />
            </div>

            <div className="form-group">
              <label>YOUR MESSAGE</label>
              <textarea name="message" placeholder="Your message *" required rows="5"></textarea>
            </div>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
