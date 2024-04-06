
import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class List extends Component {
  renderListItems() {

    return this.props.items.map(item => (
      <ListGroup.Item variant="success" key={item.name}>{item.name} </ListGroup.Item> 
    ));
  }

  render() {
    return (
      <ListGroup>
      {this.renderListItems()}
    </ListGroup>
    );
  }
}

export default List;
