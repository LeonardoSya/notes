// * 这个配置文件提供基本的 开发服务器设置、插件配置、模块解析
// * 适用于需要在开发过程中替换环境变量 或 使用本地依赖版本的项目，提高项目的灵活性和可配置性

import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupReplace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  // 配置项目使用的插件
  plugins: [
    // 使用 rollup 的替换插件，这里用于在代码构建时替换特定的变量
    rollupReplace({
      preventAssignment: true,   // 防止代码中的赋值语句被错误替换
      // 定义要替换的值
      values: {
        __DEV__: JSON.stringify(true),  // 将 __DEV__ 替换为 true
        "process.env.NODE_ENV": JSON.stringify("development"),  //  将process.env.NODE_ENV替换为development字符串
      },
    }),
    react(),
  ],
  // 解析配置
  resolve: process.env.USE_SOURCE  // 根据环境变量 USE_SOURCE 的值决定是否启用别名解析
    ? {
      // 配置别名
      // 在这个例子中，如果 USE_SOURCE 环境变量为真，它将为 @remix-run/router、react-router 和 react-router-dom 设置别名，指向本地的相对路径。
      //* 这在你想要使用本地版本的库时非常有用。
      alias: {
        "@remix-run/router": path.resolve(
          __dirname,
          "../../packages/router/index.ts"
        ),
        "react-router": path.resolve(
          __dirname,
          "../../packages/react-router/index.ts"
        ),
        "react-router-dom": path.resolve(
          __dirname,
          "../../packages/react-router-dom/index.tsx"
        ),
      },
    }
    : {},
});