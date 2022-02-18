import React from "react";
import styled from "styled-components";

function SectionTitleH2({ title, span }) {
  return (
    <SectionTitleH2Styled>
      <h2>
        {title}{" "}
        <b>
          <span>{span}</span>
        </b>
      </h2>
    </SectionTitleH2Styled>
  );
}

const SectionTitleH2Styled = styled.div`
  position: relative;
  h2 {
    font-family: "Alliance No.2"
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    position: relative;
    text-align: left;
    padding-bottom: 0.7rem;
    @media screen and (max-width: 496px) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: 370px) {
      font-size: 2rem;
    }
    span {
      font-weight: 900;
      color: var(--span-color);
      font-size: 3rem;
      position: absolute;
      left: 0;
      top: 35%;
      z-index: -1;
      @media screen and (max-width: 620px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 496px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 370px) {
        font-size: 2rem;
      }
    }
  }
`;

export default SectionTitleH2;
