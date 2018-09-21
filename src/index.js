import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/main";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
