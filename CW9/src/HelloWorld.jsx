// src/HelloWorld.jsx
import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    // 检查是否提供了name属性，如果提供了，就使用它
    const greeting = this.props.name ? `Hello ${this.props.name}!` : "Hello World!";
    return <h1>{greeting}</h1>;
  }
}

export default HelloWorld;
