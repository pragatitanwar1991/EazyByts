import React from 'react'
import "./About.css"
//import img from "../Assets/Pragati.jpeg"
const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Pragati Tanwar</h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>As a passionate MERN stack developer with over 7 years of experience in software development, I embody a deep commitment to crafting robust and efficient solutions. My journey reflects a relentless pursuit of knowledge and growth, constantly pushing the boundaries of what's possible in web development.

My proficiency in the MERN stack—MongoDB, Express.js, React, and Node.js—is not just about technical prowess but a testament to  ability to architect scalable applications that resonate with users. I thrive in creating seamless user experiences, leveraging React's component-based architecture and Node.js's asynchronous programming model to deliver responsive and dynamic web applications.</p>
          </div>
          <div className="right_container mt-3">
          <img src="Pragati2.jpeg" alt="" />
            
          </div>
        </div>
      </div>
    </>
  )
}

export default About