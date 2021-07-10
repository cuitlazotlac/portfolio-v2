import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../resources/styles/Layouts";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="right-content">
            <a href="https://about.twitter.com/" target="_blank">
              <ContactItem
                title={"Phone"}
                icon={phone}
                cont={"+66-789675637"}
              />
            </a>
            <a href="https://about.twitter.com/" target="_blank">
              <ContactItem
                title={"Email"}
                icon={email}
                cont={"+66-789675637"}
              />
            </a>{" "}
            <a href="https://about.twitter.com/" target="_blank">
              <ContactItem
                title={"Address"}
                icon={location}
                cont={"+66-789675637"}
              />
            </a>
          </div>
          <div className="right-content">
            <a href="https://about.twitter.com/" target="_blank">
              <ContactItem title={"Phone"} icon={phone} cont={"07663520283"} />
            </a>
            <a href="https://about.twitter.com/" target="_blank">
              <ContactItem
                title={"Email"}
                icon={email}
                cont={"loremipsum@gmail.com"}
              />
            </a>
            <a href="https://about.twitter.com/" target="_blank">
              <ContactItem
                title={"Address"}
                icon={location}
                cont={"United Kingdom"}
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
        width: 70%;
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
