//$(document).ready(function(){
$(document).on("pagebeforeshow", function(e){//pageinit
//pregunta : interativ/question



      // $(".goin").click(function(event)
      //   {
      //     event.preventDefault();
      //     preguntas();
      //     return false;
      //   });
//CARGADO DE PREGUNTAS MULTIPLE OPCION!!!!!!!
$(document).on( "click","#goin",function(event)
//$("#goin").click(function(event)
{
  //alert('he');
  //event.preventDefault();
  asignar_place('preguntas',this);
  //obtener el place anterior!!!!! y colocarlo como link bajo ayuda!!!!!!!
  preguntas();
  return false;
});



$(document).on("click","#particip",function(e){
 
           var auth = 0;
          var atiu= $(this).attr('datum');
          //alert(atiu);
          if ( atiu == 'yes'){
            auth = 1;
            //alert('atiu');
          }

          if (auth == 0){
              authentic(); 
              location.hash = "#auth"
          }else{
              particip(); 
              location.hash = "#particip"
          }
          
          return false;
});


$(document).on("click","#pregunt",function(e){
 
        pregunt();
        return false;
});






//PREGUNTAR!!!!!!!
//$('#pregu').click(function() {
$('article').on("click","#pregu",function(e){
  	/*alert('hello');*/
	//alert($('input[name=radio-choice]:checked').val());
	var ptitulo = $('input[name=pname]');
	var pdetalle = $('textarea[name=ptextarea]');
	var tema=$('#form_pregu').attr('class');
	alert('se esta enviando su pregunta, espere');
	if ($('input[name=pname]').not(':empty')){
  			var ptitu = ptitulo.val();
  			var pdetall = pdetalle.val();
  			var iduser= 7;
  			//alert('titulo:'+ptitu);
  			//alert('detalle:'+pdetall);
  			//alert('tema:'+tema);
  			//alert('finmensaje')
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
	                particip();

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



//RESOLVER!!!!!!!
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
	                particip();
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

});

function particip(){
      $("#templates").load("templates/ev-tem-interac.html",function(){

            var template = $('#interact').html();//dentro
          
          $('.section').html(template).trigger('create');

          $('#back').attr("class-num", "2");
      });

}


function authentic(){

      
      $("#templates").load("templates/authe.html",function(){

            var template = $('#authi').html();//dentro
          
          $('.section').html(template).trigger('create');

          $('#back').attr("class-num", "2");
      });
      


}
function pregunt(){
      $("#templates").load("templates/t-preg-hacer.html",function(){

            var template = $('#hacerpreg').html();//dentro
          
          $('.section').html(template).trigger('create');

          $('#back').attr("class-num", "2");
      });
      


}

//CAMBIAR LOCACION DE PREGUNTA!!!!!!!!!!!
function preguntas(){
    var give = $('#style-include1').html();
    $.ajax({
        data:
            {
            "que": 2,
            //"callback":"result2",
            },
        //datatype: 'json',
        type: 'GET',
        url:"http://pietreal.herokuapp.com/interactiv/jsonquest", 
          //"http://shielded-peak-5807.herokuapp.com/interactiv/jsonquest",//'http://localhost:8000/interactiv/jsonquest',
        success: function(result)
            {
                
            if(result){

            var b = '<div>hello</div>';
            var c = '<div>hello</div>';
            var $a = $("#templates22");
              $("#templates22").load("templates/t-preg-resolv.html",function(){
                  $.each(result, function(key,val) {
                      //alert(key);
                      if(key ==0){
                          //alert('hello');
                          var template = $('#template32').html();       //internal
                              //var template = "<h1>{{name}}</h1> ";
                          var titulo = Mustache.to_html(template, val); //other
                          //alert(template);
                          $('#template32').html(titulo);
                      }else{
                          var template = $('#inplaces').html();           //internal
                          var html = Mustache.to_html(template, val); //other
                          $('#lege').append(html);                    //COLOCAR DENTRO de cuadro [32>lege]!
                      }
                      
                  });

                  b = $('#template32').html();            //INTERNAL, el exterior! de [lege]

                  $('.quests').html(b).trigger('create');

                });


                $('#templates22').html("c");
            $('#back').attr("class-num", "72");
              
            //$('.quests').page();
            $('#style-include').html(give);
            }
            
            
        }
    });

 
}


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