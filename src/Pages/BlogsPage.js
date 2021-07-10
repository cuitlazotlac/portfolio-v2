import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import blogs from "../data/blogs";
import { MainLayout, InnerLayout } from "../resources/styles/Layouts";

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className={"blog-item"}>
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div>
                  <a href={blog.link}>
                    <h6>{blog.title}</h6>
                  </a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    h6{
      font-size: 1.5rem;
      margin-top: 10px;
      text-align: left
  }
  .blog-item {
    // border: 3px solid var(--border-color);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    border-radius: 2.5px;
    transform-style: preserve-3d;
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    &:hover {
      transform: scale(1.1);
      transform: translate(7px, -7px);
      // border-right: 9px solid black;
      // border-bottom: 9px solid black;
      transform-style: preserve-3d;
      transition: all 0.2s ease-in-out;
      box-shadow: 5px 10px var(--second-light-color);
    }
    .image {
              width: 100%;
              overflow: hidden;
              padding-bottom: 0.5rem;      
              border-bottom: 1px solid var(--border-color);
              img {
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all 0.4s ease-in-out;
                &:hover {
                  cursor: pointer;
                  transform: rotate(3deg) scale(1.1);
                }
              }
    .blog-content {
      overflow: hidden;
      padding-bottom: 2rem;
      img {
        width: 100%;
        transition: all 0.2s ease-in-out;
        &:hover {
          transform: scale(1.1);
        }
        padding-bottom: 2rem;
      }
      .blog-link {
        color: inherit;
        font-family: inherit;
        text-decoration: none;
        font-size: 2rem;
        padding-bottom: 2rem;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: #037fff;
        }
      }
    }
  }
`;

export default BlogsPage;
