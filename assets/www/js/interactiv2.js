//$(document).ready(function(){
//$(document).on("pagebeforeshow", function(e){//pageinit
//pregunta : interativ/question



      // $(".goin").click(function(event)
      //   {
      //     event.preventDefault();
      //     preguntas();
      //     return false;
      //   });




$(document).on("click","#particip, #particip2",function(e){
          
          //alert("in");

           var auth = 0;
          
          var idauthev = 0;

          var codeven= $(this).attr('datum');
          var temid= $(this).attr('datumo');
          var appl = $(this).attr('id')

          idauthev = window.localStorage.getItem("codigo"+codeven+"");
          // alert("codeven");
          // alert(codeven);
          // //alert("idauthev");
          // //alert(idauthev);
          // alert(appl);
          // alert("cookie!!!");
          // alert(idauthev)
          if (appl == "particip2"){    //es, hacer valiacion!!!
                //alert("entrado verificacion");
                codeauth(codeven,temid);

              }else{    //ya paso login y existe auth
                if ( $.isNumeric(idauthev)){   //no es y es numero la session:1
                  auth = 1;
                  //alert('atiu');
                }
            }

          idauthev2 = window.localStorage.getItem("codigo"+codeven+"");
          //alert(idauthev2)
          if ( $.isNumeric(idauthev2)){   //no es y es numero la session:1
              auth = 1;
          //alert('atiu');
          }
          if (auth == 0){     //no almacenado en session!!! //repetir auth.
              //alert("auth");
              a_href = "#auth"
              authentic(codeven,temid,a_href); 
              //location.hash = "#auth"
              
          }else{
              
              //alert("parti");
              a_href = "#participan"
              particip(codeven,temid,a_href); 
              //location.hash = "#particip"
          }



          $.mobile.changePage( $(a_href), "flip", true, true);
          
          return false;
});



//CARGADO DE PREGUNTAS MULTIPLE OPCION!!!!!!!
$(document).on( "click","#goin",function(event)
//$("#goin").click(function(event)
{
    a_href = $(this).attr('href');
    codu = $(this).attr('modid');

  preguntas(codu, a_href);
  return false;
});



//logeo auth:
//window.localStorage.setItem("codigo"+atiu+"", resulta.userid);

$(document).on("click","#pregunt",function(e){
    a_href = $(this).attr('href');
    codu = $(this).attr('modid');
    pregunt(codu,a_href);
    $.mobile.changePage( $(a_href), "flip", true, true);
    return false;
});






//PREGUNTAR!!!!!!!
//$('#pregu').click(function() {
$('article').on("click","#pregu",function(e){
  	/*alert('hello');*/
	//alert($('input[name=radio-choice]:checked').val());
	var ptitulo = $('input[name=pname]');
	var pdetalle = $('textarea[name=ptextarea]');
	//var tema=$('#form_pregu').attr('class');
  var tema=$(this).attr('modid');


	alert('se esta enviando su pregunta, espere');
	if ($('input[name=pname]').not(':empty')){
  			var ptitu = ptitulo.val();
  			var pdetall = pdetalle.val();
  			var iduser= window.localStorage.getItem("userid");;
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

//});









































function particip(codev,codtem,a_href){
      $tochange = $(a_href+'> article');
      //obtener id de local storage y hacer consulta a db.

      $("#templates9").load("templates/ev-tem-interac.html",function(){
            //colocarle nombre tambien!!
            $('#goin').attr('modid',codtop);
            $('#pregunt').attr('modid',codtop);
            var template = $('#interact').html();//dentro
          
          $tochange.html(template).trigger('create');

          //$('#back').attr("class-num", "2");
      });

}


function authentic(codeven,codtop,a_href){
      $tochange = $(a_href+'> article');
      //PASADO ESTO!!!! obtener id de local storage y hacer consulta a db.

      $("#templates7").load("templates/authe.html",function(){
          $('#particip2').attr('datum',codeven);
          $('#particip2').attr('datumo',codtop);
          var template = $('#authi').html();//dentro
          
          $tochange.html(template).trigger('create');

          //$('#back').attr("class-num", "2");
      });
      


}


function codeauth(codeven, codtopic){
      var cod = $('input[name=txtcode]').val();
      var idusuario = window.localStorage.getItem("userid");
      
      $.ajax({
              type: "GET",
              dataType: "json",
              url:url +"/user/validtick/", 
              data: { 'idev': codeven,
                'idtem': codtopic,
                'userid': idusuario,
                'codau': cod,},
              success: function(resulta){
                  //alert(resulta.result);
                  if(resulta.result == "Exito"){
                      window.localStorage.setItem("codigo"+codeven+"", codeven);
                  }
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });
    

      //$('input[name=txtuser]').val() = "";
      //$('input[name=txtpassword]').val() = "";
      //return false;
}















function pregunt(codtop,a_href){

      $tochange = $(a_href+'> article');
      $titulo = $(a_href+'> header > h1');
      $("#templates10").load("templates/t-preg-hacer.html",function(){
            $('#pregu').attr('modid',codtop);
            var template = $('#hacerpreg').html();//dentro
          
          $tochange.html(template).trigger('create');

          //$('#back').attr("class-num", "2");
      });
      


}

//CAMBIAR LOCACION DE PREGUNTA!!!!!!!!!!!
function preguntas(cod, a_href){
    $tochange = $(a_href+'> article');
    $titulo = $(a_href+'> header > h1');

    //var give = $('#style-include1').html();
    $.ajax({
        data:
            {
            "que": cod,
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
            var $a = $("#templates11");
              $("#templates11").load("templates/t-preg-resolv.html",function(){
                  $.each(result, function(key,val) {
                      //alert(key);
                      if(key ==0){
                          //alert('hello');
                          var template = $('#template32r').html();       //internal
                              //var template = "<h1>{{name}}</h1> ";
                          var titulo = Mustache.to_html(template, val); //other
                          //alert(template);
                          $('#template32r').html(titulo);
                      }else{
                          var template = $('#inplaces').html();           //internal
                          var html = Mustache.to_html(template, val); //other
                          $('#lege').append(html);                    //COLOCAR DENTRO de cuadro [32>lege]!
                      }
                      
                  });

                  b = $('#template32r').html();            //INTERNAL, el exterior! de [lege]

                  $tochange.html(b).trigger('create');

                });


                $('#templates11').html("c");
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