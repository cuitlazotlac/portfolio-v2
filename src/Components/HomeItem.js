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
    border: 3px solid var(--border-color);
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
      .right-items {
        text-align: left;
        margin-left: 2rem;
        margin-right: 1rem;
        line-height: 1.2;
      }
      img {
        padding: 1rem;
        margin-left: 1rem;
        width: 16%;
      }
      .right-items {
        h6 {
          font-size: 2rem;
          font-weight: 900;
        }
        p {
          font-size: 1rem;
          padding: 0.1rem 0;
        }
    // .item {
    //   display: flex;
    //   align-items: center;
    //   background-color: #ffffff;
    //   padding: 3rem 0;
    //   border: 3px solid black;
    //   transition: all 0.3s ease-in-out;
    //   box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    //   border-radius: 2.5px;
    //   transform-style: preserve-3d;
    //   &:hover {
    //     transform: scale(1.1);
    //     transform: translate(7px, -7px);
    //     transform-style: preserve-3d;
    //     transition: all 0.2s ease-in-out;
    //     box-shadow: 5px 10px black;
    //   }
    //   .right-items {
    //     text-align: left;
    //     margin-left: 2rem;
    //     margin-right: 1rem;
    //     line-height: 1.2;
    //   }
    //   img {
    //     padding: 1rem;
    //     margin-left: 1rem;
    //     width: 16%;
    //   }
    //   .right-items {
    //     h6 {
    //       font-size: 2rem;
    //       font-weight: 900;
    //     }
    //     p {
    //       font-size: 1rem;
    //       padding: 0.1rem 0;
    //     }
    //   }
    // }
  }
`;

export default HomeItem;
