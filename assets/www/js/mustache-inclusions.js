
// Storage.prototype.setArray = function(key, obj) {
//     return this.setItem(key, JSON.stringify(obj))
// }
// Storage.prototype.getArray = function(key) {
//     return JSON.parse(this.getItem(key))
// }

//var arr = new Array();
//$(document).ready(function(){
// <<<<<<< HEAD
// =======
// var url23="http://pietreal.herokuapp.com";
// var urls="http://localhost:8000";
// $(document).on("pagebeforeshow", function(e){
// //function onDeviceReady() {
//       var place_class =  $('#place').attr('class-num');
      
//       if (place_class == 'home') {
//         //if (validarlogeado()){
//           //funcion de cargado de opciones con localstorage
//           //}else{
//           eventos_principal();
//           //}        
//       }

//       $(document).on( "click", "#homini",function(event)
//         {
// >>>>>>> ca6e2863bba8f7ce37dd4842f4f15202b5776691

//var url="http://pietreal.herokuapp.com";
//var local_url="http://pietreal.herokuapp.com";
var local_url="http://localhost:8000";
var url="http://localhost:8000";

/*
function onLoad(){
      document.addEventListener("deviceready", onDeviceReady, true);
 }
function onDeviceReady(){
      eventos_principal();
      navigator.notification.alert("PietReal is working!!");
 }


$(document).on( "click",'#exit',function(event){
      navigator.app.exitApp();
        });
*/


/*$(document).bind("pagebeforechange", function(e, data) {
  //alert("hi");

});*/



$(document).on("pagebeforeshow", function(e,data ){
       eventos_principal();
});
       //alert("jojo");
       //var u = $.mobile.path.parseUrl(data.toPage);
        //alert(u);
      // $(document).on( "click",'#logini',function(event){
      // //if u = '#logini' {
      //     event.preventDefault();
      //     a_href1 = $(this).attr('href');
      //     login(a_href1);
      //     $.mobile.changePage( $(a_href1), "slide", true, true);
          
      //     return false;
      //   });


    $(document).on( "click",'#logini',function(event){
      //if u = '#logini' {
          //event.preventDefault();
          a_href = $(this).attr('href');
          login(a_href);
          $.mobile.changePage( $(a_href), "flip", true, true);
          
          return false;
    });
    $(document).on( "click",".logouti",function(event)

        {
          logout();
          $.mobile.changePage('#home', "flip", true, true);
          return false;
        });


    $(document).on( "click",".idevento",function(event)
        {
          //event.preventDefault();
          a_href = $(this).attr('href');
          ideventoo = $(this).attr('id');
          evento(ideventoo, a_href); 

          $.mobile.changePage( $(a_href), "flip", true, true);
          return false;
    });

    $(document).on( "click",".idtema",function(event)
        {
          //var idusuarioo = window.localStorage.getItem("userid");
          a_href = $(this).attr('href');
          idtopic = $(this).attr('id');
          tema(idtopic, a_href); 
          $.mobile.changePage( $(a_href), "flip", true, true);
          // if (idusuarioo != null) {
          //   alert("Bienvenido");
          //       $('#particip').css("display", "block");
          // }else{
          //      $('#particip').css("display", "none");
          // }
          // validarlogeado();
          return false;
        });



    $(document).on( "click","#temas",function(event)
        {
          //event.preventDefault();
          a_href = $(this).attr('href');
          ideventoo = $(this).attr('data-tem');
          temas(ideventoo, a_href);
          $.mobile.changePage( $(a_href), "flip", true, true);
          return false;
    });

    $(document).on( "click","#myoptions",function(event)
        {
          //event.preventDefault();
          a_href = $(this).attr('href');
          loged(a_href);
          $.mobile.changePage( $(a_href), "flip", true, true);
          return false;
    });

    

    $(document).on( "click","#misev2",function(event)
        {
          a_href = $(this).attr('href');
          miseventos(a_href);
          $.mobile.changePage( $(a_href), "flip", true, true);
          return false;
        });

    $(document).on( "click","#expositores",function(event)
        {
          a_href = $(this).attr('href');
          idtem = $(this).attr('data-tem');

          speakersload(idtem,a_href);
          $.mobile.changePage( $(a_href), "flip", true, true);
          return false;
        });



