import React,{Component} from 'react';
import { Button, rounded} from 'react-bootstrap';



function Input(props) {
	return(
		<div>
			
			<rounded />
       
      
		
		
		<button onClick={props.onClick}>press</button>
		</div>
	);
}

export default Input;