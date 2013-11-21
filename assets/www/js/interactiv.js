//$(document).ready(function(){
//$(document).on("pagebeforeshow", function(e){//pageinit
//pregunta : interativ/question

// Storage.prototype.setArray = function(key, obj) {
//     return this.setItem(key, JSON.stringify(obj))
// }
// Storage.prototype.getArray = function(key) {
//     return JSON.parse(this.getItem(key))
// }


      // $(".goin").click(function(event)
      //   {
      //     event.preventDefault();
      //     preguntas();
      //     return false;
      //   });


//var url="http://pietreal.herokuapp.com";
//var local_url="http://pietreal.herokuapp.com";
var local_url="http://localhost:8000";
var url="http://localhost:8000";




// click en particip y en autenticar..................entro y pasar a pregus
$(document).on("click","#particip, #particip2",function(e){
        alert("CLICK");
          var entro= 0;
           var auth = 0;
          
          var idauthev = 0;

          var codeven= $(this).attr('datum');
          var temid= $(this).attr('datumo');
          var appl = $(this).attr('id');
          validarauthentici(entro,auth,idauthev,codeven,temid,appl);
          if (appl == "particip2"){ //segunda validacion 
            alert("ingrese denuevo su codigo");
          }

          return false;
});






function validarauthentici(entro,auth,idauthev,codeven,temid,appl){

          cokey="codigo"+codeven+"";
          //idauthev = window.localStorage.getItem("codigo"+codeven+"");
          authcodes = new Array();
          authcodes = JSON.parse(window.localStorage.getItem("codigosuser"));
          alert("es tipo");
          $.each( authcodes, function( key, value ) {
            $.each( value, function( key, value ) {   //revisar existencia en arreglo storage!
              if (value == codeven){
                auth = 1;
              }else{
                auth = 0;
              }


            });
          });
          alert(JSON.stringify(authcodes));
          
          /*
            logica de estas funciones:
              llega, es particip2?....click de recepcion de codigo!!!!
              --no?, revisar si esta auth su codigo.....????idauthev.
                  (marcar como auth=1)

              cargar codigo codeven!!!!
          */
          if (appl == "particip2"){    //es, hacer valiacion!!!
                //alert("entrado verificacion");
                codeauth(codeven,temid);
                //sleep(100);
                

              }else{    //ya paso login y existe auth
                if (idauthev != 0){
                    auth = 1;
                }
                // if ( $.isNumeric(idauthev)){   //no es y es numero la session:1
                //   auth = 1;
                // }
          }
          //assigne().delay(300);

          //idauthev2 = 0;
          //idauthev2 = window.localStorage.getItem("codigo"+codeven+"");
          authcodes2 = JSON.parse(window.localStorage.getItem("codigosuser"));
          //alert(authcodes2);

          $.each( authcodes2, function( key, value ) {
            $.each( value, function( key, value ) {   //revisar existencia en arreglo storage!
              if (value == codeven){
                auth = 1;
              }else{
                auth = 0;
              }


            });
          });
          /*datukooooo*/

          //alert(idauthev2);
          // if ( $.isNumeric(idauthev2)){   //no es y es numero la session:1
          //     auth = 1;
          //     //alert('atiu');
          // }

          if (auth == 0){     //no almacenado en session!!! //repetir auth.
              //alert("auth");
              a_href = "#auth"
              //alert("cargare la auth con:"+codeven + temid);
              authentic(codeven,temid,a_href); 
              $.mobile.changePage( "#auth", "flip", true, true);
              //alert(idauthev2);
              //location.hash = "#auth"
              
          }else{
              
              //alert("parti");
              a_href = "#participan"
              particip(codeven,temid,a_href); 
              $.mobile.changePage( "#participan", "flip", true, true);
              //location.hash = "#particip"
          }

          $.mobile.changePage( a_href, "flip", true, true);

}




