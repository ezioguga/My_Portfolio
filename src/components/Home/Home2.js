import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              B.Sc Software engineering graduate who is very enthusiastic on
              finding and learning new technologies and have some startup
              culture experiences 👨🏽‍🎓
              <br />
              <br />I am good in classics like
              <i>
                <b className='purple'> Java, Python and Javascript. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className='purple'>Data Science and DevOps.</b>
              </i>
              <br />
              <br />I have working experiences in
              <i>
                <b className='purple'> Modern Javascript Libraries </b>
              </i>
              like
              <i>
                <b className='purple'> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/ezioguga'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <i className='fab fa-github'></i>
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.facebook.com/eguga1/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/gugatharsan/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/guga_d_luffy/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
