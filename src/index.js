import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reactImage from './images/react.png';
import htmlImage from './images/html.png';
import cssImage from './images/css.png';
import jsImage from './images/js.png';

const app = (
  <div>
    <div id='FrontEndTech'>
      <h3>Front End Technologies</h3>
    </div>
    <img src={htmlImage} alt="html"></img>
    <img src={cssImage} alt="css"></img>
    <img src={jsImage} alt="js"></img>
    <img src={reactImage} alt="react"></img>
  </div>
)

const root = document.getElementById('root');
ReactDOM.render(app, root);