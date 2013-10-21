
$(document).ready(function(){

$('#goino').click(function(e){
  e.preventDefault();
  //var question = $(this).attr("data-ev");
  var qclasses = $(this).attr('class').split(" ");
  var question = qclasses[0];
  var urljquest = 'http://localhost:8000/interactiv/jsonquest?que='+question;
  //alert(question);
  alert(urljquest);
  // if ($('input[name=radio-choice]').is(':checked')){
  //       var rad_val = $('input:radio[name=radio-choice]:checked').val();
  //       $.ajax({
  //             type: "POST",
  //             url: "http://localhost:8000/interactiv/resolv",
  //             data: { 'send_resul': rad_val,
  //               'quest':quest},
  //             success: function(){
  //                 alert('thanks');
  //                }
  //              });
  //       }else{
  //         alert(urljquest);
  //         var radio_value=0;
  //       }

   $.get("http://localhost:8000/interactiv/jsonquest/", "que="+question, function(data, textStatus, XMLHttpRequest) {
        alert(data);
      //dato= jquery.parseJSON(data);
      $.each(data, function(key,val) {
        // var fullHtml;
        alert(question);
        $("#templates2").load("templates/t-preg-resolv.html",function(){
            // $('#template3').each(function() {
            //     fullHtml += $(this).html();
            // });
            var template = $('#template3').html();
            //var template = "<h1>{{name}}</h1> ";
            var html = Mustache.to_html(template, val);
            $('.quest').html(html);
        });
      });


        ("#result").html(data);
        logStatus(textStatus);
        });

  $.getJSON(urljquest, function(json) {
      alert(urljquest);
      //dato= jquery.parseJSON(data);
      $.each(json, function(key,val) {
        // var fullHtml;
        alert(question);
        $("#templates2").load("templates/t-preg-resolv.html",function(){
            // $('#template3').each(function() {
            //     fullHtml += $(this).html();
            // });
            var template = $('#template3').html();
            //var template = "<h1>{{name}}</h1> ";
            var html = Mustache.to_html(template, val);
            $('.quest').html(html);
        });
      });

    });

});

});