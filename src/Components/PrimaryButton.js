import React from "react";
import styled from "styled-components";

function PrimaryButton({ title }) {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
}

// const PrimaryButtonStyled = styled.a`
//   background-color: var(--primary-color);
//   padding: 0.8rem 2.5rem;
//   color: white;
//   cursor: pointer;
//   display: inline-block;
//   font-size: inherit;
//   text-transform: uppercase;
//   position: relative;
//   transition: all 0.4s ease-in-out;
//   &::after {
//     content: "";
//     position: absolute;
//     width: 0;
//     height: 0.2rem;
//     transition: all 0.4s ease-in-out;
//     left: 0;
//     bottom: 0;
//     opacity: 0.7;
//   }
//   &:hover::after {
//     width: 100%;
//     background-color: var(--white-color);
//   }
// `;

const PrimaryButtonStyled = styled.a`
  border: 3px solid var(--border-color);
  background: none;
  font-weight: 900;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  border-radius: 2.5px;
  transform-style: preserve-3d;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    transform: translate(7px, -7px);
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
    box-shadow: 5px 10px var(--border-color);
  }
  i {
    margin-right: 15px;
  }
`;

export default PrimaryButton;
