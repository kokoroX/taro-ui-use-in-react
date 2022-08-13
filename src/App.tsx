import React from 'react';
import logo from './logo.svg';
import { AtBadge, AtButton } from 'taro-ui';
import './App.css';
// import Taro from '@tarojs/taro-h5'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

function App() {
  return (
    <div className="App">
      <AtBadge value={123} />
      <AtButton onClick={() => console.log("click")}>123</AtButton>
    </div>
  );
}

export default App;
