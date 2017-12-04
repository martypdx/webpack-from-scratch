import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    salutation: 'Hello',
    name: 'World'
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  render() {
    const { salutation, name } = this.state;

    return (
      <main>
        <div className="greeting">{salutation} {name}</div>
        <div>
          <input name="salutation" value={salutation} onChange={this.handleChange}/>
          <input name="name" value={name} onChange={this.handleChange}/>
        </div>
      </main>
    )
  }
}