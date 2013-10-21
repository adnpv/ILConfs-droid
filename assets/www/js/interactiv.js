$(document).ready(function(){
//pregunta : interativ/question


$('#pregu').click(function() {
  	alert('hello');
	//alert($('input[name=radio-choice]:checked').val());
	var ptitulo = $('input[name=pname]');
	var pdetalle = $('textarea[name=ptextarea]');
	var tema=$('#form_pregu').attr('class');

	if ($('input[name=pname]').not(':empty')){
  			var ptitu = ptitulo.val();
  			var pdetall = pdetalle.val();
  			var iduser= 7;
  			alert('titulo:'+ptitu);
  			alert('detalle:'+pdetall);
  			alert('tema:'+tema);
  			alert('finmensaje')
  			$.ajax({
	            type: "GET",
	            dataType: "json",
	            url:"http://pietreal.herokuapp.com/interactiv/question", 
	            //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
	            data: { 'titulo': ptitu,
	        			'detalle': pdetall,
	        			'idus': iduser,
	        			'idtema': tema},
	            success: function(response){
	                alert('thanks');

	            },
	            error: function (xhr, ajaxOptions, thrownError) {
			        alert(xhr.responseText);
			        alert(thrownError);
			        alert('error');
			    }
	        });
	        //window.location.replace("evento1-interactiv-t1.html");
  	}else{
  		alert('not writeed');
  		var radio_value=0;
  	}


});



// $('#resolv').click(function(e){
//   	alert('hello');
// 	//alert($('input[name=radio-choice]:checked').val());
// 	var quest=$('fieldset').attr('id');
// 	if ($('input[name=radio-choice]').is(':checked')){
//   			var rad_val = $('input:radio[name=radio-choice]:checked').val();

//   			alert(quest);
//   			alert(rad_val);
//   			$.ajax({
// 	            type: "GET",
// 	            dataType: "json",
// 	            url: "http://localhost:8000/interactiv/resolv",
// 	            data: { 'send_resul': rad_val,
// 	        			'quest':quest},
// 	            success: function(response){
// 	                alert('thanks');

// 	            },
// 	            error: function (xhr, ajaxOptions, thrownError) {
// 			        alert(xhr.responseText);
// 			        alert(thrownError);
// 			        alert('error');
// 			    }
// 	        });
// 	        //window.location.replace("evento1-interactiv-t1.html");
//   	}else{
//   		alert('not checked');
//   		var radio_value=0;
//   	}


// });
/*
$('#resolv').live("click",function(e){
  	alert('hello');
});
*/

$('article').on("click","#resolv",function(e){
  	alert('hello');
	//alert($('input[name=radio-choice]:checked').val());
	var quest=$('fieldset').attr('id');
	if ($('input[name=radio-choice]').is(':checked')){
  			var rad_val = $('input:radio[name=radio-choice]:checked').val();

  			alert(quest);
  			alert(rad_val);
  			$.ajax({
	            type: "GET",
	            dataType: "json",
	            url: "http://pietreal.herokuapp.com/interactiv/resolv",
	            //"http://shielded-peak-5807.herokuapp.com/interactiv/resolv",//"http://localhost:8000/interactiv/resolv",
	            data: { 'send_resul': rad_val,
	        			'quest':quest},
	            success: function(response){
	                alert('thanks');

	            },
	            error: function (xhr, ajaxOptions, thrownError) {
			        alert(xhr.responseText);
			        alert(thrownError);
			        alert('error');
			    }
	        });
	        //window.location.replace("evento1-interactiv-t1.html");
  	}else{
  		alert('not checked');
  		var radio_value=0;
  	}
});
/*
$(".quests").delegate("#resolv", "click", function(e) {
    alert('hello3');
});*/
});




// $.ajax({data: "surname=Smith&cartTotal=12.34", dataType: "text", error: function(XMLHttpRequest, textStatus, errorThrown) {
//         displayErrorMessage("An error has occurred: " + textStatus);
//         }, success: function(data, textStatus, XMLHttpRequest) {
//         try
//             {
//             updatePage(JSON.parse(data));
//             }
//         catch(error)
//             {
//             displayErrorMessage("There was an error updating your shopping cart. Please call customer service at 800-555-1212.");
//             }
//         },  type: "POST", url: "/update-user"};