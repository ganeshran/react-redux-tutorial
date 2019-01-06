const fetch = require('node-fetch');

const fetchAvatarUrl = async (userId) => {
	return fetch(`https://catappapi.herokuapp.com/users/${userId}`);
}



