$(document).ready(function(){
  $.ajax({
     type: 'GET',
     url: ' http://localhost:8080/api/items',
     success: function(data) {
       for (var item in data) {
         $("#list").append("<tr><td>" + data[item].todo  + "</td><td>" + data[item].when + "</td></tr>");
       }
     }
   });
});