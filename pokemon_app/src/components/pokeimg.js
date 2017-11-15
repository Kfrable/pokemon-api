import React, {Component} from 'react';
// import axios from 'axios';

class Show extends Component{
	constructor(){
		super()
		this.single = this.single.bind(this)
	}

	single(){
		console.log(this.props.poke)
	}
	render(){
		return(
			<div>
			{this.single()}
				<p>sdbvchkjafcvkgwf khv kc</p>
			
			</div>

		);
	}
}

export default Show;