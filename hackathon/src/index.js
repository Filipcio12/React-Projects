import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import LineChart from './LineChart';
import { Line } from 'react-chartjs-2';
import Table from './Table';

const tableHeaders = ['Name', 'Age', 'Country'];
const tableData = [
    ['John', 25, 'USA'],
    ['Jane', 30, 'Canada'],
    ['Mark', 28, 'UK'],
];

const App = () => {
  return (
    <div>
      <Table headers={tableHeaders} data={tableData} />
      <LineChart />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
