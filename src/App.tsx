import React from 'react';
import logo from './logo.svg';
// import { AtBadge, AtButton } from 'taro-ui';
import { Button } from '@antmjs/vantui';
import './App.css';
// import Taro from '@tarojs/taro-h5'
// import { Button } from '@tarojs/components';
// import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

console.log('Button: ', Button);

function App() {
  return (
    <div className="App">
      <Button color="#7232dd">123</Button>
      {/* <AtBadge value={123} />
      <AtButton onClick={() => console.log("click")}>123</AtButton> */}
    </div>
  );
}

export default App;
