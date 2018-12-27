import React, { Component } from 'react';

export class Hello extends Component {
	state = {
		name: "Ganesh Old"
	};

	changeState = (newName) => {
		this.setState(
			{
				name: newName
			}
		);

	}

	changeStateFromName = (event) => {
		this.setState({name: event.target.value});
	}
	render() {
		return (
			<div>
				<button onClick={() => this.changeState('Ganesh')}>Change State </button>
				<button onClick={this.changeState.bind(this, 'Ganesh Bind')}>Change Bind</button>
				<input onChange={this.changeStateFromName.bind(this)} type="text"></input>
				<div>Hello {this.state.name}</div>
			</div>
		);
	}
}

