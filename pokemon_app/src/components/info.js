import React,{Component} from 'react';
import axios from 'axios';

 /*let divStyle = {
  				margin: "30px",
  				padding: "20px",
  				margin: "20px",
  				display:"inline"
			  };*/
class Info extends Component{
	render(){
		return(
			<div id='choose'>
			
			  
		
				<ul id ='poke2' >
				<li >{this.props.name}</li>
				</ul>
				<ul id ='poke3' >
							
				   <li id='ind1'>{this.props.name}</li>
				   		
				   <li id='ind2'>{this.props.weight}</li>
				   		
				   <li id='ind3'>{this.props.bilities}</li>
				</ul>

				{/*<ul id='poke4' >
				<li >{this.props.bilities}</li>
				</ul>*/}

				<img src='https://m.popkey.co/a01467/drmwg.gif'/>

				
			</div>
		)
	}
}

export default Info;