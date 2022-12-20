import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Site Reliability Engineer",
          "Reading Msc in Big Data Analytics",
          "AWS Certified Solution Architect Associate",
          "Open Source Contributor",
          "AWS Community Builder"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
