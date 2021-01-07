import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Gugatharsan_Sivalingam.pdf";

function Resume() {
  return (
    <Container fluid className='resume-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <i className='fas fa-download'>&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className='resume'>
          <Col md={6} className='resume-left'>
            <h3 className='resume-title'>Experience</h3>
            <Resumecontent
              title='Full Stack Developer Intern [Prodigi Interactive]'
              date='June 2020 - December 2020'
              content={[
                "Built modern web applications with React, Angular, Node.js, and NoSQL.",
                "Exposure to microservices and developed web services including REST.",
                "Deployed Backend applications using CI/CD pipeline with the help of Bitbucket, CodePipeline and EBS.",
                "Created WHM and Cpanel in the AWS instance.",
                "Integration of SecureD endpoints to our platform.",
                "Followed best version control practices using Bitbucket while working as a team.",
                "Prepared Documents of the workflow and submitted them.",
              ]}
            />
            <h3 className='resume-title'>Extracurricular Activities</h3>
            <Resumecontent
              title='Project Coordinator'
              content={[
                "Worked as the Project Coordinator of IEEE Metro SLIIT CS chapter.",
              ]}
            />
            <Resumecontent
              title='Volunteering'
              content={["Volunteer at Yarl Salesforce Ohana (YSFO)."]}
            />
            <Resumecontent
              title='Blogging'
              content={["Wrote few articles in medium."]}
            />
            <Resumecontent
              title='Student Member'
              content={[
                "Student Member at ISOC Sri Lankan Chapter",
                "Student Member at Computer Society of Sri Lanka",
              ]}
            />
          </Col>
          <Col md={6} className='resume-right'>
            <h3 className='resume-title'>Education</h3>
            <Resumecontent
              title='B.Sc. (Hons) Computer Science and Software Engineering [SLIIT] '
              date='2018 - 2020'
              content={["Award: Upper Second-Class Honours"]}
            />
            <Resumecontent
              title='O/L and A/L [Jaffna Hindu College]'
              date='2007 - 2017'
              content={["Did Mathematics"]}
            />
            <h3 className='resume-title'>Achivements</h3>
            <Resumecontent
              title=''
              content={[
                "Became Postman Student Expert [Jan 2021]",
                "Completed Hacktoberfest [Oct 2021]",
                "Completed Google Cloud Kasthiram Challenge [Oct 2021]",
                "Get Selected for HackX in Semifinals",
                "Participated in AIT Sustainability Hackathon 2020",
                "Karate Green Belt",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant='primary' href={pdf} target='_blank'>
            <i className='fas fa-download'>&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
