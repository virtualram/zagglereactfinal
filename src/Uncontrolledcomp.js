import logo from './logo.svg';
import './App.css';
import React from 'react';


class Uncontrolledcomp extends React.Component {

constructor(props){
    super();
    this.dosearch = this.dosearch.bind(this);
}

dosearch(){

    let searchval = this.refs.searchInput.value;//get node value or text value
    console.log(searchval);
}

render(){


    return(
     <div>

 <input type="text" className="form-control" placeholder="Search for Projects" ref='searchInput'/>
 <button className="btn btn-default" type="button" onClick={this.dosearch} > Go</button> 


     </div>


    );
}

}

export default Uncontrolledcomp ;