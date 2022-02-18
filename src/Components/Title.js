import React from "react";
import styled from "styled-components";

function Title({ title, span }) {
  return (
    <TitleStyled>
      <h2>
        {title}{" "}
        <b>
          <span>{span}</span>
        </b>
      </h2>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  position: relative;
  h2 {
    font-family: "Alliance No.2";
    color: var(--white-color);
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.7rem;
    @media screen and (max-width: 496px) {
      font-size: 2.8rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
    span {
      font-family: "Alliance No.2"
      font-weight: 900;
      color: var(--span-color);
      font-size: 3.5rem;
      position: absolute;
      left: 0;
      top: 45%;
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

export default Title;
