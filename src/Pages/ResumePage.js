import React from "react";
import { MainLayout } from "../resources/styles/Layouts";

import Title from '../Components/Title';
import Skills from "../Components/Skills";
import Resume from "../Components/Resume";
import ImageSection from "../Components/ImageSection";

function ResumePage() {
  return (
    <MainLayout>
      <Title title={"About Me + Resume"} span={"About Me + Resume"} />
      <ImageSection />
      <Skills />
      <Resume />
    </MainLayout>
  );
}

export default ResumePage;
