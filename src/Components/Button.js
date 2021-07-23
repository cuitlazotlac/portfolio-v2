import React from "react";
import styled from "styled-components";

function Button({ filter, button }) {
  return (
    <ButtonsStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  background-color: var(--background-light-color-2);
  padding: 0.4rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-right: 1rem;
  margin-bottom: 0.6rem;
  padding: 0.6rem 2rem;
  // border: 2.5px solid var(--border-color);
  border: 1px solid var(--border-color);
  background: none;
  font-weight: 900;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
  border-radius: 2.5px;
  transform-style: preserve-3d;
  padding: 1rem;
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
const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.4rem auto;
`;

// const ButtonStyled = styled.button`
//   outline: none;
//   border: 3px solid black;
//   background: none;
//   font-weight: 900;
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
//   border-radius: 2.5px;
//   transform-style: preserve-3d;
//   //   width: 100%;
//   padding: 1rem;
//   overflow: hidden;
//   &:hover {
//     transform: scale(1.1);
//     transform: translate(7px, -7px);
//     transform-style: preserve-3d;
//     transition: all 0.2s ease-in-out;
//     box-shadow: 5px 10px black;
//   }
//   i {
//     margin-right: 15px;
//   }
// `;
export default Button;
