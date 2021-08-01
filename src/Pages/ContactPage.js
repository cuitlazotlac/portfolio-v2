import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../resources/styles/Layouts";
import Title from "../Components/Title";
import ContactItem from "../Components/ContactItem";

import BehanceIcon from "../resources/img/social-media-btn/icons/behance.png";
import CodePenIcon from "../resources/img/social-media-btn/icons/codepen.png";
import DribbleIcon from "../resources/img/social-media-btn/icons/dribble.png";
import EmailIcon from "../resources/img/social-media-btn/icons/mail.png";
import GitHubIcon from "../resources/img/social-media-btn/icons/github.png";
import LinkedInIcon from "../resources/img/social-media-btn/icons/linkedin.png";

import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t, i18n } = useTranslation();

  return (
    <MainLayout>
      <br />
      <br />
      <Title title={t("Connect.Title")} span={t("Connect.Desc")} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="right-content">
            <a
              href="https://www.behance.net/cuitlazotlac"
              target="_blank"
              rel="noreferrer"
            >
              <ContactItem
                title={"Behance"}
                icon={<img src={BehanceIcon} />}
                cont={"behance.net/cuitlazotlac"}
              />
            </a>
            <a
              href="https://github.com/cuitlazotlac"
              target="_blank"
              rel="noreferrer"
            >
              <ContactItem
                title={"Github"}
                icon={<img src={GitHubIcon} />}
                cont={"github.com/cuitlazotlac"}
              />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/hayssem-elsayed/"
              target="_blank"
              rel="noreferrer"
            >
              <ContactItem
                title={"LinkedIn"}
                icon={<img src={LinkedInIcon} />}
                cont={"linkedin.com/in/hayssem-elsayed/"}
              />
            </a>
          </div>
          <div className="right-content">
            <a
              href="https://codepen.io/cuitlazotlac"
              target="_blank"
              rel="noreferrer"
            >
              <ContactItem
                title={"CodePen"}
                icon={<img src={CodePenIcon} />}
                cont={"codepen.io/cuitlazotlac"}
              />
            </a>
            <a
              href="https://dribbble.com/cuitlazotlac"
              target="_blank"
              rel="noreferrer"
            >
              <ContactItem
                title={"Dribble"}
                icon={<img src={DribbleIcon} />}
                cont={"dribbble.com/cuitlazotlac"}
              />
            </a>
            <a
              href="mailto:heyhayssem@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <ContactItem
                title={"Email"}
                icon={<img src={EmailIcon} />}
                cont={"heyhayssem@gmail.com"}
              />
            </a>
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      a {
        margin-top: 40px;
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
      }
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        margin-left: 10px;
        // width: 85%;
      }
      img {
        height: 2.3rem;
      }
    }

    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
