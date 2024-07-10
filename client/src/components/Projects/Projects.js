import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EventManager from "../../Assets/Projects/EventManager.png";
import Zomato from "../../Assets/Projects/Zomato.png";
import NetflixClone from "../../Assets/Projects/NetflixClone.png";
import instaclone from "../../Assets/Projects/instaclone.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EventManager}
              isBlog={false}
              title="Chatify"
              description="EventManager-SilentEntertainers ia a web app, where Users can add, delete, update and like event, and View each other's events !!"
              ghLink="https://github.com/pragatitanwar1991/EventManager"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zomato}
              isBlog={false}
              title="ZomatoClone"
              description="ZomatoClone - MERN stack food ordering application, with seamless UI/UX for customers 
              to order food without any hassle."
              
              ghLink="https://github.com/pragatitanwar1991/ZomatoClone"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetflixClone}
              isBlog={false}
              title="NetflixClone"
              description="Clone of renowned app Netflix, buld using Reactjs, Firebase and Tmdb Api "
              ghLink="https://github.com/pragatitanwar1991/NetflixCloneUI"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instaclone}
              isBlog={false}
              title="InstaClone"
              description="Seamless app with Login and signup with google authentication Like/dislike, comments and share any post, Post a image with caption Fully responsive Follow and Unfollow Email verification, show random users in suggestionlist. "
              ghLink="https://github.com/pragatitanwar1991/instaclone"
              
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
