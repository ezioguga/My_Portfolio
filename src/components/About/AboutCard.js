import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className='purple'>Gugatharsan Sivalingam </span>
            from <span className='purple'> Jaffna, Sri Lanka.</span>
            <br />I am a Software Engineering Graduate from SLIIT and Completed
            my 6 months internship at Prodigi Interactive.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Watching Animes and
              Playing Video Games
            </li>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Writting Medium
              Articles
            </li>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Photography
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "If I try, I fail. If i don't try i'm never going to get it."{" "}
          </p>
          <footer className='blockquote-footer'>Aang (Avatar: The Last Airbender)
</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
