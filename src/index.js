import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducerA from './react-redux/store/reducerA';
import reducerB from './react-redux/store/reducerB';

const rootReducer = combineReducers({
	rA: reducerA,
	rB: reducerB,
});

const store = createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

