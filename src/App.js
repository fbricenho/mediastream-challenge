import React, { Component } from 'react';
import { Bar } from './components';
import './App.css';

export default class App extends Component {
  render() {
    return(
      <div>
        <Bar />
        {this.props.children}
      </div>
    );
  }
}
