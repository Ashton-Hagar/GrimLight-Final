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
function Dungeon() {
  let navigate = useNavigate();

  const [text, setText] = useState("Select A Dungeon");
  const [Desc, setDesc] = useState("");
  const [Floors, setFloors] = useState("");
  const [Diff, setDiff] = useState("");

  const addText = (name, Description, Floors, Difficulty) => {
    setText(name);
    setDesc(Description);
    setFloors(Floors);
    setDiff(Difficulty);
  };

  return (
    <div className="DungeonsBG">
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
            <span className="ClassesTitle">Dungeons</span>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="ClassesNavRow">
            <button
              className="ClassesNav"
              onClick={() => {
                navigate("/Classes");
              }}
            >
              View Classes
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
                    "Necromancer King",
                    "Once a great and powerful ruler of the strongest kingdom known to man, now cursed to rule forever with his undead subjects",
                    <p>
                      Floor 1: Castle Gates <br></br> Floor 2: The Courtyard{" "}
                      <br></br> Floor 3: King's Chambers
                    </p>,
                    "Easy"
                  );
                }}
              >
                <span className="DungeonButtonText">Necromancer King</span>
              </button>
            </Row>
            <Row></Row>
            <Row className="ClassButtonRow">
              <button
                className="ClassButton"
                onClick={() => {
                  addText(
                    "Frost Dragon",
                    "The home of the Frost Dragon Drakaris. He presides over the frozen lands with his army of giants and ice elves",
                    <p>
                      Floor 1: The Giants Keep <br></br> Floor 2: The Ice Forest{" "}
                      <br></br> Floor 3: The Frozen Keep
                    </p>,
                    "Medium"
                  );
                }}
              >
                <span className="DungeonButtonText">Frost Dragon</span>
              </button>
            </Row>
            <Row className="ClassButtonRow">
              <button
                className="ClassButton"
                onClick={() => {
                  addText(
                    "Flame Spirit",
                    "Sent by the gods to punish humanity, the flame spirit serves the god of fire. Its sole purpose is to cleanse the world of humans",
                    <p>
                      Floor 1: Field of Fire <br></br> Floor 2: Lava Basin{" "}
                      <br></br> Floor 3: Flaming Core
                    </p>,
                    "Easy-Medium"
                  );
                }}
              >
                <span className="DungeonButtonText">Flame Spirit</span>
              </button>
            </Row>
            <Row className="ClassButtonRow">
              <button
                className="ClassButton"
                onClick={() => {
                  addText(
                    "Vampire Queen",
                    "Born by the hatred of the witches who were burned at the stake, the vampire queen and her blend in with humans during the day and hunt them once night falls.",
                    <p>
                      Floor 1: Town Square<br></br> Floor 2: Bloody Crypt
                      <br></br> Floor 3: The Throneroom
                    </p>,
                    "Hard"
                  );
                }}
              >
                <span className="DungeonButtonText">Vampire Queen</span>
              </button>
            </Row>
            <Row className="ClassButtonRow">
              <button
                className="ClassButton"
                onClick={() => {
                  addText(
                    "The Haunted",
                    "A group of merchants who once peacefully traveled the world. Now posessed by a demon",
                    <p>
                      Floor 1: Dirt Road <br></br> Floor 2: City of Gold{" "}
                      <br></br> Floor 3: Merchants Carriage"
                    </p>,
                    "Hard"
                  );
                }}
              >
                <span className="DungeonButtonText">The Haunted</span>
              </button>
            </Row>
          </Col>
          <Col>
            <span className="ClassDescSize">{text}:</span>
            <Accordion defaultActiveKey="1" bg="dark">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Dungeon Description</Accordion.Header>
                <Accordion.Body>{Desc}</Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Dungeon Floors</Accordion.Header>
                <Accordion.Body>{Floors}</Accordion.Body>
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

export default Dungeon;
