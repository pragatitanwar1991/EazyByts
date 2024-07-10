import React from 'react'
import "./footer.css"
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Pragati Tanwar</h4>
            <p>© {year} Pragati Tanwar  All rights reserved</p>
            <Row>
          <Col md={12} className="home-about-social">
            
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pragatitanwar1991/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons2">
                <a
                  href="https://www.linkedin.com/in/pragatitanwar1991/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
           
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Passionate Web Developer.</p>
            <p>pragatitanwar1991@gmail.com</p>
            <p>+91 9810933114</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p>Full Stack Web Developer Intern, learning till proficiency..</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer