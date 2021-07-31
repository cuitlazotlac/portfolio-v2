import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../resources/styles/Layouts";
import ServicesSection from "../Components/ServicesSection";
import ReviewsSection from "../Components/ReviewsSection";

import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t, i18n } = useTranslation();

  return (
    <MainLayout>
      <AboutStyled>
        <br />
        <br />
        <Title title={t("AboutPage.Title")} span={t("AboutPage.Desc")} />
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

export default AboutPage;
