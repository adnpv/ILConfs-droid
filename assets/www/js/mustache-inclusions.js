//var arr = new Array();
//$(document).ready(function(){
var url="http://pietreal.herokuapp.com"
var local_url="http://localhost:8000"
$(document).on("pagebeforeshow", function(e){
//function onDeviceReady() {
      var place_class =  $('#place').attr('class-num');
      
      if (place_class == 'home') {
        //if (validarlogeado()){
          //funcion de cargado de opciones con localstorage
          //}else{
          eventos_principal();
          //}        
      }

      $(document).on( "click", "#homini",function(event)
        {

          place_class =  $('#place').attr('class-num');
          if (place_class == 'home'){

          }else{
            eventos_principal();
            asignar_place('home');
          }
          return false;
        });




//---------------------------------------------------------------------------------------------
      // $(document).on( "click","#back",function(event)
      //   {
      //     //event.preventDefault();
      //     consultas_back();
      //       //obtener el place anterior!!!!! y colocarlo como link bajo ayuda!!!!!!!
      //     return false;
      //   });

      $(document).on( "click","#logini",function(event)
      //$("#goin").click(function(event)
        {
          //alert('he');
          //event.preventDefault();
          //$('#place').attr('class-num','login');
          asignar_place('login',this);//#login
          login();
          return false;
        });
      $(document).on( "click","#logouti",function(event)
      //$("#goin").click(function(event)
        {
          //alert('he');
          //event.preventDefault();
          //$('#place').attr('class-num','login');
          asignar_place('login',this);//#login
          logout();
          return false;
        });
        $(document).on( "click","#myoptions",function(event)
        {
          asignar_place('logeado',this);//#options
          loged();
          return false;
        });


        //----------------------------------------------------------------------------
        $(document).on( "click","#misev",function(event)
        {
          asignar_place('misevents',this);//#misev
          miseventos();
          return false;
        });

        //proximos

        $(document).on( "click","#proxev",function(event)
        {
          asignar_place('proxev',this);//#proximev
          proximos_eventos();
          return false;
        });
        //----------------------------------------------------------------------------
        $(document).on( "click",".idevento",function(event)
        {
          //ojo!!!al inicio, cargar data hacia aca!!!
          asignar_place('event',this);//#evento1
          ideventoo = $(this).attr('id');
          evento(ideventoo); 
          return false;
        });

        $(document).on( "click","#temas",function(event)
        {
          asignar_place('temas',this);//#ev-temas
          ideventoo = $(this).attr('data-tem');
          temas(ideventoo);
          return false;
        });

        //expositor
        //horario




        //------------------------
        $(document).on( "click",".idtema",function(event)
        {
          asignar_place('tema',this);//#ev-tema1
          tema(); 
          return false;
        });

    

    // $(document).ajaxSend(function(event, xhr, settings) {

    //         xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    // });




});



//asignar la llegada a un punto.
function asignar_place(data,selector){
  $('#place').attr('class-num', data);
  location.hash = $(selector).attr('href'); 
  //arr.push(data);
  //alert('asignado');
}

//obtener el place anterior!!!!! y colocarlo como link bajo ayuda!!!!!!!

//puede ser: añadir a una lista(modificar html copiando el link q se hizo click)
//luego cargar la funcion segun el link!! jeje!... opcional(agregar 2 o mas antiguos)
//y atras d atras??? O.o???
function colocar_ant_place(){
  //ant_place =$('#place').attr('class-num');
  
  location.hash = $(selector).attr('href'); 
  //alert('asignado');
}









