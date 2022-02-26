import React from "react";
import styled from "styled-components";

function CertificationItem({ year, title, subTitle, org }) {
  return (
    <CertificationItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{subTitle}</p>
        <p>{org}</p>
      </div>
    </CertificationItemStyled>
  );
}

const CertificationItemStyled = styled.div`
  display: flex;
  margin-bottom: 0;
  &:not(:last-child) {
    padding-bottom: 1rem;
  }
  .left-content {
    max-width: 50%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -8px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 1px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
      @media screen and (max-width: 670px) {
        font-size: 0.7rem;
        font-weight: 900;
      }
    }
  }
  .right-content {
    padding-left: 5rem;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 3%;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
      @media screen and (max-width: 670px) {
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        height: 1.35px;
        width: 3rem;
        background-color: var(--border-color);
      }
    }
    h6 {
      padding-bottom: 0rem;
      font-size: 1.2rem;
      font-weight: 600;
      @media screen and (max-width: 670px) {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 0;
      @media screen and (max-width: 670px) {
        font-size: 0.6rem;
        font-weight: 400;
      }
    }
    li {
      @media screen and (max-width: 670px) {
        font-size: 0.75rem;
        font-weight: 300;
      }
    }
  }
`;
export default CertificationItem;
