/*
 * @Description:
 * @Type:
 * @Author: Ben
 * @LastEditors: Ben
 * @Date: 2019-04-30 11:17:01
 * @LastEditTime: 2019-04-30 21:38:56
 */

import React, { useState, useCallback } from "react";
import { Alert, notification } from "antd";
import { RouteComponentProps } from "react-router-dom";
import { useChiliReq } from "chili-request";
import { login } from "../../util/login";

import "./index.scss";

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
  const [notice, setNotice] = useState("");
  const fetch = useCallback(useChiliReq(), []);
  const [type] = useState(Type.tab1);
  // @ts-ignore
  const onSubmit = (err, values) => {
    if (!values) {
      return setNotice("请输入用户名和密码！");
    }
    if (!values.username) {
      return setNotice("请输入用户名");
    }
    if (!values.password) {
      return setNotice("请输入密码!");
    }
    /**
     * @description 调用接口获取登录凭证
     * @example chili("login", {
      username: values.username,
      password: values.password
    })
      .then(res => {
        loginUtil.saveUserInfo({
          nickname: values.username,
          accessToken: res.accessToken
        });
        const { history } = this.props;
        history.push(getPathByName(routes.home));
      })
      .catch(error => {
        console.log("可能出现了网络错误", error);
      });
     */

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

    return true;
  };

  return (
    <div className="login--box antd-pro-layouts-user-layout-container">
      <div className="login_warp">
        <div className="logo_box">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <h2>xxx后台</h2>
        </div>
      </div>
    </div>
  );
}
