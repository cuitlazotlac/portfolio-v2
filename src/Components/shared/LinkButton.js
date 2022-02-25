import React from "react";
import styled from "styled-components";

function LinkButton({ title }) {
  return (
    <LinkButtonStyled>
      {title} <i class="fas fa-arrow-right"></i>
    </LinkButtonStyled>
  );
}

const LinkButtonStyled = styled.button`
  background-color: var(--background-light-color-2);
  font-size: 0.85rem;
  color: var(--white-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  padding: 5px 55px;
  border: 1px solid var(--border-color);
  background: none;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  // box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
  transform-style: preserve-3d;
  overflow: hidden;
  &:hover {
    background-color: var(--border-color);
    color: var(--txt-button);
    border: 1px solid var(--background-light-color);
    transform: scale(1.1);
    transform: translate(7px, -7px);
    transform-style: preserve-3d;
    transition: all 0.2s ease-in-out;
    box-shadow: 5px 10px var(--second-light-color);
    .span_icon{
        color: var(--white-color);
        background-color:red;
    }
  }
  .span_icon {
    font-size: 1rem;
    color: var(--white-color);
    margin-left: 0.335rem;
    margin-top: -1px;
    -webkit-transition: padding-left 0.25s ease-in-out;
    transition: padding-left 0.25s ease-in-out;
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
`;

export default LinkButton;
