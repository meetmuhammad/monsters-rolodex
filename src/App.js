import React from 'react'
import CardList from './ components/card-list/card-list'
import SearchBox from './ components/search-box/search-box'

import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchInput: ''
    }    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = e => {
    this.setState({searchInput: e.target.value})
  }

  render(){

    const {monsters, searchInput} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchInput.toLowerCase()));

    return(
      <div className="App">

        <h1>Monsters Rolodex</h1>

        <SearchBox
          placeholder="Search Monster"
          changeHandler= {this.handleChange}
          />

        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;