import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Installation() {
  let navigate = useNavigate();

  const [Step1, setStep1] = useState(
    'Step 1: Click the "Play Now" button in the top right of the page.'
  );
  const [Step2, setStep2] = useState("Step 2: Let the file download.");
  const [Step3, setStep3] = useState(
    "Step 3: Once downloaded, Click on the exe file and wait for the installation wizard to start."
  );
  const [Step4, setStep4] = useState(
    "Step 4: Choose the location where you would like GrimLight to be installed."
  );
  const [Step5, setStep5] = useState(
    "Step 5: Allow the installation wizard to finish installing the game."
  );
  const [Step6, setStep6] = useState(
    "Step 6: Now from the location you chose to install GrimLight there will be a GrimLight.exe file, click it to start your adventure!"
  );
  const [Btext, setBtext] = useState("Convert to French");

  const translate = () => {
    if (Btext === "Convert to French") {
      setBtext("Convert to English");
      setStep1(
        'Étape 1 : Cliquez sur le bouton "Play Now" en haut à droite de la page.'
      );
      setStep2("Étape 2 : Laissez le fichier se télécharger.");
      setStep3(
        "Étape 3 : Une fois téléchargé, cliquez sur le fichier exe et attendez que l'assistant d'installation démarre."
      );
      setStep4(
        "Étape 4 : Choisissez l'emplacement où vous souhaitez installer GrimLight."
      );
      setStep5(
        "Étape 5 : Laissez l'assistant d'installation terminer l'installation du jeu."
      );
      setStep6(
        "Étape 6 : Maintenant, à partir de l'emplacement que vous avez choisi pour installer GrimLight, il y aura un fichier GrimLight.exe, cliquez dessus pour commencer votre aventure !"
      );
    } else {
      setBtext("Convert to French");
      setStep1(
        'Step 1: Click the "Play Now" button in the top right of the page.'
      );
      setStep2("Step 2: Let the file download.");
      setStep3(
        "Step 3: Once downloaded, Click on the exe file and wait for the installation wizard to start."
      );
      setStep4(
        "Step 4: Choose the location where you would like GrimLight to be installed."
      );
      setStep5(
        "Step 5: Allow the installation wizard to finish installing the game."
      );
      setStep6(
        "Step 6: Now from the location you chose to install GrimLight there will be a GrimLight.exe file, click it to start your adventure!"
      );
    }
  };

  return (
    <div className="Installation">
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
            <span className="ClassesTitle">How to Install</span>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Row>
              <Button
                variant="danger"
                onClick={() => {
                  translate();
                }}
              >
                {Btext}
              </Button>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className="InstallBG">
            <Row className="InstallRows">
              <span className="InstallTextColor">{Step1}</span>
            </Row>
            <Row className="InstallRows">
              <span className="InstallTextColor">{Step2}</span>
            </Row>
            <Row className="InstallRows">
              <span className="InstallTextColor">{Step3}</span>
            </Row>
            <Row className="InstallRows">
              <span className="InstallTextColor">{Step4}</span>
            </Row>
            <Row className="InstallRows">
              <span className="InstallTextColor">{Step5}</span>
            </Row>
            <Row className="InstallRows">
              <span className="InstallTextColor">{Step6}</span>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Installation;
