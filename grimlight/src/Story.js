import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

function Story() {
  let navigate = useNavigate();
  return (
    <div className="Story">
      <Navbar bg="dark" variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand href="#home">GrimLight</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/GrimLight");
              }}
            >
              Overview
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Story");
              }}
            >
              Story
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Classes");
              }}
            >
              Classes
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Dungeon");
              }}
            >
              Dungeons
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Installation");
              }}
            >
              Installation
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Feedback");
              }}
            >
              Feedback
            </Nav.Link>
          </Nav>
          <button className="NavPlayNow">Play Now</button>
        </Container>
      </Navbar>

      <Container>
        <Row className="StoryTitleRow">
          <Col sm={12} className="Title">
            <span className="ClassesTitle">Story</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="StoryBG">
              <span className="ClassesTitle">Story:</span>
              <p className="Storytext">
                High Templar Dominus exiles the player character, referred to as
                "Exile," from Oriath for some crime depending on which class the
                player chose. Exiles are sent to Wraeclast, a penal colony,
                where they kill various monsters and people who have been
                tormenting other exiles in Wraeclast. It is discovered that
                Dominus has been secretly working with his assistant Piety
                studying thaumaturgy and are the cause of many of the troubles
                in Wraeclast. The Exile finds and kills both of them. In the
                process, the Exile encounters a 200-year-old woman called Dialla
                who explains how a thaumaturgical "Rapture Device" created by a
                man called Malachai is being used to awaken and release "The
                Beast". Exile travel to Highgate where they enter the Beast and
                kill Malachai.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <iframe
                className="VideoPHolder"
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/dbu0wBDC4Rg"
                title="Path of Exile: Siege of the Atlas Official Trailer"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Story;
