import React from 'react';

import DisplayTable from './DisplayTable.jsx';
require('./App.css');

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lang: "english",data: [],languages:[]}
    this.getLanguages();
    this.handleChange = this.handleChange.bind(this);
    this.getDataFromFiles = this.getDataFromFiles.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.saveTranslation = this.saveTranslation.bind(this);
    this.getDataFromFiles("http://localhost:3000/translation/"+this.state.lang);
  }

  handleChange(e){
    this.setState({lang:e.target.value});
    this.getDataFromFiles("http://localhost:3000/translation/"+e.target.value);
  }

  saveTranslation(){
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/translation/save",
      data: {translation: this.state.data, language: this.state.lang},
      success: function(data){
        console.log(data);
      },
      failure: function(errMsg) {

      }
    });
  }
  getLanguages(){
    $.ajax({
      url: "http://localhost:3000/languages/list",
      dataType: 'json',
      success: (data) => {
        console.log(data);
        this.setState({languages: data});
      },
      error: (xhr, status, err) => {
        console.error(this.state.urlLink, status, err.toString());
      }
    });
  }

  getDataFromFiles(urllink) {
    $.ajax({
      url: urllink,
      dataType: 'json',
      success: (data) => {
        console.log(data);
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.state.urlLink, status, err.toString());
      }
    });
  }

  onDescriptionChange(index,value){
    var trans = this.state.data[index];
    trans.description = value;
    this.setState({
      data: this.state.data
    });
  }

  onTitleChange(index,value){
    var trans = this.state.data[index];
    trans.title = value;
    this.setState({
      data: this.state.data
    });
  }

  render() {
    return (  <div>
      <select id="dropdown-lang" value={this.state.lang} onChange={this.handleChange}>

        {this.state.languages.map(function(lang) {
          return ( <option key={lang} value={lang}>{lang}</option> );
        })}

      </select>
      <DisplayTable data={this.state.data} onDescriptionChange={this.onDescriptionChange}
      onTitleChange={this.onTitleChange}/>
      <button className="btn btn-primary" onClick={this.saveTranslation}>Save</button>
    </div>  );
  }
}
