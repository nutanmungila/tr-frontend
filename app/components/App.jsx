import React from 'react';
import Dropdown from './Dropdown.jsx';


require('./App.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main-page">
      <Dropdown />

      </div>
    );
  }
}
