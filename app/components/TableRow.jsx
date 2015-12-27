import React from 'react';
require('./App.css');

export default class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4">{this.props.key}</div>
          <div className="col-md-4">
            <input type="text" value={this.props.title} onChange={this.props.onTitleChange}></input>
          </div>
          <div className="col-md-4">
            <input type="text" value={this.props.description} onChange={this.props.onDescriptionChange}></input>
          </div>
        </div>
      </div>
    );
  }
}
