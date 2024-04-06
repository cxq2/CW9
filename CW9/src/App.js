// src/App.js
import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList'; // 确保你已经创建了FilteredList组件

// 静态数据，你可以根据需要扩展这个列表
const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Pineapple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Eggplant", type: "Vegetable" },
  { name: "Squash", type: "Vegetable" },
  { name: "Bell pepper", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Produce Market</h1>
      
        <FilteredList items={produce} />
      </div>
    );
  }
}

export default App;
