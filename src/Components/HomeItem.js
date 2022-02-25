import React from "react";
import styled from "styled-components";

function HomeItem({ title, icon, cont1, cont2 }) {
  return (
    <HomeItemStyled>
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
    </HomeItemStyled>
  );
}

const HomeItemStyled = styled.div`
  .HomeItem {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    border: 1px solid var(--border-color);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    a {
      color: inherit; /* blue colors for links too */
      text-decoration: inherit; /* no underline */
    }
    &:hover {
      transform: scale(1.1);
      transform: translate(7px, -7px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--second-light-color);
      font-weight: 900;
    }
    .right-items {
      text-align: left;
      margin-top: 1rem;
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
        a {
          color: inherit; /* blue colors for links too */
          text-decoration: inherit; /* no underline */
        }
        @media screen and (max-width: 670px) {
          font-size: 1.7rem;
        }
      }
    }
    p {
      font-size: 1rem;
      padding: 0.1rem 0;
      @media screen and (max-width: 670px) {
        font-size: 0.9rem;
      }
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

export default HomeItem;
