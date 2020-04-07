import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { menus } from "../../index";
import { login } from "../../../util/login";
/** NOTE: 根据连接路径判断 sideMenu 的选中项 */
function getKeys(menuArr: any) {
  const { pathname } = window.location;
  let selectedKey = "";
  let subSelectedKey = "";
  menuArr.forEach((item, key) => {
    if (item.children) {
      item.children.forEach((child, childKey) => {
        if (pathname === child.path) {
          selectedKey = String(key);
        }
        if (child.path === pathname) {
          subSelectedKey = String(childKey);
          return false;
        }
        return true;
      });
    } else if (item.path === pathname) {
      selectedKey = String(key);
      return false;
    }
    return true;
  });
  const result = {
    selectedKey: [`${selectedKey}${subSelectedKey}`],
    openKey: [`sub${selectedKey}`],
  };
  // console.log("查看一下啊", result);
  return result;
}

export default function SiderMenu() {
  const [menuArr, setMenuArr] = useState<any>();
  useEffect(() => {
    const userInfo = login.getUserInfo();
    if (userInfo && userInfo.detail && userInfo.detail.isAdmin === 0) {
      const menuArrTmp = menus.filter(item => item.title !== "系统管理");
      setMenuArr(menuArrTmp);
    } else {
      setMenuArr(menus);
    }
  }, []);

  const { openKey, selectedKey } = getKeys(menus);
  return menuArr ? (
    <Menu
      theme="dark"
      mode="inline"
      defaultOpenKeys={openKey}
      selectedKeys={selectedKey}
    >
      {menuArr.map((item, index) => {
        if (item.children) {
          return (
            <Menu.SubMenu
              title={
                <span>
                  {/* <Icon type={item.icon} /> */}
                  <span>{item.title}</span>
                </span>
              }
              key={`sub${String(index)}`}
            >
              {item.children.map((child, childIndex) => {
                return (
                  <Menu.Item key={`${String(index)}${String(childIndex)}`}>
                    <Link to={child.path}>
                      {/* TODO: ICON */}
                      {child.icon ? "" : null}
                      <span>{child.title}</span>
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu.SubMenu>
          );
        }
        return (
          <Menu.Item key={String(index)}>
            <Link to={item.path as string}>
              {/* TODO ICON */}
              {item.icon ? "" : null}
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  ) : null;
}
