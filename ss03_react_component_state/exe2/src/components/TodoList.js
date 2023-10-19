import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueInput: "",
      listTodo: [],
    };
  }
  handleChange = (event) => {
    this.setState({
      ...this.state,
      valueInput: event.target.value,
    });
  };

  addItem = () => {
    if (this.state.valueInput) {
      this.setState({
        listTodo: [...this.state.listTodo, this.state.valueInput],
        valueInput: "",
      });
    }
  };

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <div>
          <input
            value={this.state.valueInput}
            onChange={(event) => this.handleChange(event)}
          ></input>
          <button onClick={this.addItem}>Add</button>
        </div>
        <table style={{ border: "none" }}>
          <tbody>
            {this.state.listTodo.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
