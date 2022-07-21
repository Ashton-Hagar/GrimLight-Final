import React from "react";
import "./Styles.css";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="HomeBG">
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

      <Container className="HomeContainer">
        <Row>
          <Col sm={12} className="Title">
            <span className="CinzelFont TitleSize">GrimLight</span>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="Title">
            <span className="DescriptionSize">
              A New ARPG That Takes Place In a Massive Fantasy World!
            </span>
          </Col>
        </Row>
        <Row className="HomeButtonLocation">
          <Col sm={12} className="Title">
            <button className="HomePlayNowButton">
              <span className="ButtonFontSize">Play Now</span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
