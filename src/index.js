import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App1 from './App1';
import Controlledform1 from './Controlledform1';
import Uncontrolledcomp from './Uncontrolledcomp';
import Httpcall from './Httpcall';
import Menu from './Menu';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
    <BrowserRouter>
      <Menu/>
    </BrowserRouter>
    );

  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
