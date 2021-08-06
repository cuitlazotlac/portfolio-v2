import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import Particle from "../Components/Particle";

import HomeItem from "../Components/HomeItem";
import MainTitle from "../Components/MainTitle";
import ConfsquareItem from "../Components/ConfsquareItem";
import img from "../resources/img/hve_favicon.svg";
import confsquareLogo from "../resources/img/confsquare/confsquareLogo.svg";

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

        <h1 className="main-title">{t("HomePage.Title")}</h1>
        <h2 className="sub-title">{t("HomePage.SubTitle")}</h2>
        <div className="desc">
          <p>{t("HomePage.Desc_Part1")}</p>
          <p>{t("HomePage.Desc_Part2")}</p>
          <p>{t("HomePage.Desc_Part3")}</p>
          <p>{t("HomePage.Desc_Part4")}</p>
        </div>
        <p className="more">
          <a className="more" href="/resume">
            {t("HomePage.More")} <i class="fas fa-arrow-right"></i>
          </a>
        </p>
        {/* <div className="icons">
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
        </div> */}
        <br />
        <br />
        <div className="ConfSquareItem">
          <a href="https://confsquare.com/" target="_blank" rel="noreferrer">
            <ConfsquareItem
              icon={confsquareLogo}
              title={t("HomePage.Form1_Title")}
              cont1={t("HomePage.Form1_Desc1")}
              cont2={t("HomePage.Form1_Desc2")}
            />
          </a>
        </div>
        {/* <br />
        <br />
        <br /> */}
        <br />
        <div className="HomeItems">
          <a href="/portfolios">
            <HomeItem
              // icon={_blank}
              title={t("HomePage.Form2_Title")}
              cont1={t("HomePage.Form2_Desc1")}
              cont2={t("HomePage.Form2_Desc2")}
            />
          </a>
          <br />
          {/* <a href="/blogs">
            <HomeItem
              // icon={_blank}
              title={t("HomePage.Form3_Title")}
              cont1={t("HomePage.Form3_Desc1")}
              cont2={t("HomePage.Form3_Desc2")}
            />
          </a>
          <br /> */}
          <a href="/resume">
            <HomeItem
              // icon={_blank}
              title={t("HomePage.Form4_Title")}
              cont1={t("HomePage.Form4_Desc1")}
              cont2={t("HomePage.Form4_Desc2")}
            />
          </a>
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
      // font-family: "Dela Gothic One", cursive;
      font-family: "Barlow Condensed", sans-serif;
      color: var(--white-color);
      text-transform: uppercase;
      text-align: left;
      font-size: 6rem;
      font-weight: 900;
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
    .sub-title {
      font-family: "Barlow Condensed", sans-serif;
      color: var(--white-color);
      text-transform: uppercase;
      text-align: left;
      font-size: 4rem;
      font-weight: 700;
      position: relative;
      padding-bottom: 1rem;
      letter-spacing: 2px;
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
      text-align: end;
      font-weight: 600;
      a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
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
