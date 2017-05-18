import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './info.css';
import axios from 'axios';

import Input from './components/Input';
import Info from './components/info';
import Show from './components/pokeimg';
import Hello from './components/Title';

class App extends Component {
     constructor(props){
      super(props)
      this.state={
        name:" ",
        name2:" ",
        weight:" ",
        abilities:""
      }
  }

  /*handleOnclick1(event){
    this.setState({
      name:res.data.name
    })
  }*/

 /* handleOnClick(event){
    console.log('hello')
    var url = 'http://pokeapi.co/api/v2/pokemon/'
    for(let i = 1; i<10; i++){
      axios.get(url + [i])
      .then((res) =>{
        let test = document.getElementById('sel');
        let opt = document.createElement('option');
        opt.innerHTML = res.data.name;
        opt.setAttribute('id',[i])
        test.appendChild(opt);

        this.setState({
          name:res.data.name
        })
      })
    }
  }*/

  test(event) {
    console.log('clicked!')
    console.log(event)
    var url = 'https://pokeapi.co/api/v2/pokemon/'
    /*for(let i = 1; i<10; i++){*/
      

      axios.get(url + event.target.getAttribute('id') )
      .then((res) =>{
        let poke = document.getElementById('poke3');
        let list = document.getElementById('ind1');
        list.innerHTML = res.data.name;
        /*list.setAttribute('id',[i])*/
        poke.appendChild(list);

        let poke1 = document.getElementById('poke3');
        let list1 = document.getElementById('ind2');
        list1.innerHTML = res.data.weight;
        
        /*list1.setAttribute('id',[i])*/
        poke1.appendChild(list1);

        let poke2 = document.getElementById('poke3');
        let list2 = document.getElementById('ind3');
        list2.innerHTML = res.data.abilities[1].ability.name;
        /*list2.setAttribute('id',[i])*/
        poke2.appendChild(list2);
      })


    
  }
        //get rid of loop   replace with axios.get(url +event.target.getAttribute('id'))
  getPokemon(event){
    console.log('hello')
    var url = 'https://pokeapi.co/api/v2/pokemon/'
    for(let i = 1; i<15; i++){
      axios.get(url + [i])
      .then((res) =>{
        
        let poke = document.getElementById('poke2');
        let list = document.createElement('li');
        list.innerHTML = res.data.name;
        list.setAttribute('id',[i])
        poke.appendChild(list);
        poke.addEventListener('click', this.test)

        /* let poke1 = document.getElementById('poke3');
        let list1 = document.createElement('li');
        list1.innerHTML = res.data.weight;
        list1.setAttribute('id',[i])
        poke1.appendChild(list1);*/

        /*let poke2 = document.getElementById('poke4');
        let list2 = document.createElement('li');
        list2.innerHTML = res.data.abilities[1].ability.name;
        list2.setAttribute('id',[i])
        poke2.appendChild(list2);*/

        this.setState({
          name:res.data.name,
          weight:res.data.weight,
          abilities:res.data.abilities[1].ability.name
        })
      })
    }
  }

 /* getWeight(event){
     var url = 'http://pokeapi.co/api/v2/pokemon/'
    for(let i = 1; i<10; i++){
      axios.get(url + [i])
      .then((res) =>{
        
        let poke1 = document.getElementById('poke3');
        let list1 = document.createElement('li');
        list1.innerHTML = res.data.weight;
        list1.setAttribute('id',[i])
        poke1.appendChild(list1);

        this.setState({
          weight:res.data.weight
  }*/

  render() {
    return (
      <div className="App">
        <Hello/>
        <Input onClick={(event) => this.getPokemon(event)}/>
        <Info name={this.state.name} weight={this.state.weight} abilities={this.state.abilities} />
        <Show/>
      </div>
    );
  }
}

export default App;
