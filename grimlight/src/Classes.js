import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

function Classes() {
  let navigate = useNavigate();

  const [text, setText] = useState("Select A Class");
  const [Desc, setDesc] = useState("");
  const [Skills, setSkills] = useState("");
  const [Diff, setDiff] = useState("");

  const addText = (name, Description, Skills, Difficulty) => {
    setText(name);
    setDesc(Description);
    setSkills(Skills);
    setDiff(Difficulty);
  };
  return (
    <div className="ClassesBG">
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
        <Row className="ClassesTitleRow">
          <Col sm={12} className="Title">
            <span className="ClassesTitle">Classes</span>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="ClassesNavRow">
            <button
              className="ClassesNav"
              onClick={() => {
                navigate("/Dungeon");
              }}
            >
              View Dungeons
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className="ClassButtonRow">
              <button
                className="ClassButton"
                onClick={() => {
                  addText(
                    "Barbarian",
                    "Strong warriors with robust bodies. The more injured they are the stronger they become.",
                    <p>
                      Skill 1: Blade Whirlwind <br></br> Skill 2: Leap Slam
                      <br></br> Skill 3: Berzerker Mode
                    </p>,
                    "Easy"
                  );
                }}
              >
                <span className="ClassButtonText">Barbarian</span>
              </button>
            </Row>
            <Row></Row>
            <Row className="ClassButtonRow">
              <button
                className="ClassButton"
                onClick={() => {
                  addText(
                    "Rogue",
                    "Swift and agile, they defeat there foes using many strikes at incredible speeds",
                    <p>
                      Skill 1: Blade Flurry <br></br> Skill 2: invisiblity
                      <br></br> Skill 3: Backstab
                    </p>,
                    "Hard"
                  );
                }}
              >
                <span className="ClassButtonText">Rogue</span>
              </button>
            </Row>
            <Row className="ClassButtonRow">
              <button
                className="ClassButton"
                onClick={() => {
                  addText(
                    "Mage",
                    "Learned individuals from the mages academy. Pacifists by nature, however do not shy away from evil",
                    <p>
                      Skill 1: Fireball <br></br> Skill 2: Water Slash
                      <br></br> Skill 3: Black Hole
                    </p>,
                    "Medium"
                  );
                }}
              >
                <span className="ClassButtonText">Mage</span>
              </button>
            </Row>
            <Row className="ClassButtonRow">
              <button
                className="ClassButton"
                onClick={() => {
                  addText(
                    "Knight",
                    "Trained soldiers specializing in protecting their comrades",
                    <p>
                      Skill 1: Guard <br></br> Skill 2: Dome Shield
                      <br></br> Skill 3: Shield Bash
                    </p>,
                    "Medium"
                  );
                }}
              >
                <span className="ClassButtonText">Knight</span>
              </button>
            </Row>
            <Row className="ClassButtonRow">
              <button
                className="ClassButton"
                onClick={() => {
                  addText(
                    "Priest",
                    "People of faith, uses their faith to channel power from the gods into healing abilites",
                    <p>
                      Skill 1: Heal <br></br> Skill 2: Healing Field
                      <br></br> Skill 3: Smite
                    </p>,
                    "Easy"
                  );
                }}
              >
                <span className="ClassButtonText">Priest</span>
              </button>
            </Row>
          </Col>
          <Col>
            <span className="ClassDescSize">{text}:</span>
            <Accordion defaultActiveKey="1" bg="dark">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Class Description</Accordion.Header>
                <Accordion.Body>{Desc}</Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Skills</Accordion.Header>
                <Accordion.Body>{Skills}</Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Difficulty</Accordion.Header>
                <Accordion.Body>{Diff}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Classes;
