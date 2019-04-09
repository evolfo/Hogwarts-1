import React, { Component } from 'react';

export default class CharacterCard extends Component {

	state = {
		imgClicked: false 
	}

	handleImgClick = () => {
		this.setState({
			imgClicked: !this.state.imgClicked
		})
	}

	generateDetailHtml = () => {
		return (
		  <div>
			<h2>{this.props.character.name}</h2>
			<select value={this.props.character.house} id={this.props.character.id} onChange={this.props.handleHouseChange}>
      			<option value="Gryffindor">Gryffindor</option>
      			<option value="Slytherin">Slytherin</option>
      			<option value="Hufflepuff">Hufflepuff</option>
      			<option value="Ravenclaw">Ravenclaw</option>
      		</select>
			<h4>Role: {this.props.character.role}</h4>
			<h4>Age: {this.props.character.age}</h4>
		  </div>
		)
	}

	render() {

	  const img = {
		backgroundImage: `url(${this.props.character.image1})`
	  }

	  const img2 = {
		backgroundImage: `url(${this.props.character.image2})`
	  }
	  
	  if (this.props.image1) {

		return(
			<div className='initial-chars'>
				<div className="image" style={img}></div>
				{/*<img alt="yer a wizz" className="image" src={this.props.character.image1} />*/}
				<h3>{this.props.character.name}</h3>
				<select value={this.props.character.house} id={this.props.character.id} onChange={this.props.handleHouseChange}>
          			<option value="Gryffindor">Gryffindor</option>
          			<option value="Slytherin">Slytherin</option>
          			<option value="Hufflepuff">Hufflepuff</option>
          			<option value="Ravenclaw">Ravenclaw</option>
      			</select>
			</div>
		)
	  } else {
	  	return(
			<div className='house-chars'>
				<div onClick={this.handleImgClick} className="image" style={img2}></div>
				{/*<img onClick={this.handleImgClick} alt="yer a wizz" className="image2" src={this.props.character.image2} />*/}
				{this.state.imgClicked ? this.generateDetailHtml() : null}
			</div>
		)
	  }
	}
}