const date = new Date();
var year = date.getFullYear();
$("#year").text(year);

$(".nav-button").click(function(){
    $(".nav-ul-m").slideToggle();
});