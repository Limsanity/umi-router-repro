## 复现

- `src/pages/index.tsx` 中从 `@/.umi/core/history` 导入 `history`
- `yarn build` 构建
- `serve -s dist` 打开页面路由跳转失败

从 `umi` 中导入 `history` 再构建则路由跳转成功。

开发环境中从 `@/.umi/core/history` 导入 `history` 路由跳转正常。
