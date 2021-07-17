import React from "react";
import Typical from "react-typical";

import styled from "styled-components";

function MainTitle({ msg_1, msg_2, msg_3, msg_4 }) {
  return (
    <MainTitleStyled>
      <h2>
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[msg_1, 5000, msg_2, 5000, msg_3, 5000, msg_4, 5000]}
        />
      </h2>
    </MainTitleStyled>
  );
}

const MainTitleStyled = styled.div`
  position: relative;
  .h2 {
    // font-family: "Dela Gothic One", cursive;
    font-family: 'Barlow Condensed', sans-serif;
    color: var(--white-color);
    font-weight: 300;
    text-transform: uppercase;
    font-size: 3.1rem;
    // font-weight: bold;
    position: relative;
    padding-bottom: 1rem;
    letter-spacing: 3px;
    &:hover {
      color: white;
      -webkit-text-stroke-width: 1.5px;
      -webkit-text-stroke-color: black;
    }
  }
  h1 {
    // font-family: "Dela Gothic One", cursive;
    font-family: 'Barlow Condensed', sans-serif;
    color: var(--white-color);
    font-size: 3.1rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: left
    position: relative;
    padding-bottom: 0.7rem;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
    span {
      font-weight: 400;
      color: rgba(188, 188, 188, 0.4);
      font-size: 3.5rem;
      // font-family: "Dela Gothic One", cursive;
      font-family: 'Barlow Condensed', sans-serif;
      position: absolute;
      left: 0;
      top: 30%;
      z-index: -1;
      @media screen and (max-width: 620px) {
        font-size: 4rem;
      }
      @media screen and (max-width: 496px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 370px) {
        font-size: 2rem;
      }
    }
  }
`;

export default MainTitle;
