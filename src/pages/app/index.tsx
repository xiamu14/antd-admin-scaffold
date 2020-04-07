/*
 * @Description: layout
 * @Author: Ben
 * @LastEditors: Ben
 * @Date: 2019-04-22 18:49:15
 * @LastEditTime: 2019-04-30 21:56:43
 */

import React, { PureComponent } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Layout, Avatar, Menu, Dropdown } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SwitchRouter from "../../routes/components/switch_router";
import SideMenu from "../../routes/components/side_menu";
import { login } from "../../util/login";
import { routes } from "../../routes";
import logo from "../../image/logo.svg";
import "./index.module.scss";

const { Header, Sider, Content } = Layout;

interface State {
  collapsed: boolean;
}
class App extends PureComponent<RouteComponentProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  componentDidMount() {
    const { history } = this.props;
    if (!login.isLogin()) {
      history.push("/login");
    }
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  logout = () => {
    login.logout();
    window.location.reload();
  };

  goEditPwd = () => {
    const { history } = this.props;
    // history.push(routes.editPwd.path);
  };

  getUserMenu = () => {
    return (
      <Menu>
        <Menu.Item key="0" onClick={this.goEditPwd}>
          修改密码
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2" onClick={this.logout}>
          退出登录
        </Menu.Item>
      </Menu>
    );
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout styleName="screenHeight">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div styleName="logo">
            {/* <Icon type="heat-map"/> */}
            <img src={logo} alt="logo" />
            <h2
              styleName="title"
              style={{ display: collapsed ? "none" : "block" }}
            >
              xxx
            </h2>
          </div>
          <SideMenu />
        </Sider>
        <Layout>
          <Header styleName="header">
            <div styleName="trigger" onClick={this.toggle}>
              {collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </div>
            <Dropdown overlay={this.getUserMenu()}>
              <Avatar icon={<UserOutlined />} />
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
            }}
          >
            <SwitchRouter />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
