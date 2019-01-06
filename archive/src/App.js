import React, { useState } from 'react';
import './App.css';
//import MyComp from './components/myComp';

export default () => {
	const [age, setAge] = useState(21);
	const [name, setName] = useState('Ganesh');
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<p>Name: <input type="text" value={name}></input></p>
					<p>Age: {age}</p>
					<button>Increment Age by One</button>
				</div>
			</header>
		</div>
	);
}
