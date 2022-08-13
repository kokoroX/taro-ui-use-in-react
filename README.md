# 使用说明

`pnpm install`

### patch
1. 修改 react-scripts 以支持 REACT_APP_ 以外的前缀
2. 暂时使用以下方式解决 h5 依赖指向问题
   1. alias 将 @tarojs/components-react 指向 @tarojs/components/dist-h5/react
   2. patch 替换 taro-ui 的 @tarojs/components 为 @tarojs/components-react 