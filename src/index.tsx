import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ChiliReqContext } from "chili-request";
import zhCN from "antd/es/locale-provider/zh_CN";
import { baseConfig } from "./apis/config";
import Login from "./pages/login/index";
import App from "./pages/app/index";

import "./style/index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ChiliReqContext.Provider value={baseConfig}>
    <ConfigProvider locale={zhCN}>
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={App} />
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </ConfigProvider>
  </ChiliReqContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
