import development from "./development"; // 本地开发环境配置
import test from "./test"; // 测试环境配置
import production from "./production"; // 生产环境配置

type env = "development" | "test" | "production";
const configs = {
  development,
  test,
  production,
};
const confEnv = process.env.REACT_APP_CONF_ENV as env;
export default configs[confEnv];
