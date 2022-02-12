import React from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import ProjectItem from "./ProjectItem";

// import Title from "./Title";
import SectionTitleH2 from "../Components/shared/SectionTitleH2";

import "swiper/swiper-bundle.min.css";

import showcases from "../data/showcase";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation]);

export default function ProjectsSection() {
  const { t, i18n } = useTranslation();

  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitleH2
          title={t("HomePage.CarousselTitle")}
          span={t("HomePage.CarousselSubtitle")}
        />
        {/* <Title
          title={t("HomePage.CarousselTitle")}
          span={t("HomePage.CarousselSubtitle")}
        /> */}

        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 2,
              },
            }}
          >
            {showcases.map((showcase, index) => {
              if (index >= 5) return;
              return (
                <SwiperSlide key={showcase.id}>
                  <ProjectItem
                    title={showcase.name}
                    img={showcase.img}
                    desc={showcase.desc}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}

const ProjectSectionStyle = styled.div`
  // font-family: "Noto Sans JP", sans-serif;
  // padding: 10rem 0;
  padding-top: 4rem;
  .projectItem__title {
    font-weight: 700;
    font-size: 1.2rem;
  }
  .projectItem__desc {
    font-weight: 200;
  }
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 5rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
        img {
          height: 75%;
        }
      }
    }
  }
`;
