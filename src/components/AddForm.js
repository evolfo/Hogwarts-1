import React, { Component } from 'react';

export default class AddForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
		name: '',
		age: '',
		house: '',
		role: '',
		image1: '',
		image2: '',
		clicked: false
	    }
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	changeModalStyling = () => {
		console.log(this.refs.modalRef)
		if (this.state.clicked) {
			this.refs.modalRef.style = "display: block"
		}
	}

	handleClick = () => {
		this.setState({
			clicked: !this.state.clicked
		}, () => this.changeModalStyling())
	}

	generateModalHtml = () => {
		if (this.state.clicked === true) {
		  return (
		  	<div ref="modalRef" id="myModal" className="modal">
		  	  <div className="modal-content">
		  	  	<button onClick={() => this.props.closeModal(this.refs.modalRef, this)} className="close">X</button>
				<form onSubmit={(e) => this.props.handleNewWizSubmit(e, this.state)}>
					<input placeholder="name" type="text" name="name" onChange={this.handleChange} value={this.state.name} required/><br />
					<input placeholder="age" type="number" name="age" onChange={this.handleChange} value={this.state.age} required/><br />
					<select name="house" onChange={this.handleChange}>
		          		<option value="Gryffindor">Gryffindor</option>
		          		<option value="Slytherin">Slytherin</option>
		          		<option value="Hufflepuff">Hufflepuff</option>
		          		<option value="Ravenclaw">Ravenclaw</option>
		      		</select><br />
					<input placeholder="role" type="text" name="role" onChange={this.handleChange} value={this.state.role} required/><br />
					<input placeholder="image1" type="text" name="image1" onChange={this.handleChange} value={this.state.image1} required /><br />
					<input placeholder="image2" type="text" name="image2" onChange={this.handleChange} value={this.state.image2} required/><br/>
					<input type="submit" value="Create New Wizzzzz" />
				</form>
			</div>
		  </div>
		  )
		}
	}

	render() {
		return(
		  <div className="add-form">
		  	<h3 onClick={this.handleClick}>Add a new wizz!</h3>
			{this.state.clicked ? this.generateModalHtml() : null}
		  </div>
		)
	}
}