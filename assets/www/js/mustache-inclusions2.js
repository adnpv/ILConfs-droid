

function preguntas(){
    var give = $('#style-include1').html();
    $.ajax({
        data:
            {
            "que": 2,
            },
        type: 'GET',
        url:"http://pietreal.herokuapp.com/interactiv/jsonquest", 
        success: function(result)
            {

            if(result){
            var b = '<div>hello</div>';
            var $a = $("#templates22");
              $("#templates22").load("templates/t-preg-resolv.html",function(){
                  $.each(result, function(key,val) {
                      //alert(key);
                      if(key ==0){
                        //alert('hello');
                        var template = $('#template32').html();
                            //var template = "<h1>{{name}}</h1> ";
                        var titulo = Mustache.to_html(template, val); //other
                        //alert(template);
                        $('#template32').html(titulo);
                      }else{
                      var template = $('#inplaces').html();
                      var html = Mustache.to_html(template, val); //other
                      $('#lege').append(html);  
                      }
                      
                  });

                  b = $('#template32').html();
                  $('.quests').html(b);

                  $('#style-include').html(give);
                });
            }
            
            
        }
    });
 
}

$(document).ready(function(){

var url="http://pietreal.herokuapp.com/json/jsonev/?callback=?"
var old_url ="http://adnp.pythonanywhere.com/json/jsonev/?callback=?"

function loadBasicData(){
  $.getJSON(url, function(json) {
      $.each(json, function(key,val) {

        $("#templates").load("templates/template-event.html",function(){
            var template = $('#template3').html();
            var html = Mustache.to_html(template, val);
            $('.eventus').append(html);
        });
      });

  });

}
      $(".goin").click(function(event)
        {
          event.preventDefault();
          preguntas();
          return false;
        });

      $("#goin").click(function(event)
        {
          preguntas();
          return false;
        });

});