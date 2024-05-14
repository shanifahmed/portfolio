import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";


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
              imgPath={zomato}
              isBlog={false}
              title="Chatify"
              description="zomato a food order Application using Angular js , Html5 , Css3."
              ghLink="https://github.com/shanifahmed/zomato"
              demoLink=""
            />
          </Col>

          

          

         

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
