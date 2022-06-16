import logo from './logo.svg';
import './App.css';
import React from 'react';


class Controlledform1 extends React.Component {

    
    constructor(prop){

        super();
        this.state = { isGoing: true, numberOfGuests: 2 ,username:''}; 
        this.handleInputChange = this.handleInputChange.bind(this);
        let books =[ { name: "Monk who sold his ferrari", author: "Robin s" },        { name: "Wings of fire", author: "APJ" }];
     
     
    }
    handleInputChange(event) { 

        console.log(event.target.type);
        console.log(event.target.name);
     
       let target = event.target; 
       if(target.type === 'checkbox'){
    
      console.log(target.checked);
       this.setState({isGoing: target.checked ,username :'Naren' });
       
       }else {
        this.setState({numberOfGuests: target.value});
        this.setState({username :'' });
       }
          
    }

render(){

    return(
<div>
<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
<input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
               {this.state.isGoing}?{this.state.username}:"Login again"


</div>


)};


    }

export default Controlledform1 ;