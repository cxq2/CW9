import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    const greeting = this.props.name ? `Hello ${this.props.name}!` : "Hello World!";
    return <h1>{greeting}</h1>;
  }
}

export default HelloWorld;
