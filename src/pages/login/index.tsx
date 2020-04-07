/*
 * @Description:
 * @Type:
 * @Author: Ben
 * @LastEditors: Ben
 * @Date: 2019-04-30 11:17:01
 * @LastEditTime: 2019-04-30 21:38:56
 */

import React, { useCallback, useState } from "react";
import { Tabs, Form, Input, Button, Layout } from "antd";
import { RouteComponentProps } from "react-router-dom";
import { useChiliReq } from "chili-request";
import {
  UserOutlined,
  LockOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";

import { login } from "../../util/login";
import LogoSvg from "../../image/logo.svg";

import "./index.module.scss";
import "./index.scss";

const { TabPane } = Tabs;
const { Footer } = Layout;

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

enum Type {
  tab1 = "1",
  tab2 = "2",
}
interface State {
  notice?: string;
  type?: string;
  autoLogin?: boolean;
  tabs?: any[];
  showRegister?: boolean;
}

export default function CustomLogin(props: RouteComponentProps) {
  const fetch = useCallback(useChiliReq(), []);
  const [type] = useState(Type.tab1);
  // @ts-ignore
  const handleFinish = values => {
    console.log("这是登录信息", values);

    // fetch()<LoginRes>(
    //   loginApi({
    //     name: values.username,
    //     pwd: values.password,
    //   })
    // ).then(res => {
    //   if (res.code !== 0) {
    //     notification.error({
    //       message: "登录失败",
    //       description: res.msg,
    //     });
    //   } else {
    //     login.saveUserInfo({
    //       nickname: values.username,
    //       accessToken: res.data.accessToken,
    //       detail: { isAdmin: res.data.isAdmin },
    //     });
    //     const { history } = props;
    //     history.push("/");
    //   }
    // });
    const { history } = props;
    history.push("/");
  };

  return (
    <Layout styleName="login--box antd-login-container">
      <div styleName="login--wrap">
        <div styleName="login_warp">
          <div styleName="logo_box">
            <img src={LogoSvg} alt="logo" styleName="logo" />
            <h2 styleName="title">Ant Design Admin</h2>
          </div>
          <Tabs defaultActiveKey={type}>
            <TabPane tab="帐号密码登录" key={Type.tab1}>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={handleFinish}
                // onFinishFailed={handleFinishFailed}
              >
                <Form.Item
                  label=""
                  name="username"
                  rules={[{ required: true, message: "请输入用户名！" }]}
                >
                  <Input size="large" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                  label=""
                  name="password"
                  rules={[{ required: true, message: "请输入密码！" }]}
                >
                  <Input.Password size="large" prefix={<LockOutlined />} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    styleName="btn-submit"
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Footer>
        Copyright <CopyrightOutlined />
        2020 有途前端体验技术部
      </Footer>
    </Layout>
  );
}
