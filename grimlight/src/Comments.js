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

function Comments() {
  let navigate = useNavigate();

  const [message, setMessage] = useState(" ");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (message.trim().length !== 0) {
      alert("Your feedback has been submitted. Thank you.");
    } else {
      alert(
        "ERROR: feedback is empty. Please type your feedback and try again."
      );
    }
  };

  return (
    <div className="Comments">
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
            <span className="ClassesTitle">Feedback</span>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col sm={12} className="Title">
            <span className="ClassesTitle">
              Do you have feedback? Submit It Here!
            </span>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="TextareaLocation">
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              className="TextareaSize"
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col className="FeedbackSubmit">
            <button className="SubmitButton" onClick={handleClick}>
              Submit
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Comments;
