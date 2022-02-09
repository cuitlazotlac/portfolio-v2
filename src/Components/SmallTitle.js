import React from "react";
import styled from "styled-components";

function SmallTitle({ icon, title }) {
  return (
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  );
}

const SmallTitleStyled = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-right: 1rem;
    svg {
      font-size: 3rem;
      @media screen and (max-width: 670px) {
        font-size: 2,4rem;
      }
    }
  }
  h3 {
    color: var(--white-color);
    font-size: 2.5rem;
    // font-family: "Barlow Condensed", sans-serif;
    font-family: "Share Tech", sans-serif;
    @media screen and (max-width: 670px) {
      font-size: 1.7rem;
    }
  }
`;

export default SmallTitle;
