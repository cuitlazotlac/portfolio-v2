import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
// import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
// import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";
import { Route, Switch as Switching } from "react-router";
// import Switch from "@material-ui/core/Switch";
import { IconButton } from "@material-ui/core";
// import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

function App() {
  // const [theme, setTheme] = useState("dark-theme");
  const [theme] = useState("dark-theme");
  // const [checked, setChecked] = useState(false);
  // const [setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;

    ReactGA.initialize('G-9RCFZTKYGR')
    //to report page view
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [theme]);



  // const themeToggler = () => {
  //   if (theme === "light-theme") {
  //     setTheme("dark-theme");
  //     setChecked(false);
  //   } else {
  //     setTheme("light-theme");
  //     setChecked(true);
  //   }
  // };

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />
      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
        {/* <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div> */}

        <Switching>
          {/* <BrowserRouter basename="/portfolio-v2/"> */}
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>
          {/* <Route path="/blogs" exact>
            <BlogsPage />
          </Route> */}
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          {/* </BrowserRouter> */}
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
