import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';
import Button from './components/Button';
import Badge from './components/Badge';
import TextArea from './components/TextArea';
import TextFieldInput from './components/TextFieldInput';
import TextField from './components/TextFieldInput';
import Breadcrumb2 from './components/Breadcrumb';
import DropDownMenu from './components/DropDownMenu';

const breadcrumbs = [
  { name: "PARENT ENTITY", link: "http://google.com" },
  { name: "PARENT RECORD NAME", link: "http://google.com" },
];


const items1 = [
  { name: "Menu Item 1", onClick: () => { console.log('clicked')} },
  { name: "Menu Item 2", onClick: () => { console.log('clicked')} },
  { name: "Menu Item 3", onClick: () => { console.log('clicked')} },
];

const items2 = [
  { name: "Menu Item 1", onClick: () => { console.log('clicked')} },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
