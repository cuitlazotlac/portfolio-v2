import React from "react";
import styled from "styled-components";
import GitHub from "@material-ui/icons/GitHub";
import Pinterest from "@material-ui/icons/Pinterest";

function Menu({ menuItem }) {
  return (
    <MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2}>
                      <Pinterest />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item{
        .portfolio-content{
            border: 3px solid var(--border-color);
            transition: all 0.3s ease-in-out;
            box-shadow: 0 5px 3px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
            border-radius: 2.5px;
            transform-style: preserve-3d;
            display: block;
            position: relative;
            overflow: hidden;
            &:hover{
                transform: scale(1.1);
                transform: translate(7px, -7px);
                transform-style: preserve-3d;
                transition: all 0.2s ease-in-out;
                box-shadow: 5px 10px var(--border-color);
            }
            h6{
                font-size: 1.5rem;
                border-top: 4px solid var(--border-color);
                margin-top: 5px;
                margin-bottom: 5px;
                text-align: left
            }
            p{
                font-size: 1rem;
                border-top: 4px solid var(--border-color);
                margin-top: 5px;
                margin-bottom: 5px;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul{
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
                li{
                        background-color: var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 3rem;
                        height: 3rem;
                        margin: 0 .5rem;
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
            }
            .portfolio-image{
                &::before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
            }
            .portfolio-image:hover{
                ul{
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease-in-out;
                    opacity: 1;
                    li{
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
                    li:hover{
                        svg{
                            color: var(--white-color);
                        }
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
                &::before{
                    // height: calc(100% - 32%) ;
                    // width: calc(100% - 4%);
                    // background-color: white;
                    opacity: 0.9;
                    transform-origin: left;
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
`;

export default Menu;
