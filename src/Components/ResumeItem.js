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
  achievement,
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
        <p>{region}</p>
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
        <p>{achievement}</p>
        <p>{technologies}</p>
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
      left: 0;
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
    h5 {
      color: var(--white-color);
      font-size: 2.3rem;
      font-weight: 900;
      padding-bottom: 0.4rem;
      @media screen and (max-width: 670px) {
        font-size: 1rem;
        font-weight: 700;
      }
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
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
    li {
      @media screen and (max-width: 670px) {
        font-size: 0.75rem;
        font-weight: 300;
      }
    }
  }
`;
export default ResumeItem;
