import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../resources/styles/Layouts";

import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";
import ClassIcon from '@material-ui/icons/Class';

import { useTranslation } from "react-i18next";

function Resume() {
  const { t, i18n } = useTranslation();

  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  const cert = <ClassIcon />;

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
            year={t("Experience1.Year")}
            title={t("Experience1.Title")}
            subTitle={t("Experience1.SubTitle")}
            region={t("Experience1.Region")}
            perimeter={t("Experience1.Perimeter")}
            text={t("Experience1.Text")}
            responsability_1={t("Experience1.Task1")}
            responsability_2={t("Experience1.Task2")}
            responsability_3={t("Experience1.Task3")}
            responsability_4={t("Experience1.Task4")}
            responsability_5={t("Experience1.Task5")}
            responsability_6={t("Experience1.Task6")}
            achievement={t("Experience1.Achievement")}
            technologies={t("Experience1.Technologies")}
          />
          <ResumeItem
            year={t("Experience1.Year")}
            title={t("Experience1.Title")}
            subTitle={t("Experience1.SubTitle")}
            region={t("Experience1.Region")}
            perimeter={t("Experience1.Perimeter")}
            text={t("Experience1.Text")}
            responsability_1={t("Experience1.Task1")}
            responsability_2={t("Experience1.Task2")}
            responsability_3={t("Experience1.Task3")}
            responsability_4={t("Experience1.Task4")}
            responsability_5={t("Experience1.Task5")}
            responsability_6={t("Experience1.Task6")}
            achievement={t("Experience1.Achievement")}
            technologies={t("Experience1.Technologies")}
          />
          <ResumeItem
            year={t("Experience1.Year")}
            title={t("Experience1.Title")}
            subTitle={t("Experience1.SubTitle")}
            region={t("Experience1.Region")}
            perimeter={t("Experience1.Perimeter")}
            text={t("Experience1.Text")}
            responsability_1={t("Experience1.Task1")}
            responsability_2={t("Experience1.Task2")}
            responsability_3={t("Experience1.Task3")}
            responsability_4={t("Experience1.Task4")}
            responsability_5={t("Experience1.Task5")}
            responsability_6={t("Experience1.Task6")}
            achievement={t("Experience1.Achievement")}
            technologies={t("Experience1.Technologies")}
          />
          <ResumeItem
            year={t("Experience1.Year")}
            title={t("Experience1.Title")}
            subTitle={t("Experience1.SubTitle")}
            region={t("Experience1.Region")}
            perimeter={t("Experience1.Perimeter")}
            text={t("Experience1.Text")}
            responsability_1={t("Experience1.Task1")}
            responsability_2={t("Experience1.Task2")}
            responsability_3={t("Experience1.Task3")}
            responsability_4={t("Experience1.Task4")}
            responsability_5={t("Experience1.Task5")}
            responsability_6={t("Experience1.Task6")}
            achievement={t("Experience1.Achievement")}
            technologies={t("Experience1.Technologies")}
          />
          <ResumeItem
            year={t("Experience1.Year")}
            title={t("Experience1.Title")}
            subTitle={t("Experience1.SubTitle")}
            region={t("Experience1.Region")}
            perimeter={t("Experience1.Perimeter")}
            text={t("Experience1.Text")}
            responsability_1={t("Experience1.Task1")}
            responsability_2={t("Experience1.Task2")}
            responsability_3={t("Experience1.Task3")}
            responsability_4={t("Experience1.Task4")}
            responsability_5={t("Experience1.Task5")}
            responsability_6={t("Experience1.Task6")}
            achievement={t("Experience1.Achievement")}
            technologies={t("Experience1.Technologies")}
          />
          <ResumeItem
            year={t("Experience1.Year")}
            title={t("Experience1.Title")}
            subTitle={t("Experience1.SubTitle")}
            region={t("Experience1.Region")}
            perimeter={t("Experience1.Perimeter")}
            text={t("Experience1.Text")}
            responsability_1={t("Experience1.Task1")}
            responsability_2={t("Experience1.Task2")}
            responsability_3={t("Experience1.Task3")}
            responsability_4={t("Experience1.Task4")}
            responsability_5={t("Experience1.Task5")}
            responsability_6={t("Experience1.Task6")}
            achievement={t("Experience1.Achievement")}
            technologies={t("Experience1.Technologies")}
          />
          <ResumeItem
            year={t("Experience1.Year")}
            title={t("Experience1.Title")}
            subTitle={t("Experience1.SubTitle")}
            region={t("Experience1.Region")}
            perimeter={t("Experience1.Perimeter")}
            text={t("Experience1.Text")}
            responsability_1={t("Experience1.Task1")}
            responsability_2={t("Experience1.Task2")}
            responsability_3={t("Experience1.Task3")}
            responsability_4={t("Experience1.Task4")}
            responsability_5={t("Experience1.Task5")}
            responsability_6={t("Experience1.Task6")}
            achievement={t("Experience1.Achievement")}
            technologies={t("Experience1.Technologies")}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={cert} title={"Certifications"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021 - 2022"}
            title={"Computer Science Degree"}
            subTitle={"Sussex University"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"A - Levels"}
            subTitle={"Church Hill High"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"High School Graduation"}
            subTitle={"ABC School"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2021 - 2022"}
            title={"Computer Science Degree"}
            subTitle={"Sussex University"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"A - Levels"}
            subTitle={"Church Hill High"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"High School Graduation"}
            subTitle={"ABC School"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
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
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
