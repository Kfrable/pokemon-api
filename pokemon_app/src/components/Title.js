import React, {Component} from 'react';
import axios from 'axios'; 


class Hello extends Component{
	constructor(){
		super()
		this.state={
			single:'',
			weight:'',
			abailties:'',
			clicked:false,
		}

		this.listPokemon = this.listPokemon.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	listPokemon(props){
       let name = this.props.name
       let listItems = name.map((poke,i)=>{
       		return <li key={i} id={poke.url} onClick={this.handleClick}>{poke.name}</li>
       })
		return listItems
	}

	handleClick(e){
		let url = e.target.id
		this.setState({
			clicked:false
		})
		 axios.get(url).then((res)=>{
			console.log(res.data.moves[4].move.name)
			this.setState({
				single:res.data.name,
				weight:res.data.weight,
				abailties:res.data.moves[4].move.name,
				clicked:true,
			})
			console.log(this.state.weight)
			      
		})
		 

	}
	

	render(){
		const isclicked = this.state.clicked;
		
		return(
			<div>
				<img id='title' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
				alt='Pokemon'/>
			
			
			<ul id='poke2'>{this.listPokemon()}</ul> 

			<ul id='poke3'>
				<b>{isclicked ? '' : <li>Loading...</li>}</b> 
				<b>{isclicked ? <li id='ind1'>{this.state.single}</li> : <li id='ind1'>name</li>}</b> 
				<b>{isclicked ? <li id='ind2'>{this.state.weight} Lbs</li> : <li id='ind2'>weight</li>}</b> 
				<b>{isclicked ? <li id='ind3'>{this.state.abailties}</li> : <li id='ind3'>ability</li>}</b> 
			</ul>

				
			</div>
			)
	

		
	}
}

export default Hello;