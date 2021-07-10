import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import Particle from "../Components/Particle";

import HomeItem from "../Components/HomeItem";
import MainTitle from "../Components/MainTitle";
import img from "../resources/img/hve_favicon.svg";

import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();

  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <p>
          <img className="logo-home" src={img}></img>
        </p>
        {/* <div class="typical">
          <MainTitle
            msg_1={t("Cat1.Text1")}
            msg_2={t("Cat2.Text1")}
            msg_3={t("Cat1.Text1")}
            msg_4={t("Cat1.Text1")}
          />{" "}
        </div> */}

        <h1 className="main-title">{t("HomePage.Title")}</h1>
        <p>{t("HomePage.Desc_Part1")}</p>
        <p>{t("HomePage.Desc_Part2")}</p>
        <a className="more" href="/about">
          {t("HomePage.More")} <i class="fas fa-id-badge"></i>
        </a>
        <div className="icons">
          <a
            href="https://codepen.io/pen/"
            target="_blank"
            rel="noreferrer"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://codepen.io/pen/"
            target="_blank"
            rel="noreferrer"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://codepen.io/pen/"
            target="_blank"
            rel="noreferrer"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://codepen.io/pen/"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://codepen.io/pen/"
            target="_blank"
            rel="noreferrer"
            className="icon i-youtube"
          >
            <YoutubeIcon />
          </a>
        </div>
        <br />
        <br />
        <div className="HomeItems">
          <a href="https://confsquare.com/" target="_blank" rel="noreferrer">
            <HomeItem
              icon={img}
              title={t("HomePage.Form1_Title")}
              cont1={t("HomePage.Form1_Desc1")}
              cont2={t("HomePage.Form1_Desc2")}
            />
          </a>
          <br />
          <br />
          <br />
          <br />
          <a href="/portfolios">
            <HomeItem
              icon={img}
              title={t("HomePage.Form2_Title")}
              cont1={t("HomePage.Form2_Desc1")}
              cont2={t("HomePage.Form2_Desc2")}
            />
          </a>
          <br />
          <a href="/blogs">
            <HomeItem
              icon={img}
              title={t("HomePage.Form3_Title")}
              cont1={t("HomePage.Form3_Desc1")}
              cont2={t("HomePage.Form3_Desc2")}
            />
          </a>
          <br />
          <a href="/about">
            <HomeItem
              icon={img}
              title={t("HomePage.Form4_Title")}
              cont1={t("HomePage.Form4_Desc1")}
              cont2={t("HomePage.Form4_Desc2")}
            />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .HomeItems {
    width: 100%;
  }
  .typography {
    .logo-home {
      height: 300px;
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
      font-family: "Dela Gothic One", cursive;
      color: var(--white-color);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 3.1rem;
      font-weight: bold;
      position: relative;
      padding-bottom: 1rem;
      letter-spacing: 3px;

      @media screen and (max-width: 642px) {
        font-size: 2rem;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -10%);
    text-align: center;
    width: 80%;
    .more {
      justify-content: left;
      font-weight: 600;
    }
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        // border: 2px solid var(--border-color);
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
      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
