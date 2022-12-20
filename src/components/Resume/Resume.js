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
              title='Site Reliability Engineer [Pearson]'
              date='July 2022 - Current'
              content={[
                'Working on the multiple application migrations [ CDKTF, Pearson Development Pipeline, Lift and Shift]',
                "Owning the full planning & responsibilities for the application & data migrations for multiple products.",
                "Integration of DevSecOps tools with the applications.",
              ]}
            />
            <Resumecontent
              title='Associate Site Reliability Engineer [Pearson]'
              date='April 2021 - July 2022'
              content={[
                "Designed & Developed AMI Dashboard application with fellow team members to display AMI details team-wise, application-wise and also added additional views for vulnerabilities. This application was shared with all the SRE teams under Pearson to make their work easier",
                "Maintained best Agile & coding practices.",
                "Worked on the different technologies & tools such as GitLab, Bitbucket, Jenkins, Docker, Kubernetes, Terraform, AWS (most of the infra related work carried out using AWS services), Linux, Shell Scripting, 3rd party integrations (gitleak, Jacoco, NewRelic etc), MongoDB, Cassandra, RDS, Keyspace, PagerDuty.",
                "Developed quick troubleshooting skills.",
                "Handled P1, P2, P3 incidents and managed stakeholders with minimal support from seniors.",
                "Worked on the Cassandra to Keyspace data migration and was able to do the POC successfully for the dev team.",
                "Worked on the application migration projects to the newly developed framework.",
                "Demo newly introduce services to the team and get their opinion to apply them to the current workflow to make the work easier.",
                "Worked on the stories related to cost optimization, tag compliance to reduce operational costs & maintain the standard.",
                "Wrote synthetic scripts for different dev teams and onboard them.",
                "Worked on Ubuntu20 upgrades and GitLab migration-related works.",
                "Reviewed & updated the documents which belong to our team.",
                "Helped the team during critical periods such as Log4J, AWS outage incidents.",
                "Able to handle the incidents without escalations (PagerDuty on-call shifts).",
                "Maintained a good relationship with the dev team."
              ]}
            />
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
              title='MSc in Big Data Analytics (Robert Gordon University)'
              date='2022 - Current'
              content={["Reading"]}
            />
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
                "AWS Community Builder",
                "Completed Hacktoberfest [Oct 2020]",
                "Completed Google Cloud Kasthiram Challenge [Oct 2020]",
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
