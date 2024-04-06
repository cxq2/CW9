import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All",
    };
  }

  onSelectHandler = (eventKey) => {
    // eventKey.preventDefault();
    this.setState({ type: eventKey });
  };

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  filterItem = (item) => {
    const nameMatch = item.name.toLowerCase().indexOf(this.state.search) !== -1;
    const typeMatch = this.state.type === "All" || item.type === this.state.type;
    return nameMatch && typeMatch;
  };
  handleItemClick = (eventKey, event) => {
    event.preventDefault();  
    event.stopPropagation(); 
    this.onSelectHandler(eventKey);
};

render() {
    return (
        <div className="filter-list">
            <h1>Produce Search</h1>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.type}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={(e) => this.handleItemClick('All', e)}>All</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => this.handleItemClick('Fruit', e)}>Fruit</Dropdown.Item>
                    <Dropdown.Item onClick={(e) => this.handleItemClick('Vegetable', e)}>Vegetable</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <input type="text" placeholder="Search" onChange={this.onSearch} />
            <List items={this.props.items.filter(this.filterItem)} />
        </div>
    );
}
}

export default FilteredList;