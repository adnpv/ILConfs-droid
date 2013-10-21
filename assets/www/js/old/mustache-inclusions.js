

//function preguntas(){
//$(window).bind("load", function() {
function preguntas(){
  //alert("hello");
$.ajax(
        {
        data:
            {
            "que": 1,
            "callback":"result2",
            },
        //datatype: 'json',
        type: 'GET',
        url: 'http://localhost:8000/interactiv/jsonquest',
        success: function(result)
            {

            if(result){
            var b = '<div>hello</div>';
            var $a = $("#templates22");
            $("#templates22").load("templates/t-preg-resolv.html",function(){
                /*añadir titulo de pregunta::*/
                // var template = $('#headertitulo').html();
                //     //var template = "<h1>{{name}}</h1> ";
                // var titulo = Mustache.to_html(template, val); //other
                // $('#titulo').html(titulo);

                $.each(result, function(key,val) {
              // var fullHtml;
                //alert(val.name);

                
                    // $('#template3').each(function() {
                    //     fullHtml += $(this).html();
                    // });
                    
                    var template = $('#inplaces').html();
                    //var template = "<h1>{{name}}</h1> ";
                    var html = Mustache.to_html(template, val); //other
                    $('#lege').append(html);
                });
                b = $('#template32').html();
                $('.quests').html(b);

              });
            //b=$a.html();
            
            }
            // alert(result);
            // if (result)
            //     {
            //         alert("llego");
            //     }else{
            //         alert("no llego");
            //     }
            }
        });
  
  //var question = $(this).attr("class");
  //alert(question);
  // $.getJSON('http://localhost:8000/interactiv/jsonquest/?que='+question, function(json) {
  //   //dato= jquery.parseJSON(data);
  //     $.each(json, function(key,val) {
  //       // var fullHtml;

  //       $("#templates").load("templates/t-preg-resolv.html",function(){
  //           // $('#template3').each(function() {
  //           //     fullHtml += $(this).html();
  //           // });
  //           var template = $('#template3').html();
  //           //var template = "<h1>{{name}}</h1> ";
  //           var html = Mustache.to_html(template, val);
  //           $('.home-page').html(html);
  //       });
  //     });

  //   });

}
//});

//}





// $(window).bind("load", function() {
// $(".goin").click(function(event)
//         {
//           event.preventDefault();

//           preguntas();
//           return false;
//         });

// });
$(document).ready(function(){
 
// $("#goin").bind("load",function(){
//     $('#goin').click(function(){
//       alert("hello");
//       var question = $(this).attr("class");
//     });
// });


 //produccion: http://adnp.pythonanywhere.com/json/jsonev/?callback=?



$.getJSON('http://adnp.pythonanywhere.com/json/jsonev/?callback=?', function(json) {
  //dato= jquery.parseJSON(data);
    $.each(json, function(key,val) {
      // var fullHtml;

      $("#templates").load("templates/template-event.html",function(){
          // $('#template3').each(function() {
          //     fullHtml += $(this).html();
          // });
          var template = $('#template3').html();
          //var template = "<h1>{{name}}</h1> ";
          var html = Mustache.to_html(template, val);
          $('.eventus').append(html);
      });
    });

  });




      $(".goin").click(function(event)
        {
          event.preventDefault();

          preguntas();
          return false;
        });

      //$( ".goin" ).css( "border", "3px solid red" );
      $("#goin").click(function(event)
        {

          preguntas();
          return false;
        });


        // var view = {
        //   titulo: "Titulillo",
        //   name : "Joe",
        //   occupation : "Web Developer",
        //   intereses: "Hackear pages"
        // };
 
        // $("#templates").load("templates/template.html",function(){
        //   var template = document.getElementById('template1').innerHTML;
        //     var template2 = document.getElementById('template2').innerHTML;
        //     var template3 = document.getElementById('template3').innerHTML;
        //   var output = Mustache.render(template, view);
        //   $("#person").html(output);
        // });


});