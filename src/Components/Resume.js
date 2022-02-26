import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../resources/styles/Layouts";

import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import ResumeItem from "../Components/ResumeItem";
import CertificationItem from "../Components/CertificationItem";

import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ClassIcon from "@material-ui/icons/Class";
import TelegramIcon from "@material-ui/icons/Telegram";

import { useTranslation } from "react-i18next";

function Resume() {
  const { t, i18n } = useTranslation();

  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  const cert = <ClassIcon />;
  const fly = <TelegramIcon />;

  return (
    <ResumeStyled>
      <Title
        title={t("AboutPage.ResumeTitle")}
        span={t("AboutPage.ResumeDesc")}
      />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle
            icon={briefcase}
            title={t("AboutPage.WorkingExperienceTitle")}
          />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={t("Manager_Talan.Year")}
            title={t("Manager_Talan.Title")}
            subTitle={t("Manager_Talan.SubTitle")}
            region={t("Manager_Talan.Region")}
            // perimeter={t("Manager_Talan.Perimeter")}
            text={t("Manager_Talan.Text")}
            responsability_1={t("Manager_Talan.Task1")}
            responsability_2={t("Manager_Talan.Task2")}
            responsability_3={t("Manager_Talan.Task3")}
            // responsability_4={t("Experience1.Task4")}
            // responsability_5={t("Experience1.Task5")}
            // responsability_6={t("Experience1.Task6")}
            // technologies={t("Manager_Talan.Technologies")}
          />
          <ResumeItem
            year={t("Experience2.Year")}
            title={t("Experience2.Title")}
            subTitle={t("Experience2.SubTitle")}
            region={t("Experience2.Region")}
            perimeter={t("Experience2.Perimeter")}
            // text={t("Experience2.Text")}
            responsability_1={t("Experience2.Task1")}
            responsability_2={t("Experience2.Task2")}
            responsability_3={t("Experience2.Task3")}
            responsability_4={t("Experience2.Task4")}
            // responsability_5={t("Experience2.Task5")}
            // responsability_6={t("Experience2.Task6")}
            // achievement={t("Experience2.Achievement")}
            // technologies={t("Experience2.Technologies")}
          />
          <ResumeItem
            year={t("Experience3.Year")}
            title={t("Experience3.Title")}
            subTitle={t("Experience3.SubTitle")}
            region={t("Experience3.Region")}
            perimeter={t("Experience3.Perimeter")}
            // text={t("Experience3.Text")}
            responsability_1={t("Experience3.Task1")}
            responsability_2={t("Experience3.Task2")}
            responsability_3={t("Experience3.Task3")}
            // responsability_4={t("Experience3.Task4")}
            // responsability_5={t("Experience3.Task5")}
            // responsability_6={t("Experience3.Task6")}
            // achievement={t("Experience3.Achievement")}
            // technologies={t("Experience3.Technologies")}
          />
          <ResumeItem
            year={t("Experience4.Year")}
            title={t("Experience4.Title")}
            subTitle={t("Experience4.SubTitle")}
            region={t("Experience4.Region")}
            // perimeter={t("Experience4.Perimeter")}
            // text={t("Experience4.Text")}
            responsability_1={t("Experience4.Task1")}
            responsability_2={t("Experience4.Task2")}
            // responsability_3={t("Experience4.Task3")}
            // responsability_4={t("Experience4.Task4")}
            // responsability_5={t("Experience4.Task5")}
            // responsability_6={t("Experience4.Task6")}
            // achievement={t("Experience4.Achievement")}
            // technologies={t("Experience4.Technologies")}
          />
          <ResumeItem
            year={t("Experience5.Year")}
            title={t("Experience5.Title")}
            subTitle={t("Experience5.SubTitle")}
            region={t("Experience5.Region")}
            // perimeter={t("Experience5.Perimeter")}
            // text={t("Experience5.Text")}
            responsability_1={t("Experience5.Task1")}
            responsability_2={t("Experience5.Task2")}
            // responsability_3={t("Experience5.Task3")}
            // responsability_4={t("Experience5.Task4")}
            // responsability_5={t("Experience5.Task5")}
            // responsability_6={t("Experience5.Task6")}
            // achievement={t("Experience5.Achievement")}
            // technologies={t("Experience5.Technologies")}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={fly} title={t("ResumePage.EntrExperience")} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={t("StartUp1.Year")}
            title={t("StartUp1.Title")}
            subTitle={t("StartUp1.SubTitle")}
            text={t("StartUp1.Text")}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={cert} title={t("ResumePage.Certification")} />
        </div>
        <div className="resume-content">
          <CertificationItem
            year={t("Certification13.Year")}
            title={t("Certification13.Title")}
            subTitle={t("Certification13.SubTitle")}
            // text={t("Certification0.Text")}
          />
          <CertificationItem
            year={t("Certification12.Year")}
            title={t("Certification12.Title")}
            subTitle={t("Certification12.SubTitle")}
            // text={t("Certification0.Text")}
          />
          <CertificationItem
            year={t("Certification11.Year")}
            title={t("Certification11.Title")}
            subTitle={t("Certification11.SubTitle")}
            // text={t("Certification0.Text")}
          />
          <CertificationItem
            year={t("Certification10.Year")}
            title={t("Certification10.Title")}
            subTitle={t("Certification10.SubTitle")}
            // text={t("Certification0.Text")}
          />
          <CertificationItem
            year={t("Certification9.Year")}
            title={t("Certification9.Title")}
            subTitle={t("Certification9.SubTitle")}
            // text={t("Certification0.Text")}
          />
          <CertificationItem
            year={t("Certification1.Year")}
            title={t("Certification1.Title")}
            subTitle={t("Certification1.SubTitle")}
            // text={t("Certification1.Text")}
          />
          <CertificationItem
            year={t("Certification2.Year")}
            title={t("Certification2.Title")}
            subTitle={t("Certification2.SubTitle")}
            // text={t("Certification2.Text")}
          />
          <CertificationItem
            year={t("Certification3.Year")}
            title={t("Certification3.Title")}
            subTitle={t("Certification3.SubTitle")}
            // text={t("Certification3.Text")}
          />
          <CertificationItem
            year={t("Certification4.Year")}
            title={t("Certification4.Title")}
            subTitle={t("Certification4.SubTitle")}
            // text={t("Certification4.Text")}
          />
          <CertificationItem
            year={t("Certification5.Year")}
            title={t("Certification5.Title")}
            subTitle={t("Certification5.SubTitle")}
            // text={t("Certification5.Text")}
          />
          <CertificationItem
            year={t("Certification6.Year")}
            title={t("Certification6.Title")}
            subTitle={t("Certification6.SubTitle")}
            // text={t("Certification6.Text")}
          />
          <CertificationItem
            year={t("Certification7.Year")}
            title={t("Certification7.Title")}
            subTitle={t("Certification7.SubTitle")}
            text={t("Certification7.Text")}
          />
          <CertificationItem
            year={t("Certification8.Year")}
            title={t("Certification8.Title")}
            subTitle={t("Certification8.SubTitle")}
            text={t("Certification8.Text")}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={t("ResumePage.Education")} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={t("Education1.Year")}
            title={t("Education1.Title")}
            subTitle={t("Education1.SubTitle")}
            text={t("Education1.Text")}
          />
          <ResumeItem
            year={t("Education2.Year")}
            title={t("Education2.Title")}
            subTitle={t("Education2.SubTitle")}
            text={t("Education2.Text")}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 1px solid var(--border-color);
  }
`;
export default Resume;
