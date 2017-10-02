
	 	function dateTime(){
           		var today = new Date();	
	 			
	 			document.getElementById('date').innerHTML = today.getDate();
	 			document.getElementById('month').innerHTML = today.getMonth();
	 			document.getElementById('year').innerHTML = today.getFullYear();
	 			document.getElementById('hour').innerHTML = today.getHours();
	 			document.getElementById('min').innerHTML = today.getMinutes();
	 			document.getElementById('sec').innerHTML = today.getSeconds();
	 			setTimeout(dateTime,1000);
           	}
			dateTime();
		function showQuotes(){
				var random = Math.floor(Math.random() * 73);

				document.getElementById('id').innerHTML = quotes[random].name;
				document.getElementById('title').innerHTML = quotes[random].title;
				document.getElementById('desc').innerHTML = quotes[random].desc;
	
				setTimeout(showQuotes,3000);
	}
