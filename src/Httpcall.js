import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';


class Httpcall extends React.Component {

constructor(props){
    super();
    this.dosearch = this.dosearch.bind(this);
}

dosearch(){

   // let searchval = this.refs.searchInput.value;//get node value or text value
    //console.log(searchval);

    
/*
    const myInit1  = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Vary': 'Origin' },
    
    };
     

    fetch('https://th-apex-http-callout.herokuapp.com/animals', myInit1)
    .then((response) => {
      console.log(response);
      
    })
  */
    axios.get('https://th-apex-http-callout.herokuapp.com/animals')
    .then(response =>{
      console.log(response);
    })
    .catch(error=>{
      console.log(error);
    })
  }

render(){


    return(
     <div>

 <input type="text" className="form-control" placeholder="Search for Projects" ref='searchInput'/>
 <button className="btn btn-default" type="button" onClick={this.dosearch} > Go http</button> 


     </div>


    );
}

}

export default Httpcall ;