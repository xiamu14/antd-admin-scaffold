import config from "../config";

export const baseConfig = {
  baseURL: config.apiUrl,
  interceptorReq: (request: any) => {
    return request;
  },
  interceptorRes: (res: any) => {
    // // NOTE: 登录 token 过期
    // if (res.data.code === 6001) {
    //   // NOTE: 清除过期的 token 信息
    //   login.logout();
    //   // NOTE: 刷新页面，返回登录页
    //   window.location.reload();
    //   return false;
    // }
    return res;
  },
};
