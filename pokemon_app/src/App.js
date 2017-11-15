import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Hello from './components/Title';

class App extends Component {
     constructor(){
       super()
      this.state = {
        Allpoke:[],
        apiLoaded:false,
      }

        this.calling = this.calling.bind(this)
        
  }

  componentDidMount(){
    this.calling()
  }

  calling(){
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=9' )
      .then((res)=>{
         this.setState({
          Allpoke:res.data.results,
          apiLoaded:true
         })
      })
}



handleClick(e){
    let url = e.target.id
     axios.get(url).then((res)=>{
      return  
        <li>{res.data.name}</li>
            })
    }


  render() {
    const check = this.state.apiLoaded
    return (
      <div className="App">
        <b>{check ? <Hello name={this.state.Allpoke} single={this.state.name}/> :
            <ul id='poke2'>loading...</ul>}</b>
        
                <button onClick={this.handleClick}></button>
        
        
      </div>
    );
  }
}

export default App;
