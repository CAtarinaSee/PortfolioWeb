import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import yu from "../../Assets/Projects/yu.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
import nasa from "../../Assets/Projects/nasa.png";
import moodreads from "../../Assets/Projects/moodreads.png";

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
              imgPath={moodreads}
              isBlog={false}
              title="MoodReads"
              description="MoodReads was my first ever programming project and it was a challenge. This website offers personalized reading recommendations based on the user's answers to the MoodQuiz. Users can also search for their favorite books and films."
              ghLink="https://github.com/CAtarinaSee/MP1-Javascript"
              demoLink="https://moodreads.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nasa}
              isBlog={false}
              title="Nasa Pictures Explore"
              description="This project is a React application that allows users to explore NASA's vast collection of images. It utilizes the NASA API to fetch data and display it in a user-friendly interface. Users can search for specific images, view details, and enjoy a seamless browsing experience. This was my first time with React and I learned a lot about components, state management, and API integration."
              ghLink="https://github.com/CAtarinaSee/MP2-React"
              demoLink="https://nasapicturesexplore.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yu}
              isBlog={false}
              title="YU"
              description="YU is an app designed to help teens and pre-teens manage their screen time. It allows users to personalize their own YU using stars earned by completing tasks set by their partner.
                YU has been my biggest project so far, and I am very proud of it. It was challenging, but I learned a lot throughout the process."
              ghLink="https://github.com/beatrizsfrodrigues/yu_cbl"
              demoLink="https://yu-mctw.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
