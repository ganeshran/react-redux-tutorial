import React from 'react';
export const Child = (props) => {
	return (
		<div>
			<input type="text" value={props.title} onChange={props.processClick} />
			<button> {props.title}</button>
		</div>
	);
}
