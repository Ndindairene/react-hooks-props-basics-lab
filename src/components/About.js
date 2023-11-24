import React from "react";
import Links from "./Links";

function About(props) {
  const {bio} = props;
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== '' && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
