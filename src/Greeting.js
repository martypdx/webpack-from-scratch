import React, { Component } from 'react';
import style from './Greeting.scss';

export default class Greeting extends Component {
  render() {
    const { salutation, name } = this.props;
    return (
      <div className={style.greeting}>
        {salutation} <span>{name}</span>
      </div>
    );
  }
}