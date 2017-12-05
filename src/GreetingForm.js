import React, { Component } from 'react';
import style from './GreetingForm.scss';

export default class GreetingForm extends Component {
  render() {
    const { salutation, name, onChange } = this.props;
    
    return (
      <div className={style.greeting}>
        <div>
          <label>
            Salutation: 
            <input name="salutation" value={salutation} onChange={onChange}/>
          </label>
        </div>
        <div>
          <label>
            Name: 
            <input name="name" value={name} onChange={onChange}/>
          </label>
        </div>
      </div>
    );
  }
}