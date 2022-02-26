import React from "react";
import styled from "styled-components";

function PrimaryButton({ title }) {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
}

const PrimaryButtonStyled = styled.button`
  outline: none;
  background-color: var(--background-light-color-2);
  font-size: inherit;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  width: 160px;
  height: 55.9px;
  margin-right: 1rem;
  margin-bottom: 0.6rem;
  padding: 14px 28px;
  border: 1px solid var(--border-color);
  background: none;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
  transform-style: preserve-3d;
  overflow: hidden;
  &:active,
  &:focus {
    background-color: var(--second-light-color);
    color: var(--font-light-white);
    border: 1px solid var(--background-light-color);
  }
  &:hover {
    background-color: var(--border-color);
    color: var(--txt-button);
    border: 1px solid var(--background-light-color);
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

export default PrimaryButton;
