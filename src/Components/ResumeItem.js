import React from "react";
import styled from "styled-components";

function ResumeItem({
  year,
  title,
  subTitle,
  region,
  perimeter,
  text,
  responsability_1,
  responsability_2,
  responsability_3,
  responsability_4,
  responsability_5,
  responsability_6,
  technologies,
}) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <h7>{region}</h7>
        <p>{perimeter}</p>
        <p>{text}</p>
        <ul>
          <li>{responsability_1}</li>
          <li>{responsability_2}</li>
          <li>{responsability_3}</li>
          <li>{responsability_4}</li>
          <li>{responsability_5}</li>
          <li>{responsability_6}</li>
        </ul>
        <p className="tech">{technologies}</p>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    max-width: 50%;
    padding-left: 17px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -8.2px;
      top: 6.5px;
      color: red;
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
      left: 5px;
      top: 15px;
      height: 1.8px;
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
    h5 {
      color: var(--white-color);
      font-size: 1.8rem;
      font-weight: 900;
      @media screen and (max-width: 670px) {
        font-size: 1rem;
        font-weight: 700;
      }
    }
    h6 {
      font-size: 1.2rem;
      font-weight: 600;
      padding-bottom: 0;
      @media screen and (max-width: 670px) {
        padding-bottom: 0;
        margin-bottom: 0;
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
    h7 {
      color: var(--white-color);
      font-size: 1.2rem;
      font-weight: light;
      @media screen and (max-width: 670px) {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
    p {
      font-size: 1.2rem;
      @media screen and (max-width: 670px) {
        font-size: 0.6rem;
        font-weight: 400;
      }
    }
    .tech {
      font-size: 1.1rem;
      font-weight: 100;
      font-family: monospace;
    }
    li {
      @media screen and (max-width: 670px) {
        font-size: 0.75rem;
        font-weight: 300;
      }
    }
  }
`;
export default ResumeItem;
