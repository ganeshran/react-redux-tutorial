import React, { Component } from 'react';
import './App.css';
import FuncComp from './components/funcComp';

class App extends Component {

	state = {
		val:1,
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({val:1});
		},3000);
	}

	render() {


		return (
			<div className="App">
				<header className="App-header">
					<FuncComp val={this.state.val}></FuncComp>
				</header>
			</div>
		);
	}
}

export default App;
