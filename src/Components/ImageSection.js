import React from "react";
import styled from "styled-components";
import resume from "../resources/img/picture.png";
import PrimaryButton from "./PrimaryButton";
import CredlyButton from "./CredlyButton";
import { FaBeer } from "react-icons/fa";

import { useTranslation } from "react-i18next";
import ReactGA from "react-ga";

function ImageSection() {
  const { t, i18n } = useTranslation();

  const ClickHandler = () => {
    ReactGA.event({
      category: "Button",
      action: "Aboutpage - Download Resume button clicked !",
    });
    console.log("Aboutpage - Download Resume button clicked !");
  };

  const ClickHandlerCredly = () => {
    ReactGA.event({
      category: "Button",
      action: "Aboutpage - Credly Profile button clicked !",
    });
    console.log("Aboutpage - Credly Profile button clicked !");
  };
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>{t("AboutPage.Description")}</h4>
        <p className="paragraph">{t("AboutPage.Description2")}</p>
        <p className="paragraph">{t("AboutPage.Description3")}</p>
        <p className="paragraph">{t("AboutPage.SoftSkillsInit")}</p>
        <div className="about-info">
          <div className="info-title">
            <p>• Product Strategy</p>
            <p>• User Interface Design</p>
            <p>• Stakeholder Management</p>
          </div>
          <div className="info">
            <p>• Data Analysis</p>
            <p>• A/B Testing</p>
            <p>• Cross-functional Team Leadership</p>
          </div>
        </div>
        <p className="paragraph">{t("AboutPage.TechSkillsInit")}</p>
        <div className="about-info">
          <div className="info-title">
            <p>• HTML/CSS/Javascript</p>
            <p>• React</p>
            <p>• SQL</p>
          </div>
          <div className="info">
            <p>• Docker/Kubernetes</p>
            <p>• PowerBI</p>
            <p>• Git</p>
          </div>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1yoFd8C8r22wBqBjT6WbOXIbbsbkoQbNK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            onClick={ClickHandler}
          >
            <PrimaryButton title={t("AboutPage.CV")} />
          </a>
          <a
            href="https://www.credly.com/users/hayssem-elsayed/badges"
            target="_blank"
            rel="noreferrer"
            onClick={ClickHandlerCredly}
          >
            <CredlyButton />
          </a>
        </div>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
      border-radius: 7px;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-family: "Barlow Condensed", sans-serif;
      font-size: 2rem;
      color: var(--white-color);
      @media screen and (max-width: 670px) {
        font-size: 1.7rem;
      }
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
      @media screen and (max-width: 670px) {
        font-size: 1rem;
      }
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;

      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 200;
        }
      }
      .info-title,
      .info {
        p {
          font-weight: 200;
          @media screen and (max-width: 670px) {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
`;
export default ImageSection;
