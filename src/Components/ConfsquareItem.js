import React from "react";
import styled from "styled-components";

function ConfsquareItem({ title, icon, cont1, cont2 }) {
  return (
    <ConfsquareItemStyled>
      <div className="left-content">
        <img className="logo" src={icon} alt="" />
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{cont1}</p>
        <p>{cont2}</p>
      </div>
    </ConfsquareItemStyled>
  );
}

const ConfsquareItemStyled = styled.div`
  background-repeat: no-repeat;
  background-position: unset;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  transition: all 0.5s ease-in-out;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
  transform-style: preserve-3d;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  .logo {
    height: 65px;
    @media screen and (max-width: 670px) {
      display: none;
    }
  }
  &:hover {
    transform: scale(1.1);
    transform: translate(7px, -7px);
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
    box-shadow: 5px 10px var(--second-light-color);
  }
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  .left-content {
    @media screen and (max-width: 670px) {
      display: none;
    }
    padding: 1.5rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
      @media screen and (max-width: 670px) {
        font-size: 0.9rem;
      }
    }
  }
  .right-content {
    text-align: left;
    @media screen and (max-width: 670px) {
      text-align: center;
    }
    h6 {
      color: #000;
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
      font-weight: 900;
      @media screen and (max-width: 670px) {
        background: rgba(245, 245, 245, 0.55);
        font-size: 1.1rem;
      }
    }
    p {
      font-size: 1rem;
      font-weight: 200;
      color: #000;
      @media screen and (max-width: 670px) {
        background: rgba(245, 245, 245, 0.55);
        font-size: 0.9rem;
      }
    }
  }
`;

export default ConfsquareItem;