//CARGADO DE PREGUNTAS MULTIPLE OPCION!!!!!!!
$(document).on( "click","#goin",function(event){
    a_href = $(this).attr('href');
    codu = $(this).attr('modid');

    //alert('innnnn');
  preguntas(codu, a_href);
  $.mobile.changePage( $(a_href), "flip", true, true);
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
$(document).on("click","#pregu",function(e){
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
  			var iduser= window.localStorage.getItem("userid");

  			//alert('titulo:'+ptitu);
  			//alert('detalle:'+pdetall);
  			//alert('tema:'+tema);
  			//alert('finmensaje')
  			$.ajax({
	            type: "GET",
	            dataType: "json",
	            url:url+"/interactiv/question", 
	            //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
              beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
              complete: function() { $.mobile.hidePageLoadingMsg() },
	            data: { 'titulo': ptitu,
	        			'detalle': pdetall,
	        			'idus': iduser,
	        			'idtema': tema},
	            success: function(response){
	                alert('thanks');
	                //particip();
                  $.mobile.changePage( "#participan", "flip", true, true);
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
$(document).on("click","#resolv",function(e){
  //alert('hello');
	//alert($('input[name=radio-choice]:checked').val());
	var quest=$('fieldset').attr('id');
	if ($('input[name=radio-choice]').is(':checked')){
  			var rad_val = $('input:radio[name=radio-choice]:checked').val();

  			//alert(quest);
  			//alert(rad_val);
  			$.ajax({
	            type: "GET",
	            dataType: "json",
	            url: url +"/interactiv/resolv",
	            //"http://shielded-peak-5807.herokuapp.com/interactiv/resolv",//"http://localhost:8000/interactiv/resolv",
	            data: { 'send_resul': rad_val,
	        			'quest':quest},
                beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
            complete: function() { $.mobile.hidePageLoadingMsg() },
	            success: function(response){
	                alert('Gracias');
	                //particip();
                  $.mobile.changePage( "#participan", "flip", true, true);
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


  //(link href: ev-encuesta)
  $(document).on( "click","#fencuesta",function(event)
      {
        a_href = $(this).attr('href');
        idtem = $(this).attr('data-tem');
        window.localStorage.setItem("pregufin", 1);
        idpregu = 1
        pregfinal(idtem,a_href,idpregu);
        $.mobile.changePage( $(a_href), "flip", true, true);
        return false;
      });
  $(document).on( "click","#resolvn",function(event)
      {
        
        a_href = $(this).attr('href');
        idtem = $(this).attr('data-tem');
        var idpregufin = parseInt(window.localStorage.getItem("pregufin"));
        idpregufin += 1
        window.localStorage.setItem("pregufin", idpregufin);
        pregfinal(idtem,a_href, idpregufin);

        $.mobile.changePage( $(a_href), "flip", true, true);
        
        return false;
      });
$(document).on("click","#resolvf",function(e){
  // //alert('hello');
  // //alert($('input[name=radio-choicef]:checked').val());
  // var quest=$('fieldset').attr('id');
  // if ($('input[name=radio-choicef]').is(':checked')){
  //       var rad_val = $('input:radio[name=radio-choicef]:checked').val();

  //       //alert(quest);
  //       //alert(rad_val);
  //       $.ajax({
  //             type: "GET",
  //             dataType: "json",
  //             url: url +"/interactiv/resolv",
  //             data: { 'send_resul': rad_val,
  //               'quest':quest},
  //               beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
  //              complete: function() { $.mobile.hidePageLoadingMsg() },
  //             success: function(response){
  //                 alert('Gracias');
  //                 //particip();
                  window.localStorage.removeItem("pregufin");
                  $.mobile.changePage( "#oneevent", "flip", true, true);

              // },
              // error: function (xhr, ajaxOptions, thrownError) {
              // alert(xhr.responseText);
              // alert(thrownError);
              // alert('error');
    //       }
    //       });
    //       //window.location.replace("evento1-interactiv-t1.html");
    // }else{
    //   alert('not checked');
    //   var radio_value=0;
    // }
    return false;
});








//});


function clearstuff2(template, article){
  $(template).empty();
  article.empty();
}


//CAMBIAR LOCACION DE PREGUNTA!!!!!!!!!!!(MULTIPLE OPCION)
function pregfinal(cod, a_href,preguid){
    $tochange = $(a_href+'> article');
    $titulo = $(a_href+'> header > h1');
    clearstuff2("#templates12", $tochange);
    //alert("hereee en preguntasss multiple opcion");
    //alert(cod)
    //var give = $('#style-include1').html();
    $.ajax({
        data:
            {
            "que": cod,
            "qid":preguid,
            //"callback":"result2",
            },
        //datatype: 'json',
        type: 'GET',
        beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
        complete: function() { $.mobile.hidePageLoadingMsg() },
        url:url +"/interactiv/jlastq", 
          //"http://shielded-peak-5807.herokuapp.com/interactiv/jsonquest",//'http://localhost:8000/interactiv/jsonquest',
        success: function(result)
            {
                
            if(result){

            var b = '<div>hello</div>';
            var c = '<div>hello</div>';
            var $a = $("#templates12");
              $("#templates12").load("templates/t-preg-rfinal.html",function(){
                  $.each(result, function(key,val) {
                      //alert(key);
                      if(key ==0){
                          //alert('hello');
                          var template = $('#templatefinal').html();       //internal
                              //var template = "<h1>{{name}}</h1> ";
                          var titulo = Mustache.to_html(template, val); //other
                          //alert(template);
                          $('#templatefinal').html(titulo);
                      }else{
                          var template = $('#inplacesfinal').html();           //internal
                          var html = Mustache.to_html(template, val); //other
                          $('#legef').append(html);                    //COLOCAR DENTRO de cuadro [32>lege]!
                      }
                      
                  });

                  b = $('#templatefinal').html();            //INTERNAL, el exterior! de [lege]

                  
                  $tochange.html(b).trigger('create');
                  validendenc(preguid);
                  //titulo = headertitulofinal
                });

                
                $('#templates12').html("c");
            }
            
            
        }
    });

}


























































function particip(codev, codtem, a_href){
      $tochange = $(a_href+'> article');
      //obtener id de local storage y hacer consulta a db.

      $("#templates9").load("templates/ev-tem-interac.html",function(){
            //colocarle nombre tambien!!
            $('#goin').attr('modid',codtem);
            $('#pregunt').attr('modid',codtem);
            var template = $('#interact').html();//dentro
          
          $tochange.html(template).trigger('create');

          //$('#back').attr("class-num", "2");
      });

}
function cleantemplate(template){
  $(template).empty();
}

function authentic(codeven,codtop,a_href){  // no cambia????
      $tochange = $(a_href+'> article');
      cargaprevia = '#templates7';
      //PASADO ESTO!!!! obtener id de local storage y hacer consulta a db.
      cleantemplate(cargaprevia);
      //alert("en authentic");
      //alert(codeven);

      //alert($tochange.html());
      $(cargaprevia).load("templates/authe.html",function(){
          
          var template = $('#authi').html();//dentro
          
          $tochange.html(template).trigger('create');

          $('#particip2').attr('datum',codeven);
          //alert("en authentic IN");
          //alert(codeven);
          $('#particip2').attr('datumo',codtop);
          //alert("dato colocadoooooooooooooooooooooooooooo");
          a=$('#particip2').attr('datumo');
          //alert(a);
          //alert($tochange.html());
          //$('#back').attr("class-num", "2");
      });

}


function codeauth(codeven, codtopic){
      var cod = $('input[name=txtcode]').val();
      var idusuario = window.localStorage.getItem("userid");
      // if (cod == "1234"){
      //   window.localStorage.setItem("codigo"+codeven+"", codeven);
      // }else{
      //alert("en codeauth");
      //alert(codeven);
      $.ajax({
              type: "GET",
              dataType: "json",
              url:url +"/user/validtick/", 
              data: { 'idev': codeven,    //siempre marca evento?? el guardado???
                'idtem': codtopic,      //siempre el mismo tema??
                'userid': idusuario,
                'codau': cod,},
              beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
              complete: function() { $.mobile.hidePageLoadingMsg() },
              success: function(resulta){
                  //alert(resulta.result);
                  if(resulta.result == "Exito"){
                      authcodes = JSON.parse(window.localStorage.getItem("codigosuser"));
                      //key = "codigo"+codeven+"";
                      cod=codeven;
                      // codnu= {"k":key,
                      //         "cd": cod};
                      codnu = {val:   cod,};
                      authcodes.push(codnu);
                      authcodes2 = JSON.stringify(authcodes);
                      window.localStorage.setItem("codigosuser", authcodes2);

                      //window.localStorage.setItem("codigo"+codeven+"", codeven);

                      //alert("en llave: "+ "codigo"+codeven+"");
                      //alert(codeven);
                  }else if(resulta.result == "Error"){
                    alert("error con su codigo de autenticacion!");
                  }
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });
      //}

      //$('input[name=txtuser]').val() = "";
      //$('input[name=txtpassword]').val() = "";
      //return false;
}







//para realizar una pregunta al expositor.... hacer consulta  para ver si esta habilitada
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

//CAMBIAR LOCACION DE PREGUNTA!!!!!!!!!!!(MULTIPLE OPCION)
function preguntas(cod, a_href){
    $tochange = $(a_href+'> article');
    $titulo = $(a_href+'> header > h1');
    //alert("hereee en preguntasss multiple opcion");
    //alert(cod)
    //var give = $('#style-include1').html();
    $.ajax({
        data:
            {
            "que": cod,
            //"callback":"result2",
            },
        //datatype: 'json',
        type: 'GET',
        beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
        complete: function() { $.mobile.hidePageLoadingMsg() },
        url:url +"/interactiv/jsonquest", 
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


function validendenc(idpregufin){
  //var idpregufin = parseInt(window.localStorage.getItem("pregufin"));
  if (idpregufin == 5) {
    $('#resolvn').css("display", "none");
    $('#resolvf').css("display", "block");
    
  }else{
    $('#resolvn').css("display", "block");
    $('#resolvf').css("display", "none");
  }

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