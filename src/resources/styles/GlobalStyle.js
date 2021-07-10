import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* :root{
    --primary-color: #5F5F5F;
    --primary-color-light: #5F5F5F;
    --secondary-color: #6c757d;
    --background-dark-color: #030303;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #015D5C;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #FFFFFF;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;#
    --border-color: #383838;
    --svg-border-color: #FFFFFF;
} */
.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #88C4C4;
    --secondary-color: #6c757d;
    --background-dark-color: #015D5C;
    --background-dark-grey: #22272E;
    --border-color: #2e344e;
    --background-light-color: #015D5C;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #FFFFFF;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #015D5C;
    --sidebar-dark-border: #000000;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --border-color: white;
    --svg-border-color: #000000;
    --second-light-color: #88C4C4;
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #4D648D;
    --secondary-color: #6c757d;
    --background-dark-color: #22272E;
    --background-dark-grey: #22272E;
    --border-color: #2e344e;
    --background-light-color: #015D5C;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #FFFFFF;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #22272E;
    --sidebar-dark-border: #000000;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --border-color: white;
    --svg-border-color: #000000;
    --second-light-color: #4D648D;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-weight: 100;
    // font-family: 'Cabin', sans-serif;
    // font-family: 'Roboto', sans-serif;
    font-family: 'Sora', sans-serif;
    // font-family: 'Quicksand', sans-serif;
    // font-family: 'Noto Sans JP', sans-serif;
    // font-family: 'Syne', sans-serif;
    font-size: 1.1rem;
    
}
body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
    font-weight: 300;
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
textarea{
    max-width: 100%;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}
a:link {
    text-decoration: none;
  }
  
  a:visited {
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  a:active {
    text-decoration: underline;
  }
h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem
    }
}
span{
    color: var(--white-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}
//Utilities
.u-margin-bottom{
    margin-bottom: 4rem;
}
//Floting Toggler
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }
  //Nav Toggler
  .ham-burger-menu{
      position: absolute;
      right: 5%;
      top: 3%; 
      display: none;
      z-index: 15;
      svg{
          font-size: 3rem;
      }
    }
    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
  @media screen and (max-width:1200px){
    .ham-burger-menu{
        display: block;
    }
  }
//Global Media Queries
`;

export default GlobalStyle;
