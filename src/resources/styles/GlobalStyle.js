import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #787676;
    --secondary-color: #6c757d;
    --background-dark-color: #FFFFFF;
    --background-dark-grey: #22272E;
    --border-color: #787676;
    --background-light-color: #3C3C3C;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #000000;
    --font-light-white: #FFF;
    --font-light-color: #000000;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #FFFFFF;
    --sidebar-dark-border: #3C3C3C;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --border-color: #3C3C3C;
    --svg-border-color: #000000;
    --second-light-color: #3C3C3C;
    --txt-button: #FFF;
    --span-color: rgba(182, 180, 180,.3);
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
    --sidebar-dark-border: #FFFFFF;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    --border-color: white;
    --svg-border-color: #000000;
    --second-light-color: #4D648D;
    --txt-button: #000;
    --span-color: rgba(188, 188, 188, 0.4);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-weight: 100;
    font-size: 1.1rem;
    // font-family: 'Cabin', sans-serif;
    // font-family: 'Roboto', sans-serif;
    // font-family: 'Sora', sans-serif;
    // font-family: 'Quicksand', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
    // font-family: 'Syne', sans-serif;
    // font-family: 'Roboto Slab', serif;
    
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
    // font-family: inherit;
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
.spinner-wrapper{
    width: 100%;
    height: 100%;
    background-color: #151515;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.spinner {
    position: relative;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
}

.spinner::before,
.spinner:after{
    content: "";
    position: absolute;
    border-radius: 50%;
}

.spinner:before {
    width: 100%;
    height: 100%;
    background-image:linear-gradient(90deg, #ff00cc 0%,#333399 100% );
    animation: spin .5s infinite linear;
}
.spinner:after {
    width: 90%;
    height: 90%;
    background-color: #151515;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }

}
`;

export default GlobalStyle;
