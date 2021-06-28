import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DropdownButton, Dropdown, Badge } from "react-bootstrap";

import avatar from "../resources/img/hve_favicon.svg";
import react_logo from "../resources/img/react.svg";
import behance from "../resources/img/social-media-btn/behance.svg";
import github from "../resources/img/social-media-btn/github.svg";
import mail from "../resources/img/social-media-btn/mail.svg";
import linkedin from "../resources/img/social-media-btn/linkedin.svg";

function Navigation() {
  var linkedin_link = "https://www.youtube.com/";
  var github_link = "https://www.youtube.com/";
  var behance_link = "https://www.youtube.com/";
  var mail_link = "https://www.youtube.com/";

  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const [lang_value, setValue] = useState(
    <i className="fas fa-globe-africa"></i>
  );
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <NavigationStyled>
      <div className="profile">
        <div className="avatar">
          <img className="avatar" src={avatar} alt="" />
        </div>

        <div className="light-dark-toggle">
          <input
            type="checkbox"
            id="chk"
            className="checkbox"
            onChange={() => setDarkMode(!darkMode)}
          />
          <label htmlFor="chk" className="label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <div className="ball"></div>
          </label>
        </div>

        <div className="lang-list">
          <DropdownButton
            alignRight
            title={lang_value}
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
            variant="Secondary"
            size="sm"
          >
            <Dropdown.Item eventKey="🇺🇸" onClick={() => handleClick("en")}>
              {t("NavBar.English")}
            </Dropdown.Item>
            <Dropdown.Item eventKey="🇫🇷" onClick={() => handleClick("fr")}>
              {t("NavBar.French")}
            </Dropdown.Item>
            <Dropdown.Item eventKey="🇲🇽" onClick={() => handleClick("es")}>
              {t("NavBar.Spanish")}
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active-class" exact>
            Portfolios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active-class" exact>
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact
          </NavLink>
        </li>
      </ul>
      {/* <footer className="footer">
        <p>
          @2021 <b>Lorem Ipsum</b>
        </p>
      </footer> */}
      <div className="footer-div">
          <div className="social-btn">
            <a href={linkedin_link} target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href={github_link} target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href={behance_link} target="_blank">
              <img src={behance} alt="behance" />
            </a>
            <a href={mail_link} target="_blank">
              <img src={mail} alt="mail" />
            </a>
          </div>
          <p className="copyright">
            {" "}
            {t("NavBar.MadeWith")}
            <img className="social-btn" src={react_logo} alt="" />
          </p>
        </div>
    </NavigationStyled>
  );
}

// const NavigationStyled = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   align-items: center;
//   height: 100%;
//   width: 100%;
//   border-right: 1px solid var(--border-color);
//   .avatar {
//     width: 100%;
//     border-bottom: 1px solid var(--border-color);
//     text-align: center;
//     padding: 1rem 0;
//     img {
//       width: 70%;
//       border-radius: 50%;
//       border: 8px solid var(--border-color);
//     }
//   }
//   .nav-items {
//     width: 100%;
//     text-align: center;
//     .active-class {
//       background-color: var(--primary-color-light);
//       color: white;
//     }
//     li {
//       display: block;
//       a {
//         display: block;
//         padding: 0.45rem 0;
//         position: relative;
//         z-index: 10;
//         text-transform: uppercase;
//         transition: all 0.4s ease-in-out;
//         font-weight: 600;
//         letter-spacing: 1px;
//         &:hover {
//           cursor: pointer;
//           color: var(--white-color);
//         }
//         &::before {
//           content: "";
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 0;
//           height: 50%;
//           background-color: var(--primary-color);
//           transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
//           opacity: 0.21;
//           z-index: -1;
//         }
//       }
//       a:hover::before {
//         width: 100%;
//         height: 100%;
//       }
//     }
//   }
//   .light-dark-toggle {
//     width: 90%;
//     height: 100%;
//     grid-column-start: 2;
//     grid-column-end: 3;
//     margin-top: 1.1rem;
//     margin-left: 1rem;
//     .checkbox {
//       opacity: 0;
//       position: absolute;
//     }
//     .checkbox:checked + .label .ball {
//       transform: translateX(24px);
//     }
//     .label {
//       background-color: #111;
//       border-radius: 50px;
//       display: flex;
//       justify-content: space-between;
//       position: relative;
//       padding: 5px;
//       height: 26px;
//       width: 50px;
//       transform: scale(1);
//     }
//     .ball {
//       height: 22px;
//       width: 22px;
//       top: 2px;
//       left: 2px;
//       border-radius: 50px;
//       background-color: #fff;
//       position: absolute;
//       transition: transform 0.2s linear;
//     }
//     .fa-moon {
//       color: #f1c40f;
//     }
//     .fa-sun {
//       color: #f39c12;
//     }
//   }
//   footer {
//     border-top: 1px solid var(--border-color);
//     width: 100%;
//     p {
//       padding: 1.3rem 0;
//       font-size: 1.1rem;
//       display: block;
//       text-align: center;
//     }
//   }
// `;

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 95%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .profile {
    width: 100%;
    height: 15%;
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 50% 25% 25%;
    .avatar {
      width: 90%;
      height: 100%;
      margin-left: 0.5rem;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    .light-dark-toggle {
      width: 90%;
      height: 100%;
      grid-column-start: 2;
      grid-column-end: 3;
      margin-top: 1.1rem;
      margin-left: 1rem;
      .checkbox {
        opacity: 0;
        position: absolute;
      }
      .checkbox:checked + .label .ball {
        transform: translateX(24px);
      }
      .label {
        background-color: #111;
        border-radius: 50px;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 5px;
        height: 26px;
        width: 50px;
        transform: scale(1);
      }
      .ball {
        height: 22px;
        width: 22px;
        top: 2px;
        left: 2px;
        border-radius: 50px;
        background-color: #fff;
        position: absolute;
        transition: transform 0.2s linear;
      }
      .fa-moon {
        color: #f1c40f;
      }
      .fa-sun {
        color: #f39c12;
      }
    }

    .lang-list {
      grid-column-start: 3;
      grid-column-end: 4;
      margin-top: 0.01rem;
      margin-left: 1.1rem;
      .dropdown-toggle::after {
        display: none;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: none;
      }
      .btn {
        background-color: #111111;
        color: white;
      }
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
  .footer-div {
    width: 100%;
    height: 13%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    .social-btn {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
      img {
        height: 80%;
        width: 25%;
      }
    }
    .copyright {
      margin-top: 0.2rem;
      margin-left: 0.4rem;
      text-align: left;
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
      img {
        height: 20%;
        width: 20%;
      }
    }
  }
`;

export default Navigation;
