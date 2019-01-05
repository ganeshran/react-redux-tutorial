const fetch = require('node-fetch')

console.log(fetch);

function fetchAvatarUrl(userId){
	return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
		.then(resp => resp.json())
		.then(data => data.imageUrl);
}

const result = fetchAvatarUrl(123);

console.log(fetchAvatarUrl(123));
