import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from "./logo.svg";
import './App.css';
import * as actionCreator from './react-redux/store/actions/actions';

class App extends Component {
	render() {
		return (
			<div className="App">
			<div> Age: <span>{this.props.age}</span> </div>
			<button onClick={this.props.onAgeUp}>Age Up</button>
			<button onClick={this.props.onAgeDown}>Age Down</button>
			{this.props.loading && <img alt="something" src={logo} className="App-logo" />}
			<hr />
			<div>History</div>
			<div>
				<ul>
					{
						this.props.history.map(el => (<li key={el.id}>{el.age}</li>))
					}
				</ul>
			</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		age: state.age,
		loading: state.loading,
		history: state.history,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAgeUp: () => dispatch(actionCreator.ageUp(1)),
		onAgeDown: () => dispatch(actionCreator.ageDown(1))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
