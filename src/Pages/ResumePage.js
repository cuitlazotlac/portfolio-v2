import React from "react";
import { MainLayout } from "../resources/styles/Layouts";

import Title from '../Components/Title';
// import Skills from "../Components/Skills";
import Resume from "../Components/Resume";
import ImageSection from "../Components/ImageSection";

import { useTranslation } from "react-i18next";

function ResumePage() {
  const { t, i18n } = useTranslation();

  return (
    <MainLayout>
      <Title title={t("AboutPage.Title")} span={t("AboutPage.Desc")} />
      <ImageSection />
      <br/>
      {/* <Skills /> */}
      <Resume />
    </MainLayout>
  );
}

export default ResumePage;
