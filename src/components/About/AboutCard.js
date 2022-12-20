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
            <br />I am a Site Reliablity Engineer who always looks for the new challenges and learn different domains.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Watching Movies, Animes and
              Playing Video Games (I own a PS5)
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
