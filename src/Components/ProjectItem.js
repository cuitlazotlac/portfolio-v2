import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectImg from "../resources/img/react.svg";

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}) {
  return (
    <ProjectItemStyles>
      <div className="item">
        <Link to="/portfolios" className="projectItem__img">
          <img src={img} alt="project img" />
        </Link>
        <div className="projectItem__info">
          <Link to="/portfolios">
            <h3 className="projectItem__title">{title}</h3>
          </Link>
          <p className="projectItem__desc">{desc}</p>
        </div>
      </div>
    </ProjectItemStyles>
  );
}

const ProjectItemStyles = styled.div`
  .item {
    border: 1px solid var(--border-color);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.4), 0px 0px 50px rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    &:hover {
      transform: scale(1.1);
      transform: translate(7px, -7px);
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--second-light-color);
    }
  }
  .projectItem__img {
    width: 100%;
    // height: 300px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 0.7rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 1.2rem;
    font-weight: 200;
    letter-spacing: 0.5px;
  }
  .projectItem__desc {
    font-size: 1rem;
    font-weight: 200;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;
