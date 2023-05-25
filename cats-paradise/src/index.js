import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const baseURL = "https://api.thecatapi.com/v1/breeds";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;
  else console.log(data[0]);

  const findAverage = (data, propertyFunc) => {
    let sum = 0;
    for (let index in data) {
      const string = propertyFunc(data, index);
      const arr = string.split(" ");
      const value = (Number(arr[0]) + Number(arr[arr.length - 1])) / 2;
      sum += value;
    }
    const avg = sum / data.length;
    return (Math.round(avg * 100) / 100);
  }

  let countries = {};
  for (let index in data) {
    const country = data[index].origin;
    (country in countries) ? (countries[country] += 1) : (countries[country] = 1);
  }

  const numOfCountries = Object.keys(countries).length;

  let countryMax = null;
  let valueMax = 0;
  for (let country in countries) {
    if (countries[country] > valueMax) {
      valueMax = countries[country];
      countryMax = country;
    }
  }

  let arrOfCountries = Object.entries(countries);
  arrOfCountries.sort((a, b) => {
    return a[1] - b[1];
  });
  console.log(arrOfCountries);

  return (
    <div>
      <h1>Cats Paradise</h1>
      <p>There are 67 cat breeds.</p>
      <p>On average a cat can weight&nbsp;
      <span>
        {findAverage(data, (data, index) => {
          return data[index].weight.metric;
        })}
      </span>
      &nbsp;kg and live&nbsp;
      <span>
        {findAverage(data, (data, index) => {
          return data[index].life_span;
        })}
      </span>
      &nbsp;years.</p>
      <p>There are <span>{numOfCountries}</span> countries with cat breeds.</p>
      <p><span>{countryMax}</span> has the most cat breeds.</p>
      <p>List of countries in ascending order of the number of cat breeds:
        <ul>
          {arrOfCountries.map((item, index) => {
            return (<li key={index}>{item[0]}: {item[1]}</li>);
          })}
        </ul>
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
