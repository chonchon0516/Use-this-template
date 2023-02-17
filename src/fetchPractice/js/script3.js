fetch("../js/test3.json")

.then(response => {
	return response.json();
})


.then(data => {
	console.log(data);
})

.catch(e => {
	return response.json();
})