import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './react-redux/store/reducers/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logAction = (store) => {
	return next => {
		return action => {
			const result = next(action);
			console.log(`Middleware ${JSON.stringify(result)}`);
			return result;
		}
	}
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(logAction)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

