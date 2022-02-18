import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyle from "./resources/styles/GlobalStyle";
import "./i18n";

import "./resources/font/Degarism Studio - Alliance No.1 Light.otf";
import "./resources/font/Degarism Studio - Alliance No.2 Light.otf";

ReactDOM.render(
  <Suspense fallback={<div>Loading....</div>}>
    <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
