import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className='about-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className='purple'>I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className='about-img'
          >
            <img src={laptopImg} alt='about' className='img-fluid' />
          </Col>
        </Row>
        <h1 className='project-heading'>
          Professional <strong className='purple'>Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName='devicon-java-plain-wordmark' />
          <Techstack iconName='devicon-javascript-plain ' />
          <Techstack iconName='devicon-python-plain-wordmark ' />
          <Techstack iconName='devicon-flutter-plain' />
          <Techstack iconName='devicon-nodejs-plain-wordmark ' />
          <Techstack iconName='devicon-express-original-wordmark' />
          <Techstack iconName='devicon-react-original-wordmark' />
          <Techstack iconName='devicon-angularjs-plain' />
          <Techstack iconName='devicon-mysql-plain' />
          <Techstack iconName='devicon-mongodb-plain-wordmark' />
          <Techstack iconName='devicon-amazonwebservices-plain-wordmark' />
          <Techstack iconName='devicon-git-plain-wordmark' />
        </Row>
        <h1 className='project-heading'>
          <strong className='purple'>Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName='devicon-linux-plain' />
          <Techstack iconName='cib-visual-studio-code' />
          <Techstack iconName='cib-anaconda' />
          <Techstack iconName='cib-postman' />
          <Techstack iconName='devicon-bitbucket-original-wordmark' />
          <Techstack iconName='devicon-github-original-wordmark' />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
