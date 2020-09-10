// http://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: "@redchili/eslint-config-airbnb-typescript-prettier",
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['react-hooks'],
  rules: {
    "no-console": 0,
    "camelcase": 0,
    "import/extensions": "off",
    "react/destructuring-assignment": 1,
    "react/jsx-props-no-spreading": 0,
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-unused-expressions": 2,
    "no-unused-expressions": 0,
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off"
  }
};
