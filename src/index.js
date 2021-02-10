import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {add,sub,mul,div} from './Calc'

import moduleName from 'module'

ReactDOM.render(
<div>
    

<h1>Simple calculator</h1>
<ol>
<li>Addition of 5 and 4 = {add(5,4)}</li>
<li>Subtraction of 5 and 4 = {sub(5,4)}</li>
<li>Multiplication of 5 and 4 = {mul(5,4)}</li>
<li>Division of 5 and 4 = {div(5,4)}</li>
</ol>

  </div>,
  document.getElementById('root')

);

