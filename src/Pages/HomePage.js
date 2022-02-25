import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";
import { NavLink } from "react-router-dom";

import HomeItem from "../Components/HomeItem";
import LinkButton from "../Components/shared/LinkButton";

import ConfsquareItem from "../Components/ConfsquareItem";
import ProjectsSection from "../Components/ProjectsSection";

import img from "../resources/img/avatar.svg";
import confsquareLogo from "../resources/img/confsquare/confsquareLogo.svg";

import Typical from "react-typical";

import { useTranslation } from "react-i18next";
import ReactGA from "react-ga";

function HomePage() {
  const { t, i18n } = useTranslation();

  const ClickHandlerConfsquareBtn = () => {
    ReactGA.event({
      category: "Button",
      action: "Homepage - Confsquare button clicked!",
    });
    console.log("Homepage - Confsquare button clicked!");
  };

  const ClickHandlerProjectsBtn = () => {
    ReactGA.event({
      category: "Button",
      action: "Homepage - Projects button clicked!",
    });
    console.log("Homepage - Projects button clicked!");
  };

  const ClickHandlerContactBtn = () => {
    ReactGA.event({
      category: "Button",
      action: "Homepage - Contact button clicked!",
    });
    console.log("Homepage - Contact button clicked!");
  };

  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <p>
          <img className="logo-home" src={img} alt=""></img>
        </p>
        <Typical
          loop={Infinity}
          steps={[
            "Hey I'm Hayssem",
            5000,
            "Salut, moi c'est Hayssem",
            5000,
            "Hola soy Hayssem",
            5000,
            "مرحبا انا هيسم",
            5000,
          ]}
        />
        {/* <h2 className="sub-title">{t("HomePage.SubTitle")}</h2> */}
        <div className="desc">
          <p>{t("HomePage.Desc_Part1")}</p>
          {/* <p>{t("HomePage.Desc_Part2")}</p> */}
          <p>{t("HomePage.Desc_Part3")}</p>
          <p>{t("HomePage.Desc_Part4")}</p>
        </div>
        <br />
        <p className="more">
          <NavLink to="/resume">
            <a className="more">
              {t("HomePage.More")} <i class="fas fa-arrow-right"></i>
            </a>{" "}
          </NavLink>
        </p>
        <div className="HomeItems">
          <ProjectsSection />
          <p className="more">
            <NavLink to="/portfolios">
              {/* <a className="more">
                {t("HomePage.AllProjects")} <i class="fas fa-arrow-right"></i>
              </a>{" "} */}
              {/* <a
            href="https://drive.google.com/file/d/1XqK292myheQ53gTAYmz20vpO4cv5Q7Fq/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            onClick={ClickHandler}
          > */}
              <LinkButton title={t("AboutPage.CV")} />
            </NavLink>
            {/* </a> */}
          </p>
          <br />
          <div className="ConfSquareItem">
            <a
              href="https://confsquare.com/"
              target="_blank"
              rel="noreferrer"
              onClick={ClickHandlerConfsquareBtn}
            >
              <ConfsquareItem
                icon={confsquareLogo}
                title={t("HomePage.Form1_Title")}
                cont1={t("HomePage.Form1_Desc1")}
                cont2={t("HomePage.Form1_Desc2")}
              />
            </a>
          </div>
          <br />
          <NavLink to="/contact" exact onClick={ClickHandlerContactBtn}>
            <HomeItem
              title={t("HomePage.Form4_Title")}
              cont1={t("HomePage.Form4_Desc1")}
              // cont2={t("HomePage.Form4_Desc2")}
            />
          </NavLink>
          <br />
          <br />
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .styles_typicalWrapper__1_Uvh {
    color: var(--white-color);
    text-align: left;
    font-size: 4rem;
    font-weight: 900;
    text-align: left;
    position: relative;
    padding-bottom: 1rem;
    letter-spacing: 3px;
    @media screen and (max-width: 642px) {
      font-size: 1rem;
      img {
        height: 185px;
      }
    }
    @media screen and (max-width: 571px) {
      font-size: 2rem;
      img {
        height: 185px;
      }
    }
  }
  .ConfSquareItem {
    a {
      color: inherit; /* blue colors for links too */
      text-decoration: inherit; /* no underline */
    }
  }
  .HomeItems {
    width: 100%;
    a {
      color: inherit; /* blue colors for links too */
      text-decoration: inherit; /* no underline */
    }
  }
  .typography {
    .logo-home {
      height: 300px;
    }
    .desc {
      text-align: left;
      @media screen and (max-width: 670px) {
        p {
          font-size: 0.9rem;
        }
      }
    }
    @media screen and (max-width: 642px) {
      .logo-home {
        height: 185px;
      }
    }
    @media screen and (max-width: 571px) {
      .logo-home {
        height: 185px;
      }
    }
    .main-title {
      // font-family: "Barlow Condensed", sans-serif;
      color: var(--white-color);
      text-transform: uppercase;
      text-align: left;
      font-size: 5rem;
      font-weight: 900;
      text-align: left;
      position: relative;
      padding-bottom: 1rem;
      letter-spacing: 3px;
      @media screen and (max-width: 642px) {
        font-size: 1rem;
        img {
          height: 185px;
        }
      }
      @media screen and (max-width: 571px) {
        font-size: 2rem;
        img {
          height: 185px;
        }
      }
    }
    .sub-title {
      font-family: "Roboto", serif;
      color: var(--white-color);
      text-transform: uppercase;
      text-align: left;
      font-size: 3rem;
      font-weight: 400;
      position: relative;
      text-align: center;
      padding-bottom: 1rem;
      letter-spacing: 2px;
      @media screen and (max-width: 642px) {
        font-size: 2rem;
        img {
          height: 185px;
        }
      }
      @media screen and (max-width: 571px) {
        font-size: 1.2rem;
        img {
          height: 185px;
        }
      }
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -10%);
    text-align: center;
    width: 80%;
    .more {
      text-align: end;
      font-weight: 500;
      a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
        @media screen and (max-width: 670px) {
          font-size: 0.8rem;
          i {
            margin-left: 4px;
            font-size: 0.8rem;
          }
        }
      }
      i {
        margin-left: 4px;
      }
    }
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
      }
      .icon {
        a {
          color: inherit; /* blue colors for links too */
          text-decoration: inherit; /* no underline */
        }
        border: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-facebook {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #a90067;
          color: #a90067;
        }
      }
    }
  }
`;

export default HomePage;
