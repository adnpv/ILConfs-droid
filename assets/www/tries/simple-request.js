
function submit_button(){

	$.ajax({
		  url: "http://localhost:8000/interactiv/observa",
		  type: 'get',
		  contentType: "json",
		  data: {"quesu":"all", "program":"EXPLORE"},
		  success: function (data, status) {
		  	alert(data);
		    console.log("Success!!");
		    console.log(data);
		    console.log(status);
		  }
	})
}

$(document).ready(function(){

$('#submittier').click(function){
		submit_button();
		return false;
}

$('#submit').click(function(e){
	e.preventDefault();
	alert(data);
	submit_button();
	return false;

	});

});