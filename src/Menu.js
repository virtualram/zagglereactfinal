import logo from './logo.svg';
import './App.css';
import React from 'react';
import App1 from './App1';
import App  from  './App';
import Controlledform1 from './Controlledform1';
import Uncontrolledcomp from './Uncontrolledcomp';
import Httpcall from './Httpcall';
 import { NavLink, Route,Routes } from 'react-router-dom';
import Redux1 from './Redux1';



class Menu extends React.Component {
constructor(props){
super();
}
render(){

    return(
    <div><nav>
        <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Parentchildcomp'>Nested Comp</NavLink></li>
        <li><NavLink to='/Form1'>Form1</NavLink></li>
        <li><NavLink to='/Form2'>Form2</NavLink></li>
        <li><NavLink to='/httptest'>Httptest</NavLink></li>
        <li><NavLink to='/redux'>Redux</NavLink></li>
         
      </ul>
      </nav>

 <Routes>
      < Route  path="/" element={<App />}></Route>
      <Route  exact path='/Parentchildcomp' element={<App1/>}></Route>
      <Route  exact path='/Form1'element ={<Controlledform1/>}></Route>
      <Route  exact path='/Form2' element={<Uncontrolledcomp/>}></Route>
      <Route  exact path='/httptest' element={<Httpcall/>}></Route>
      <Route  exact path='/redux' element={<Redux1/>}></Route>
   
      </Routes>    </div>
    
    );
}
}
export default Menu ;