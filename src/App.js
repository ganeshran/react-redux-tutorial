import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="col">
					<div><span>A:</span>{this.props.a}</div>
					<button onClick={() => this.props.updateA(this.props.b)}>Update A</button>

					<div><span>B:</span>{this.props.b}</div>
					<button onClick={() => this.props.updateB(this.props.a)}>Update B</button>

				</div>
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		a: store.rA.a,
		b: store.rB.b,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateA: (b) => dispatch({type: 'UPDATE_A', b:b}),
		updateB: (a) => dispatch({type: 'UPDATE_B', a:a}),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
