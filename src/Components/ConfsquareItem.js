import React from "react";
import styled from "styled-components";
import background from "../resources/img/confsquare/background.jpg";

function ConfsquareItem({ title, icon, cont1, cont2 }) {
  return (
    <ConfsquareItemStyled>
      <div className="ConfsquareItem">
        <div className="item">
          <img src={icon} alt="" />
          <div className="right-items">
            <h6>{title}{' '}<i class="fas fa-external-link-alt"></i></h6>
            <p>{cont1}</p>
            <p>{cont2}</p>
          </div>
        </div>
      </div>
    </ConfsquareItemStyled>
  );
}

const ConfsquareItemStyled = styled.div`
  .ConfsquareItem {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    .item {
      display: flex;
      align-items: center;
      background-color: #ffc107;
      background: url("https://confsquare.com/_next/static/images/peeps-e9a28f121b895b484e28a7dd071141ab.png") #ffc107;
      background-repeat: no-repeat;
      background-position: unset;
      padding: 3rem 0;
      border: 1px solid var(--border-color);
      transition: all 0.3s ease-in-out;
      box-shadow: 0 5px 3px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
      border-radius: 2.5px;
      transform-style: preserve-3d;
      &:hover {
        transform: scale(1.1);
        transform: translate(7px, -7px);
        transform-style: preserve-3d;
        transition: all 0.2s ease-in-out;
        box-shadow: 5px 10px var(--second-light-color);
      }
      .right-items {
        margin-left: 2rem;
        text-align: left;
      }
      img {
        padding: 1rem;
        margin-left: 2rem;
        width: 15%;
      }
      .right-items {
        h6 {
          font-family: "Lexend", sans-serif;
          font-size: 1.4rem;
          font-weight: 900;
          color : #000;
          background-color: #fff
        }
        p {
          font-family: "Lexend", sans-serif;
          font-size: 1rem;
          font-weight: 300;
          color : #000;
          background-color: #fff
        }
      }
    }
  }
`;

export default ConfsquareItem;
