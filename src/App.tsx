import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/test-component/test-component';
import AuthComponent from './components/auth-component/auth-component';

function App() {
  return (
    <div className="App">
      {/* <TestComponent name="Shojib" age={50}/> */}
      <AuthComponent/>
    </div>
  );
}

export default App;
