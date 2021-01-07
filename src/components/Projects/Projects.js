import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CKDA from "../../Assets/Projects/CKDA.PNG";
import SM from "../../Assets/Projects/SM.PNG";
import SOS from "../../Assets/Projects/SOS.png";
import ML from "../../Assets/Projects/ML.png";
import lambda from "../../Assets/Projects/lambda.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={CKDA}
              isBlog={false}
              title='Chronic Kidney Disease Prediction'
              description="Used the chronic kidney disease dataset from UCI and trained the model using 'scikit-learn' library using logistic-regression algorithm. The model was successfully able to detect chronic kidney disease based on the past patient's medical data. I was able to achive an accuracy of 93%."
              link='https://github.com/ezioguga/flask-API'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={SM}
              isBlog={false}
              title='SnapMate'
              description='This is an online anonymous dating chat application. Front-end was developed using React and Back-end was developed in Nodejs and socket'
              link='https://github.com/ezioguga/SnapMate_ChatApp_Client.'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={SOS}
              isBlog={false}
              title='Stackoverflowers-Sri Lanka'
              description='This is an ongoing project i do in my part-time. Planning to dedicate this site to the famous Stackoverflowers-Sri Lanka facebook group. Backend work is completed in Nodejs and front-end will be developed using React.'
              link='https://github.com/ezioguga/stackoverflows_SL'
            />
          </Col>
        </Row>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className='blog-card'>
            <BlogCard
              imgPath={ML}
              link='https://medium.com/analytics-vidhya/an-introduction-to-machine-learning-574bafa6fc66'
              title='An Introduction to Machine Learning'
              site='medium.com'
            />
          </Col>
          <Col md={4} className='blog-card'>
            <BlogCard
              imgPath={lambda}
              link='https://medium.com/prodigi-interactive/how-to-deploy-nodejs-serverless-application-in-aws-lambda-d7fccb9e356c'
              title='Deploying NodeJS serverless application in AWS Lambda'
              site='medium.com'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