function speakersload(idtema, a_href){
      cargaprevia = '#templates14';
      
      $tochange = $(a_href+'> article');
      $titulo = $(a_href+'> header > h1');
      
      clearstuff(cargaprevia,$tochange);

      $.ajax({
              type: "GET",
              dataType: "json",
              url:url + "/json/verexpositor/",
              data: { 'top': idtema,},
              beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
              complete: function() { $.mobile.hidePageLoadingMsg() },
              success: function(resulta){
                  if(resulta){
                    
                      $(cargaprevia).load("templates/expositor-tema.html",function(){
                        var html ="";
                            var template = $('#expdeta').html();
                            html = Mustache.to_html(template, resulta); //other
                            $('#evdeta').html(html);

                            b = $('#expint').html();
                            t = $('#exptitle').text();


                            $tochange.html(b).trigger('create');
                            $titulo.text(t).trigger('create');

                        });
                    }
                    
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });
}










function miseventos(a_href){
      $tochange = $(a_href+'> article');
      $titulo = $(a_href+'> header > h1');


      var idusuario = window.localStorage.getItem("userid");
      $.ajax({
              type: "GET",//"POST",
              dataType: "json",
              url:url + "/user/events/", 
              //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
              data: { 'userid': idusuario},
              beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
              complete: function() { $.mobile.hidePageLoadingMsg() },
              success: function(resulta){
                  if(resulta){
                      //$("#templates").load("templates/misEventos.html",function(){

                          $("#templates8").load("templates/template-eventow.html",function(){
                              $.each(resulta, function(key,val) {
                                var template = $('#template34').html();
                                var html = Mustache.to_html(template, val);
                                $('#template334').append(html);
                              });
                              a=$('#containerr2').html();
                              
                              $tochange.html(a).trigger('create');
                          });

                    validarlogeado();  
                    }
                    
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });
}



















function eventos_principal(){
  var url2 =url+"/json/jsonev/";
  $('#templates').empty();

  $.getJSON(url2, function(json) {
      //alert("get data" + json);
      $("#templates").load("templates/template-event.html",function(){
     // $.get("templates/template-event.html", function(templates) {//(templates).filter
          //alert("get data" + json);
          //resuc = JSON.stringify(json, null, 4);//jquery json dump
          //alert(resuc);
          //alert(url2);

          $.each(json, function(key,val) {
            var template = $('#template3').html();
            var html = Mustache.to_html(template, val);
            $('#template33').append(html);
          });

          a=$('#containerr').html();
          
          $('.section2').html(a).trigger('create');
      });
      
      

    });
}


function login(a_href){
     $tochange = $(a_href+'> article');
     $("#templates1").load("templates/login.html",function(){

          var template = $('#logino').html();/// internal
        
        $tochange.html(template).trigger('create');
        $('input[name=txtuser]').val() = "";
        $('input[name=txtpassword]').val()= "";
     });
}
 
function logout(){// talvez al deslogearse... eliminar las cookies de sus codigos q habilito!!!
  window.localStorage.removeItem("userid");
  window.localStorage.removeItem("codigo210");//estatico por el momento, como manejar 2 o mas eventos?
  window.localStorage.removeItem("codigo212");
  window.localStorage.removeItem("codigo1");
  window.localStorage.removeItem("codigosuser");
                  //deslogearlos? los codigos deberian estar en un lugar, localstorage... array? te todas las llaves!!!
                      //si quiere guardar en django sus llaves podra enviarlas!!
  $.mobile.changePage( $('#home'), "flip", true, true);
  validarlogeado();

}
function loged(a_href){
      cargaprevia = '#templates4';
      $tochange = $(a_href+'> article');
      $titulo = $(a_href+'> header > h1');
      clearstuff(cargaprevia,$tochange);
      $titulo.empty();

      var uid = $('input[name=txtuser]').val();
      var pass = $('input[name=txtpassword]').val();

      //alert(uid);
      // if(uid =="user1"){
      //     resulta={"nombre":"mario",
      //             "apellido":"lopez",
      //               "userid":7};
      //     window.localStorage.setItem("userid", resulta.userid);
      //       $(cargaprevia).load("templates/logedprinc.html",function(){
      //         var html ="";
      //             var template = $('#logmain').html();
      //             html = Mustache.to_html(template, resulta); //other
      //             $('#logmain').html(html);
      //             b = $('#logstart').html();
      //             t = $('#tprincipal').text();


      //             $tochange.html(b).trigger('create');
      //             $titulo.text(t).trigger('create');

      //         });
      //       $(cargaprevia).html("<div> </div>");
      //     validarlogeado();


      // }else{
      $.ajax({
              type: "GET",
              dataType: "json",
// <<<<<<< HEAD
              url:local_url+"/user/login/", 
              data: { 'username': uid,
                'password': pass},
              beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
              complete: function() { $.mobile.hidePageLoadingMsg() },
// =======
//               url: urls+"/json/topics/",
//               //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
//               data: { 'idevento': idevento},
// >>>>>>> ca6e2863bba8f7ce37dd4842f4f15202b5776691
              success: function(resulta){
                  //resuc = JSON.stringify(resulta, null, 4);//jquery json dump
                  //a = $.parseJSON(resuc);
                  //alert(resuc);
                  
                  
                  if(resulta){
                    if(resulta.result == "Exito"){

                      //alert(resulta.userid);
                      window.localStorage.setItem("userid", resulta.userid);
                      $(cargaprevia).load("templates/logedprinc.html",function(){
                        var html ="";
                            var template = $('#logmain').html();
                            html = Mustache.to_html(template, resulta); //other
                            $('#logmain').html(html);
                            b = $('#logstart').html();
                            t = $('#tprincipal').text();


                            $tochange.html(b).trigger('create');
                            //alert(t);
                            $titulo.text(t).trigger('create');

                        });
                        
                        //definiendo arreglo de codigos!:
                          var authcodes = new Array();
                          //gatheredPosts.push({title:posts[i].title, content:posts[i].content});
                          //window.localStorage.setItem("cachedPosts", gatheredPosts);
                          authcodes2= JSON.stringify(authcodes);
                          window.localStorage.setItem("codigosuser", authcodes2);
                      //$(cargaprevia).html("<div> </div>");
                        validarlogeado(); 
                      }else{
                        alert("hubo un error con su informacion");
                      }
                    }else{
                      alert("NO HAY resultadooo");
                    }
                    
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              login("#login");  //?
              alert(thrownError);
              alert('error');
          }
          });
      
      $('input[name=txtuser]').val() = "";
      $('input[name=txtpassword]').val() = "";
      return false;
}



function clearstuff(template, article){
  $(template).empty();
  article.empty();
}
// <<<<<<< HEAD
// =======
// //var url="http://pietreal.herokuapp.com"
// //      var local_url="http://localhost:8000"
// >>>>>>> ca6e2863bba8f7ce37dd4842f4f15202b5776691

function evento(idevento, a_href){
      cargaprevia = '#templates2';

      $tochange = $(a_href+'> article');
      $titulo = $(a_href+'> header > h1');
      
      clearstuff(cargaprevia,$tochange);

        idev = idevento;
      $.ajax({
              type: "GET",
              dataType: "json",
// <<<<<<< HEAD
              url:url + "/json/detalle/",
// =======
//               url:urls + "/json/detalle/",
//               //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
// >>>>>>> ca6e2863bba8f7ce37dd4842f4f15202b5776691
              data: { 'idevento': idev,},
              beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
              complete: function() { $.mobile.hidePageLoadingMsg() },
              success: function(resulta){
                  if(resulta){
                      $(cargaprevia).load("templates/evento1.html",function(){
                        var html ="";
                            var template = $('#evdeta').html();
                            html = Mustache.to_html(template, resulta); //other
                            $('#evdeta').html(html);

                            b = $('#descevento').html();
                            t = $('#evtitle').text();


                            $tochange.html(b).trigger('create');
                            $titulo.text(t).trigger('create');

                        });
                    }
                    
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });
}




function tema(idtopic,a_href){
      $tochange = $(a_href+'> article');
      $titulo = $(a_href+'> header > h1');
        idto = idtopic;

      $.ajax({
              type: "GET",
              dataType: "json",
// <<<<<<< HEAD
              url:url + "/json/detalletopic/",
              data: { 'idtopic': idto,},
              beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
              complete: function() { $.mobile.hidePageLoadingMsg() },
// =======
//               url:urls + "/user/events/", 
//               //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
//               data: { 'userid': idusuario},
// >>>>>>> ca6e2863bba8f7ce37dd4842f4f15202b5776691
              success: function(resulta){
                  if(resulta){
                      $("#templates6").load("templates/ev-tema.html",function(){
                        var html ="";
                            var template = $('#topdeta').html();
                            html = Mustache.to_html(template, resulta); //other
                            $('#topdeta').html(html);

                            b = $('#tema').html();
                            t = $('#titema').text();


                            $tochange.html(b).trigger('create');
                            $titulo.text(t).trigger('create');

                        });
                        

                    }
                    
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });

      //       var template = $('#tema').html();//dentro
          
      //     $tochange.html(template).trigger('create');
      // });
      


}






function temas(idevento, a_href){
      //alert("TEMASS");
      cargaprevia2 = '#templates3';
      $tochange = $(a_href +' > article');
      $titulo = $(a_href+'> header > h1');

      clearstuff(cargaprevia2, $tochange);




      //$templ = $(a_href +' > article '+'> #template');
      //alert($templ.html());
      //$titulo = $(a_href).children('header').children('h1');
      idev = idevento;
      $.ajax({
              type: "GET",//"POST",
              dataType: "json",
// <<<<<<< HEAD
              url: url+"/json/topics/",
// =======
//               url:urls+"/user/login/", 
// >>>>>>> ca6e2863bba8f7ce37dd4842f4f15202b5776691
              //"http://shielded-peak-5807.herokuapp.com/interactiv/question",//"http://localhost:8000/interactiv/question",
              data: { 'idevento': idev},
              beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
              complete: function() { $.mobile.hidePageLoadingMsg() },
              success: function(resulta){
                  //resuc = JSON.stringify(resulta, null, 4);//jquery json dump
                  //a = $.parseJSON(resuc);
                  //alert(resuc);
                  if(resulta){
                          $(cargaprevia2).load("templates/evn-temas.html",function(){

                              $.each(resulta, function(key,val) {
                                var template = $('#template3144').html();
                                var html = Mustache.to_html(template, val);
                                $('#template3324').append(html);
                              });
                              a=$('#containerr5').html();
                              $tochange.html(a).trigger('create');
                              
                          });
                          //$(cargaprevia2).html("<div> </div>");
                    //$('#back').attr("class-num", "72");
                    }else{
                      alert("hello");
                    }
                    
              },
              error: function (xhr, ajaxOptions, thrownError) {
              alert(xhr.responseText);
              alert(thrownError);
              alert('error');
          }
          });
// <<<<<<< HEAD
// =======
//       //$('input[name=txtuser]').val() = "";
//       //$('input[name=txtpassword]').val() = "";
//       return false;
// }


// function login(){
//      $("#templates").load("templates/login.html",function(){

//           var template = $('#login').html();/// internal
        
//         $('.section').html(template).trigger('create');

//         $('#back').attr("class-num", "2");
//      });
// }



// function eventos_principal(){
//   var url2 = urls + "/json/jsonev/"
//   // var url="http://pietreal.herokuapp.com/json/jsonev/" //url de proximos!!
//   // var old_url ="http://adnp.pythonanywhere.com/json/jsonev/?callback=?"
//   // var local_url="http://localhost:8000/json/jsonev/"

//   //verificacion cookie!
//   $.getJSON(url2, function(json) {
//       $("#templates").load("templates/template-event.html",function(){
//           $.each(json, function(key,val) {
//             var template = $('#template3').html();
//             var html = Mustache.to_html(template, val);
//             $('#template33').append(html);
//           });
//           a=$('#containerr').html();
          
//           $('.section').html(a).trigger('create');
//       });
      

//     });
// }


// function proximos_eventos(){
//   var url2 = urls + "/json/jsonev/?callback=?"
//   // var url="http://pietreal.herokuapp.com/json/jsonev/?callback=?"//url de proximos!!
//   // var local_url="http://localhost:8000/json/jsonev/?callback=?"
//       //dar id, nombre y descripcion!!!
//   $.getJSON(url2, function(json) {
//       $("#templates").load("templates/template-event.html",function(){
//           $.each(json, function(key,val) {
//             var template = $('#template3').html();
//             var html = Mustache.to_html(template, val);
//             $('#template33').append(html);
//           });
//           a=$('#containerr').html();
          
//           $('.section').html(a).trigger('create');
//       });
      
// >>>>>>> ca6e2863bba8f7ce37dd4842f4f15202b5776691

}


function validarlogeado(){
  var idusuario = window.localStorage.getItem("userid");
  //alert(idusuario);
  if (idusuario != null) {
    $('#logini').css("display", "none");
    $('.logouti').css("display", "block");
    //$('#particip').css("display", "block");
    $('a[data-icon=home]').attr('href','#options');
    return true;
  }else{
    $('#logini').css("display", "block");
    $('.logouti').css("display", "none");
    //$('#particip').css("display", "none");
    $('a[data-icon=home]').attr('href','#home');
    return false;
  }
  return false;

}
