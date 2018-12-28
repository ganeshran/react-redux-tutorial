import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as actionCreator from './react-redux/store/actions/actions';

class App extends Component {
	render() {
		return (
			<div className="App">
			<div> Age: <span>{this.props.age}</span> </div>
			<button onClick={this.props.onAgeUp}>Age Up</button>
			<button onClick={this.props.onAgeDown}>Age Down</button>
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
