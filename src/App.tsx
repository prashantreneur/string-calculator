import React from 'react';
import Calculator from './pages/Calculator.component';
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>String Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;
