import React from "react";
import styled from "styled-components";
import background from "../resources/img/confsquare/background.jpg";

function ConfsquareItem({ title, icon, cont1, cont2 }) {
  return (
    <ConfsquareItemStyled>
      <div className="HomeItem">
        <div className="item">
          <img src={icon} alt="" />
          <div className="right-items">
            <h6>{title}</h6>
            <p>{cont1}</p>
            <p>{cont2}</p>
          </div>
        </div>
      </div>
    </ConfsquareItemStyled>
  );
}

const ConfsquareItemStyled = styled.div`
  .HomeItem {
    width: 100%;
    font-family: 'Lexend', sans-serif;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    border: 1px solid var(--border-color);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 5px 3px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    border-radius: 2.5px;
    transform-style: preserve-3d;
    width: 100%;56
    padding: 1rem;
    overflow: hidden;
    background-color: #FFC107;
    &:hover{
      transform: scale(1.1);
      transform: translate(7px, -7px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--second-light-color);
    }
      .right-items {
        text-align: right;
        margin-left: 2rem;
        margin-right: 1rem;
        a {
          color: inherit; /* blue colors for links too */
          text-decoration: inherit; /* no underline */
        }
        line-height: 1.2;
      }
      img {
        padding: 1rem;
        margin-left: 1rem;
        width: 16%;
      }
      .right-items {
        a {
          color: inherit; /* blue colors for links too */
          text-decoration: inherit; /* no underline */
        }
        h6 {
          font-size: 2rem;
          font-weight: 900;
          font-family: 'Lexend', sans-serif;
        a {
            color: inherit; /* blue colors for links too */
            text-decoration: inherit; /* no underline */
          }
        }
        p {
          font-size: 1rem;
          padding: 0.1rem 0;
          a {
            color: inherit; /* blue colors for links too */
            text-decoration: inherit; /* no underline */
          }
        }
        a {
          color: inherit; /* blue colors for links too */
          text-decoration: inherit; /* no underline */
        }
  }
`;

export default ConfsquareItem;
