import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './Board';


function App() {
    return (
        <>
        <Board />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);