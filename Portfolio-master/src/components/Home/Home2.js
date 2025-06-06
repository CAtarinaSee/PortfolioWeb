import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myAvatar from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <div md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            Let me<span className="purple"> Introduce </span> Myself
          </h1>
          <p className="home-about-body">
            Now that I'm finishing the first year of my master's degree, I
            finally feel like I've discovered where I want to go with my career.
            <br />
            I am a Communication and Web Technologies master student at
            University of Aveiro, and have completed a Bachelors in Science
            Communication from Lusófona University of Porto.
            <br />
            I am passionate about the intersection of technology and
            communication, and I am excited to explore how these fields can work
            together to create innovative solutions.
            <br />I am very excited to be starting my last year of university,
            and I am looking forward to the opportunities that lie ahead. I am
            eager to continue learning and growing in my field, and I am excited
            to see where my career will take me.
          </p>
        </div>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Follow me!</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CAtarinaSee"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/catarina-seemann-45a9b1174/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/caatarinas_view/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
