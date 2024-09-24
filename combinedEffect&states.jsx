import React, { useState, useEffect } from 'react';
const InputTracker = () => {
  const [inputValue, setInputValue] = useState(''); 
  // useEffect to log inputValue when it changes
  useEffect(() => {
    console.log('Input value changed:', inputValue);
  }, [inputValue]); 
  return (
    <div>
      <h1>Track Input Value</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Type something..." 
      />
      <p>Current input: {inputValue}</p>
    </div>
  );
};
export default InputTracker;
