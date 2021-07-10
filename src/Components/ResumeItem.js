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
  technologies
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
  @media screen and (max-width: 421px) {
    p,
    h5,
    h6 {
      font-size: 80%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 50%;
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
      // border: 2px solid var(--border-color);
      border: 1px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
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
    }
    h5 {
      color: var(--border-color);
      font-size: 2.3rem;
      font-weight: 900;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
    }
    h7 {
      padding-bottom: 0.6rem;
      font-size: 1.2rem;
    }
  }
`;
export default ResumeItem;
