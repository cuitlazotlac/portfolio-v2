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
  // background-color: var(--background-light-color-2);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  width: 160px;
  height: 55.9px;
  // padding: 12px 28px;
  border: 1px solid var(--border-color);
  background: none;
  font-weight: 900;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
  border-radius: 2.5px;
  transform-style: preserve-3d;
  overflow: hidden;
  img {
    height: 116%;
  }
  ,
  &:active,
  &:focus {
    background-color: #FAC3A1;
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
  //   &:not(:last-child) {
  //     margin-right: 0.6rem;
  //   }
`;

export default CredlyButton;
