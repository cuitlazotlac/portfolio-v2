import React from "react";
import styled from "styled-components";
import resume from "../resources/img/picture.png";
import PrimaryButton from "./PrimaryButton";

import { useTranslation } from "react-i18next";

function ImageSection() {
  const { t, i18n } = useTranslation();

  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4 className="paragraph">{t("AboutPage.Description")}</h4>
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
        <a
          href="https://drive.google.com/file/d/1Z0zqMC5xDg1HdfIf0s4JkHuWwi1SWOaa/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <PrimaryButton title={t("AboutPage.CV")} />
        </a>
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
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
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
          // padding: 0.3rem 0;
          font-weight: 200;
        }
      }
    }
  }
`;
export default ImageSection;
