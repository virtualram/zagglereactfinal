import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';




class Redux1 extends React.Component {
    reducer = (state = 0, action) => {
        console.log('reducer called');
       switch(action.type){
           case 'INCREMENT':
                 return state +1;
           case 'DECREMENT':
                 return state - 1;
            default:
                return state;

       }};
       
     
    
    store = createStore(this.reducer);

    constructor(props){
        super();
     
        this.createredux = this.createredux.bind(this);
        this.reducer = this.reducer.bind(this);
        this.changestore = this.changestore.bind(this);
        this.decrementstore = this.decrementstore.bind(this);
    
        this.createredux();
    }
render(){

    return(

        <div> <button onClick={this.changestore}>  Incrememt</button> 
         <button onClick={this.decrementstore}>  Devcrememt</button> </div>
    );
}
changestore(){
    this.store.dispatch({
        type: 'INCREMENT'
      })

      console.log(this.store.getState());
      
}

decrementstore(){
    this.store.dispatch({
        type: 'DECREMENT'
      })

      console.log(this.store.getState());
}

createredux(){
   
      this.store.subscribe(() => {
        console.log('current state', this.store.getState());
      });

    }
}
export default Redux1;