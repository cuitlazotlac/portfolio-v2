import React from "react";
import styled from "styled-components";
// import { FaBeer } from 'react-icons/fa';
import credly from "../resources/img/credly.png";

function CredlyButton({ title }) {
  return (
    <CredlyButtonStyled>
      <img src={credly}></img>
      {title}
    </CredlyButtonStyled>
  );
}

const CredlyButtonStyled = styled.button`
  outline: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  width: 160px;
  height: 55.9px;
  border: 1px solid var(--border-color);
  background: none;
  font-weight: 200;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
  transform-style: preserve-3d;
  overflow: hidden;
  img {
    height: 116%;
  }
  ,
  &:active,
  &:focus {
    background-color: #fac3a1;
    color: var(--font-light-white);
  }
  &:hover {
    background-color: var(--border-color);
    color: var(--txt-button);
    // border: 1px solid var(--background-light-color);
    transform: scale(1.1);
    transform: translate(7px, -7px);
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
    box-shadow: 5px 10px var(--second-light-color);
  }
`;

export default CredlyButton;
