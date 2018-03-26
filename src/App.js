import React, { Component } from 'react';
import DraftEditorHtmlExample from './DraftEditorHtmlExample';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Commands (mac / windows)</h3>
        <ul>
            <li>Bold: cmd+b / ctrl+b</li>
            <li>Italic: cmd+i / ctrl+i</li>
            <li>Underline: cmd+u / ctrl+u</li>
        </ul>
        <div>
            <DraftEditorHtmlExample />
        </div>
      </div>
    );
  }
}

export default App;
