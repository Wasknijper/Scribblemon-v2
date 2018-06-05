import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="sc-App">
        <header className="sc-App-header">
          <img src={logo} className="sc-App-logo" alt="logo" />
          <h1 className="sc-App-title">Welcome to React</h1>
        </header>
        <p className="sc-App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
