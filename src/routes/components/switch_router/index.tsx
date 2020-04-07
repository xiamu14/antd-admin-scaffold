/*
 * @Description: 路由组件
 * @type: class component
 * @Author: Ben
 * @LastEditors: Ben
 * @Date: 2019-04-23 15:54:01
 * @LastEditTime: 2019-04-24 08:52:18
 */

import React, { PureComponent } from "react";
import loadable from "react-loadable";
import { Switch, Route } from "react-router-dom";
import Loading from "../../../components/loading";
import { routes } from "../../index";

function getComponentAsync(component: string) {
  return loadable({
    loader: () => import(/* webpackChunkName: "[request]" */ `../${component}`),
    loading: Loading,
    timeout: 10000,
  });
}
/* eslint-disable-next-line */
export default class SwitchRouter extends PureComponent {
  render() {
    return (
      <Switch>
        {Object.values(routes).map((route, index) => {
          return (
            <Route
              key={String(index)}
              exact={route.exact}
              path={route.path}
              component={getComponentAsync(route.component)}
            />
          );
        })}
      </Switch>
    );
  }
}
