import React from 'react';
import logo from './logo.svg';
import { AtBadge, AtButton } from 'taro-ui';
import './App.css';
// import Taro from '@tarojs/taro-h5'

console.log('AtButton: ', AtButton);

function App() {
  return (
    <div className="App">
      {/* <AtBadge value={123} /> */}
      2222
      <AtButton>123</AtButton>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
