import { useState, useEffect } from "react";
// import { Route, Switch as Switching } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import ContactPage from "./Pages/ContactPage";

import ReactGA from "react-ga";

function App() {
  const [theme] = useState("light-theme");
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;

    // ReactGA.initialize("UA-208876305-1");
    // //to report page view
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }, [theme]);

  return (
    //   <div className="App">
    //     <Sidebar navToggle={navToggle} />
    //     <div className="ham-burger-menu">
    //       <IconButton onClick={() => setNavToggle(!navToggle)}>
    //         <MenuIcon />
    //       </IconButton>
    //     </div>
    //     <MainContentStyled>
    //       <Switching>
    //         <Route path="/home" exact>
    //           <HomePage />
    //         </Route>
    //         <Route path="/about" exact>
    //           <AboutPage />
    //         </Route>
    //         <Route path="/resume" exact>
    //           <ResumePage />
    //         </Route>
    //         <Route path="/portfolios" exact>
    //           <PortfoliosPage />
    //         </Route>
    //         <Route path="/contact" exact>
    //           <ContactPage />
    //         </Route>
    //       </Switching>
    //     </MainContentStyled>
    //   </div>
    // );
    <div className="App">
      <Router>
        <Sidebar navToggle={navToggle} />
        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
            <MenuIcon />
          </IconButton>
        </div>
        <Switch>
          <MainContentStyled>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/resume">
              <ResumePage />
            </Route>
            <Route path="/portfolios">
              <PortfoliosPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </MainContentStyled>
        </Switch>
      </Router>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  // min-height: 100vh;
  // min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    // z-index: -1;
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
