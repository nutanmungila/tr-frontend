import React from 'react';
import TableRow from './TableRow.jsx';

require('./App.css');

export default class DisplayTable extends React.Component{
  constructor(props){
    super(props);
  }

  onTitleChange(index,e){
    this.props.onTitleChange(index,e.target.value);
  }

  onDescriptionChange(index,e){
    this.props.onDescriptionChange(index,e.target.value);
  }


  render(){
    return (<div>
            {this.props.data.map( (trans,index) => {
						return (<TableRow  key={trans.key} title={trans.title}
              description={trans.description} onTitleChange={this.onTitleChange.bind(this,index)}
              onDescriptionChange={this.onDescriptionChange.bind(this.index)} />);
            })}
          </div>);
  }
}
