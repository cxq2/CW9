// 更新后的src/App.js以包括Counter组件
import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter'; // 导入Counter组件

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name={'Your Name'} />
        <Counter /> {/* 使用Counter组件 */}
      </div>
    );
  }
}

export default App;
