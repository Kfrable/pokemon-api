import React,{Component} from 'react';
// import axios from 'axios';


class Info extends Component{
	render(){
		return(
			<div id='choose'>
			
			  
		
				

				
				<ul  >
							
				   <li >{this.props.name}</li>
				   		
				   <li id='ind2'>{this.props.weight}</li>
				   		
				   <li id='ind3'>{this.props.bilities}</li>
				</ul>


				{/*<ul id='poke4' >
				<li >{this.props.bilities}</li>
				</ul>*/}

				<img src='https://m.popkey.co/a01467/drmwg.gif' alt='pika'/>

				
			</div>
		)
	}
}

export default Info;