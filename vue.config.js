/* eslint-disable no-unused-vars */
const webpack = require("webpack");
const path = require("path");
const cdn = require("./cdn.js");
module.exports = {
  // 开发环境启动运行编译
  runtimeCompiler: process.env.BABEL_ENV !== "production",
  // 不打包
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/omp": {
        target: "https://app-test4.bicai365.com",
        secure: false,
        changeOrigin: true,
        cookieDomainRewrite: {
          "*": "192.168.137.1:8080",
        },
      },
    },
  },
  configureWebpack: (config) => {
    // config.externals = cdn.externals;
  },
  // 如果需要做pwa,请先安装npm i @vue/cli-plugin-pwa -D
  pwa: {},
};
