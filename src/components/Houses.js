import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

export default class Houses extends Component {

	render() {

		const gryffindorChars = this.props.characters.map(char => {
		  if (char.house === "Gryffindor") {
			return <CharacterCard handleHouseChange={this.props.handleHouseChange} key={char.id} image2={char.image2} character={char} />
		  } 
		})

		const slytherinChars = this.props.characters.map(char => {
		  if (char.house === "Slytherin") {
			return <CharacterCard handleHouseChange={this.props.handleHouseChange} key={char.id} image2={char.image2} character={char} />
		  } 
		})

		const ravenclawChars = this.props.characters.map(char => {
		  if (char.house === "Ravenclaw") {
			return <CharacterCard handleHouseChange={this.props.handleHouseChange} key={char.id} image2={char.image2} character={char} />
		  } 
		})

		const hufflepuffChars = this.props.characters.map(char => {
		  if (char.house === "Hufflepuff") {
			return <CharacterCard handleHouseChange={this.props.handleHouseChange} key={char.id} image2={char.image2} character={char} />
		  } 
		})

		return(
		<div>
			<div>
				<h1>Gryffindor</h1>
				{gryffindorChars}
			</div>
			<div>
				<h1>Slytherin</h1>
				{slytherinChars}
			</div>
			<div>
				<h1>Ravenclaw</h1>
				{ravenclawChars}
			</div>
			<div>
				<h1>Hufflepuff</h1>
				{hufflepuffChars}
			</div>
		</div>
		)
	}
}