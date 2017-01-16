var country = ["Argentina", "India", "Nepal", "Egypt"];

$(document).ready(function() {

   var options = '';
   for (var i = 0; i < country.length; i++) {
       options += '<option value="'+ country[i] + '">' + country[i] + '</option>';
       }
       $("#country-type").append(options);  

   $("select").change(function() {

       var country = $("#country-type").val();
     

       if (country == "Argentina"){
           $('.banner').attr('class','argen');
       } else if (country == "India"){
           $('.banner').attr('class','indi');
       } else if (country == "Nepal"){
           $('.banner').attr('class','nep');
       } else if (country == "Egypt"){
           $('.banner').attr('class','egyp');
       }
   });
});