import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

export default class CharacterContainer extends Component {

	render() {

		const allChars = this.props.characters.map(char => {
			return <CharacterCard handleHouseChange={this.props.handleHouseChange} key={char.id} character={char} image1={char.image1} />
		})

		return(
		<div className="char-list">
			{allChars}
		</div>
		)
	}
}