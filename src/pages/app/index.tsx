import React from "react";
import { Button } from "antd";
import logo from "../../image/logo.svg";
import "./index.module.css";

function App() {
  return (
    <div styleName="App">
      <header styleName="App-header">
        <img src={logo} styleName="App-logo" alt="logo" />
        <Button type="primary">预览</Button>
        <a
          styleName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          基于 Ant Design (React) 的后台开发脚手架
        </a>
      </header>
    </div>
  );
}

export default App;
