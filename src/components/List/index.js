import React, { Component } from 'react';
import Item from '../Item/index.js'
import './List.css'

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      inputValue: ''
    }

    this.removeItem = this.removeItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.cleanInput = this.cleanInput.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }

  handleInputChange(event) {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleInputKeyUp(event) {
    if (event.key === 'Enter' && this.state.inputValue.length) {
      this.addNewItem();
    }
  }

  cleanInput() {
    this.setState({ inputValue: '' })
  }

  addNewItem() {
    const itemList = this.state.itemList;
    const key = itemList.length + 1;
    itemList.push(
      <Item key={key} id={key} onClick={this.removeItem}> {this.state.inputValue} </Item>
    );
    this.setState({ itemList });
    this.cleanInput();
  }

  removeItem(index) {
    // const index = this.state.list.indexOf(item);
    const itemList = Object.assign([], this.state.itemList);
    itemList.splice(index, 1);
    this.setState({ itemList });
  }

  render() {
    return (
      <div className="List-wrapper">
        <div className="List-toolbar">
          <input value={this.state.inputValue} onChange={this.handleInputChange} onKeyUp={this.handleInputKeyUp} />
        </div>
        <ul className="List-ulist">
          {this.state.itemList}
        </ul>
      </div>
    );
  }
}
