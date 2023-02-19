fetch("../js/test4.json")

.then(response => {
	return response.json();
})


.then(data => {
  console.log(data);
})

