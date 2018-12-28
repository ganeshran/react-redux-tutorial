import React from 'react';
export default React.memo((props) => {
	console.log(props.val);
	return (<div>{props.val}</div>);
});
