import React from 'react'; 
import styleWrapper from './hoc/styleWrapper.js'

const ButtonOne = (props) => {
	return (<button style={props.styles}>I am Button One</button>);
};

export default styleWrapper(ButtonOne);
