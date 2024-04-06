// src/List.jsx
import React, { Component } from 'react';

class List extends Component {
  renderListItems() {
    // 遍历items数组，为每个项目创建一个列表项
    return this.props.items.map(item => (
      <li key={item.name}>{item.name}</li> // 使用项目名称作为key
    ));
  }

  render() {
    return (
      <ul>{this.renderListItems()}</ul>
    );
  }
}

export default List;
