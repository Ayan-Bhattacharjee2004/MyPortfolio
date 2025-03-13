import React from 'react';
import './about.css';

const About = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // const handleDownloadCV = () => {
  //   const link = document.createElement('a');
  //   link.href = '/path-to-your-cv.pdf'; // Replace with the actual CV path
  //   link.download = 'My_CV.pdf'; // Set the file name
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
 // fot cv part //onClick={handleDownloadCV}

  return (
    <div id="about" className="section2">
      <div className="about-container">
        <div className="left">
          <div className="img">
            <img src="src\assets\IMG_20230814_185743.jpg" alt="" className="profileimg" />
          </div>
        </div>
        <div className="right">
          <div className="aboutme">ABOUT ME</div><br />
          <h2 className="about">I AM AVAILABLE FOR MERN STACK DEVELOPMENT PROJECTS</h2>
          <p className="information">
            I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js. I also have basic knowledge of Python and experience with Git & GitHub for version control and collaboration. Whether you need a dynamic web app, an e-commerce platform, or a scalable backend solution, I can help bring your ideas to life. Let's build something amazing together!
          </p>
          <div className="reviewbox">
            <div className='rev'>
              <h3>280+</h3>
              <p>Google Review</p>
            </div>
            <div className='rev'>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className='rev'>
              <h3>49+</h3>
              <p>Award Winning</p>
            </div>
          </div>
          <div className="button2">
            <button className="get-in-touch-btn2" onClick={() => scrollToSection("contact")}>
              GET IN TOUCH <span className="arrow"></span>
            </button>
            <button className="get-in-touch-btn3" >   
              DOWNLOAD CV <span className="arrow"></span>    
            </button>
          </div>                 
        </div>
      </div>
    </div>
  );
};

export default About;
