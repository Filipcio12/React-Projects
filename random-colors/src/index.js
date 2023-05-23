import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const generateRandomColor = () => {
   let color = "#000000";

    for (let i = 1; i < 7; ++i) {
      const number = Math.floor(Math.random() * 15);
      const char = number.toString(16);
      color = color.substring(0, i) + char + color.substring(i + 1);
    }

    return color;
  }

  let colors = Array(5).fill(0);
  for (let i in colors) {
    colors[i] = generateRandomColor();
  }

  return (
    <div>
      <div className='block' style={{backgroundColor: colors[0]}}>{colors[0]}</div>
      <div className='block' style={{backgroundColor: colors[1]}}>{colors[1]}</div>
      <div className='block' style={{backgroundColor: colors[2]}}>{colors[2]}</div>
      <div className='block' style={{backgroundColor: colors[3]}}>{colors[3]}</div>
      <div className='block' style={{backgroundColor: colors[4]}}>{colors[4]}</div>
    <div></div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