function consultas_back(){
 //  var back_class =  $('#back').attr('class-num');
 //  //alert(back_class);
 //  //switch(back_class)
 //  //data arry
 //  longitud= arr.length-1
 //  alert(longitud);
 //  alert(arr[longitud]);
 // switch(arr[longitud])
 //  {
 //  case 'login'://#login
 //        //funcion();
 //        login();
 //        break;
 //  case 'logeado'://#options
 //      //funcion();
 //      loged();
 //      break;
 //  case 'misevents'://#misev
 //      //funcion();
 //      miseventos();
 //      break;
 //  case 'proxev'://#proximev
 //      //funcion();
 //      proximos_eventos();
 //      break;
 //  case 'event'://#evento1
 //      //funcion();
 //      evento(); 
 //      break;
 //  case 'temas'://#ev-temas
 //      //funcion();
 //      temas();
 //      break;
 //  case 'tema'://#ev-tema1
 //      //funcion();
 //      tema(); 
 //      break;

 //  }


  // switch(back_class)
  // {
  // case '1':
  //   eventos_principal();
  //   break;
  // case '72':
  //   preguntas();

  //   break;
  // default:
    //code to be executed if n is different from case 1 and 2
  //}
  //arr.pop();
}



function tema(){
      $("#templates").load("templates/ev-tema.html",function(){

            var template = $('#tema').html();//dentro
          
          $('.section').html(template).trigger('create');

          $('#back').attr("class-num", "2");
      });
      


}

