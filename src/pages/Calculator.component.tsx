import React, { useState } from 'react';
import { add } from '../utils/stringCalculator';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      setResult(add(input));
      setError(null);
    } catch (e:any) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result !== null && <div>Result: {result}</div>}
    </div>
  );
};

export default Calculator;
