import React from "react";
import styled from "styled-components";

import Badge from 'react-bootstrap/Badge'
import { InnerLayout } from "../resources/styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

import gatsby_icon from "../resources/img/skills-icon/gatsby.svg";
import runkit_icon from "../resources/img/skills-icon/runkit.svg";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="about-details">
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <Badge variant="secondary">New</Badge>{" "}
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .skills-tag{
    background-color: #F7DF1E
    // border: solid 3px black;
    border: solid 1px black;
    border-radius: 2.5px;
  }
  .about-details {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 80px;
    // grid-gap: 2px;
    img {
      height: 70%;
      width: 50%;
      // border: solid 3px black;
      border: solid 1px black;
      padding: 5px 5px;
      box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
      border-radius: 2.5px;
      transform-style: preserve-3d;
    //   padding: 1rem;
      overflow: hidden;
      &:hover {
        transform: scale(1.1);
        transform: translate(7px, -7px);
        // border-right: 9px solid black;
        // border-bottom: 9px solid black;
        transform-style: preserve-3d;
        transition: all 0.2s ease-in-out;
        box-shadow: 5px 10px var(--second-light-color);
      }
    }
  }
`;

export default Skills;
