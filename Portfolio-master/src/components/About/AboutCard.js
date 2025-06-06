import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
import { BsBookmarkHeart } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, my name is{" "}
            <span className="purple"> Catarina Seemann </span>
            I'm from <span className="purple"> Porto, Portugal.</span>
            <br />
            I am currently a Communication and Web Technologies master student
            at University of Aveiro.
            <br />
            And have completed a Bachelors in Science Communication from
            Lusófona University of Porto.
            <br />
            <br />
            Apart from website-ing, here are some other activities that I love
            to do!
          </p>
          <div
            style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}
          >
            <div
              className="about-activity"
              style={{ display: "flex", alignItems: "center" }}
            >
              <BsBookmarkHeart style={{ marginRight: "0.5rem" }} />
              Learning new skills
            </div>
            <div
              className="about-activity"
              style={{ display: "flex", alignItems: "center" }}
            >
              <BsBookmarkHeart style={{ marginRight: "0.5rem" }} /> Photography
            </div>
            <div
              className="about-activity"
              style={{ display: "flex", alignItems: "center" }}
            >
              <BsBookmarkHeart style={{ marginRight: "0.5rem" }} /> Reading
              Books
            </div>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
