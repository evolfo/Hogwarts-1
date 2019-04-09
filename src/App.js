import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import CharacterContainer from './components/CharacterContainer'
import Houses from './components/Houses'
import AddForm from './components/AddForm'
import Search from './components/Search'

class App extends Component {

  state = {
    characters: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3006/potter_stuff')
      .then(resp => resp.json())
      .then(characters => {
        this.setState({characters})
      })
  }

  handleHouseChange = (e) => {
    fetch('http://localhost:3006/potter_stuff/' + e.target.id, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({house: e.target.value})
    })
      .then(resp => resp.json())
      .then(this.updateHouse)
  }

  updateHouse = (updatedChar) => {
    const updatedChars = this.state.characters.map(char => {
      if (char.id === updatedChar.id) {
        return {...char, house: updatedChar.house}
      } else {
        return char  
      }
    })

    this.setState({
      characters: updatedChars
    })
  }

  handleNewWizSubmit = (e, charObj) => {
    e.preventDefault()

    fetch('http://localhost:3006/potter_stuff', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(charObj)
    })
      .then(resp => resp.json())
      .then(newChar => {
        this.setState({
          characters: [
            ...this.state.characters,
            newChar
          ]
        })
      })
  }

  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  closeModal = (modal, stateOfModal) => {
    modal.style = 'display: none'

    stateOfModal.setState({
      clicked: false
    })
  }

  render() {

    const filteredChars = this.state.characters.filter(char => char.name.includes(this.state.searchTerm) || char.house.includes(this.state.searchTerm))

    return (
      <div className="container">
        <header className="wizard-header">
          <h1> YER A WIZARD 'ARRY</h1>
          <Search handleSearchChange={this.handleSearchChange} searchTerm={this.state.searchTerm} />
          <AddForm closeModal={this.closeModal} handleNewWizSubmit={this.handleNewWizSubmit} />
        </header>
        <main>
          <CharacterContainer handleHouseChange={this.handleHouseChange} characters={filteredChars} />
          <Houses characters={filteredChars} handleHouseChange={this.handleHouseChange} />
        </main>
      </div>
    );
  }
}

export default App;
