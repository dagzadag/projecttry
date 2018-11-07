$(document).ready(function() {


    var $header = $('header');
    var $stick = $header.before($header.clone().addClass("stick"));
    $(window).on("scroll", function(){
      var scroll = $(window).scrollTop();
      $('body').toggleClass("scroll" , (scroll > 250));
    });
    
});
