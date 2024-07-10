import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css"
import Type from "./Type";
const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
          <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Pragati Tanwar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
           
            <h2 style={{ fontSize: "1.2rem" }}>
              Let Me <span className="purple"> Introduce</span> myself
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}> I am fond of programming and I have at least learnt something 
              and aspire to learn it more and more...<br/>
              <br />Currently I have gained knowledge in...
              <i>
                <b className="purple"> C++. javascript, python, Machine Learning </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              </p>
           
          </div>
          <div className="right_div">
            <img src="hp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home