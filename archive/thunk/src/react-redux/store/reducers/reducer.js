const initialState = {
	age: 21,
	history: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "AGE_UP":
			return {
				...state,
				age: state.age + action.value,
				loading: false,
				history: state.history.concat({id: Math.random(), age:state.age + action.value})
			};
		case "AGE_DOWN":
			return {
				...state,
				age: state.age - action.value,
				loading: false,
				history: state.history.concat({id: Math.random(), age:state.age - action.value})
			};
		case "LOADING":
			return {
				...state,
				loading: true,
			};

		case "DEL_ITEM":
			return {
				...state,
				history: state.history.filter(el => el.id !== action.key),
			};


		default: 
			return state;

	}
}

export default reducer;