function temas(idevento){
      $.ajax({
              type: "GET",//"POST",
              dataType: "json",
              url: url+"/json/topics/",
              //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
              data: { 'idevento': idevento},
              success: function(resulta){
                  //resuc = JSON.stringify(resulta, null, 4);//jquery json dump
                  //a = $.parseJSON(resuc);
                  //alert(resuc);
                  if(resulta){
                      //$("#templates").load("templates/misEventos.html",function(){

                          $("#templates").load("templates/ev-temas.html",function(){
                              $.each(resulta, function(key,val) {
                                var template = $('#template3').html();
                                var html = Mustache.to_html(template, val);
                                $('#template33').append(html);
                              });
                              a=$('#containerr').html();
                              
                              $('.section').html(a).trigger('create');
                          });
                    $('#back').attr("class-num", "72");
                    }
                    
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });
      // $("#templates").load("templates/ev-temas.html",function(){

      //       var template = $('#alltemas').html();//dentro
          
      //     $('.section').html(template).trigger('create');

      //     $('#back').attr("class-num", "2");
      // });
   
}
var url="http://pietreal.herokuapp.com"
      var local_url="http://localhost:8000"

function evento(idevento){
      // var url="http://pietreal.herokuapp.com/json/detalle/"
      // var local_url="http://localhost:8000/json/detalle/"
        idev = idevento;
      $.ajax({
              type: "GET",  //"POST",
              dataType: "json",
              url:url + "/json/detalle/",
              //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
              data: { 'idevento': idev,},
              success: function(resulta){
                  //resuc = JSON.stringify(resulta, null, 4);//jquery json dump
                  //a = $.parseJSON(resuc);
                  //alert(resuc);.
                  if(resulta){
                      $("#templates").load("templates/evento1.html",function(){
                        var html ="";
                            var template = $('#evdeta').html();
                            html = Mustache.to_html(template, resulta); //other
                            $('#evdeta').html(html);

                            b = $('#descevento').html();
                            t = $('#evtitle').text();
                            $('.section').html(b).trigger('create');
                            $('#titulopag').text(t).trigger('create');

                        });
                    $('#back').attr("class-num", "72");
                    }
                    
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });

      // $("#templates").load("templates/evento1.html",function(){

      //       var template = $('#descevento').html();//dentro
          
      //     $('.section').html(template).trigger('create');

      //     $('#back').attr("class-num", "2");
      // });
      


}


function miseventos(){
      // var url="http://pietreal.herokuapp.com/user/events/"
      // var local_url="http://localhost:8000/user/events/"
      var idusuario = window.localStorage.getItem("userid");
      $.ajax({
              type: "GET",//"POST",
              dataType: "json",
              url:url + "/user/events/", 
              //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
              data: { 'userid': idusuario},
              success: function(resulta){
                  //resuc = JSON.stringify(resulta, null, 4);//jquery json dump
                  //a = $.parseJSON(resuc);
                  //alert(resuc);


                  if(resulta){
                      //$("#templates").load("templates/misEventos.html",function(){

                          $("#templates").load("templates/template-event.html",function(){
                              $.each(resulta, function(key,val) {
                                var template = $('#template3').html();
                                var html = Mustache.to_html(template, val);
                                $('#template33').append(html);
                              });
                              a=$('#containerr').html();
                              
                              $('.section').html(a).trigger('create');
                          });
                    $('#back').attr("class-num", "72");
                    validarlogeado();  
                    }
                    
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });
      // $("#templates").load("templates/misEventos.html",function(){

      //       var template = $('#eventContent').html();//dentro
          
      //     $('.section').html(template).trigger('create');

      //     $('#back').attr("class-num", "2");
      // });
      


}

function logout(){
  window.localStorage.removeItem("userid");
  validarlogeado();
}
function loged(){
      // var url="http://pietreal.herokuapp.com/user/login/"
      // var local_url="http://localhost:8000/user/login/"
      //obtener userid y pw:
      var uid = $('input[name=txtuser]').val();
      var pass = $('input[name=txtpassword]').val();

      $.ajax({
              type: "GET",//"POST",
              dataType: "json",
              url:url+"/user/login/", 
              //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
              data: { 'username': uid,
                'password': pass},
              success: function(resulta){
                  //resuc = JSON.stringify(resulta, null, 4);//jquery json dump
                  //a = $.parseJSON(resuc);
                  //alert(resuc);
                  
                  window.localStorage.setItem("userid", resulta.userid);
                  if(resulta){
                      $("#templates").load("templates/logedprinc.html",function(){
                        var html ="";
                            var template = $('#logmain').html();
                            html = Mustache.to_html(template, resulta); //other
                            $('#logmain').html(html);
                            b = $('#logstart').html();
                            t = $('#tprincipal').text();
                            $('.section').html(b).trigger('create');
                            $('#titulopag').text(t).trigger('create');

                        });
                    $('#back').attr("class-num", "72");
                    validarlogeado();  
                    }
                    
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });
      $('input[name=txtuser]').val() = "";
      $('input[name=txtpassword]').val() = "";
      return false;
}


function login(){
     $("#templates").load("templates/login.html",function(){

          var template = $('#login').html();/// internal
        
        $('.section').html(template).trigger('create');

        $('#back').attr("class-num", "2");
     });
}



function eventos_principal(){
  var url2 = url + "/json/jsonev/"
  // var url="http://pietreal.herokuapp.com/json/jsonev/" //url de proximos!!
  // var old_url ="http://adnp.pythonanywhere.com/json/jsonev/?callback=?"
  // var local_url="http://localhost:8000/json/jsonev/"

  //verificacion cookie!
  $.getJSON(url2, function(json) {
      $("#templates").load("templates/template-event.html",function(){
          $.each(json, function(key,val) {
            var template = $('#template3').html();
            var html = Mustache.to_html(template, val);
            $('#template33').append(html);
          });
          a=$('#containerr').html();
          
          $('.section').html(a).trigger('create');
      });
      

    });
}


function proximos_eventos(){
  var url2 = url + "/json/jsonev/?callback=?"
  // var url="http://pietreal.herokuapp.com/json/jsonev/?callback=?"//url de proximos!!
  // var local_url="http://localhost:8000/json/jsonev/?callback=?"
      //dar id, nombre y descripcion!!!
  $.getJSON(url2, function(json) {
      $("#templates").load("templates/template-event.html",function(){
          $.each(json, function(key,val) {
            var template = $('#template3').html();
            var html = Mustache.to_html(template, val);
            $('#template33').append(html);
          });
          a=$('#containerr').html();
          
          $('.section').html(a).trigger('create');
      });
      

    });
}



function validarlogeado(){
  var idusuario = window.localStorage.getItem("userid");
  if (idusuario != null) {
    $('#logini').css("display", "none");
    $('#logouti').css("display", "block");
    return True;
  }else{
    $('#logini').css("display", "block");
    $('#logouti').css("display", "none");
    return False;
  }

}



//OJO!!!! cada punto al estar logeado
//funcion para validar existencia de 
//o solo cambiar en el slide izquierdo q es estatico XD.



