
function nextQuotes(){
	
	var random = Math.floor(Math.random() * 73);

	document.getElementById('id').innerHTML = quotes[random].name;
	document.getElementById('title').innerHTML = quotes[random].title;
	document.getElementById('desc').innerHTML = quotes[random].desc;
	}
	