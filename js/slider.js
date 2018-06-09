window.alert = function(){};
var defaultCSS = document.getElementById('bootstrap-css');
function changeCSS(css){
    if(css) $('head > link').filter(':first').replaceWith('<link rel="stylesheet" href="'+ css +'" type="text/css" />');
    else $('head > link').filter(':first').replaceWith(defaultCSS);
}
$( document ).ready(function() {
  var iframe_height = parseInt($('html').height());
  window.parent.postMessage( iframe_height, 'https://bootsnipp.com');
});


$(document).ready(function() {
  //Events that reset and restart the timer animation when the slides change
  $("#transition-timer-carousel").on("slide.bs.carousel", function(event) {
      //The animate class gets removed so that it jumps straight back to 0%
      $(".transition-timer-carousel-progress-bar", this)
          .removeClass("animate").css("width", "0%");
  }).on("slid.bs.carousel", function(event) {
      //The slide transition finished, so re-add the animate class so that
      //the timer bar takes time to fill up
      $(".transition-timer-carousel-progress-bar", this)
          .addClass("animate").css("width", "100%");
  });

  //Kick off the initial slide animation when the document is ready
  $(".transition-timer-carousel-progress-bar", "#transition-timer-carousel")
      .css("width", "100%");
});

/*Slide #2*/
$(document).ready(function() {
  //Events that reset and restart the timer animation when the slides change
  $("#transition-timer-carousel2").on("slide.bs.carousel", function(event) {
      //The animate class gets removed so that it jumps straight back to 0%
      $(".transition-timer-carousel-progress-bar2", this)
          .removeClass("animate").css("width", "0%");
  }).on("slid.bs.carousel", function(event) {
      //The slide transition finished, so re-add the animate class so that
      //the timer bar takes time to fill up
      $(".transition-timer-carousel-progress-bar2", this)
          .addClass("animate").css("width", "100%");
  });

  //Kick off the initial slide animation when the document is ready
  $(".transition-timer-carousel-progress-bar2", "#transition-timer-carousel2")
      .css("width", "100%");
});

/*Slide #3*/
$(document).ready(function() {
  //Events that reset and restart the timer animation when the slides change
  $("#transition-timer-carousel3").on("slide.bs.carousel", function(event) {
      //The animate class gets removed so that it jumps straight back to 0%
      $(".transition-timer-carousel-progress-bar3", this)
          .removeClass("animate").css("width", "0%");
  }).on("slid.bs.carousel", function(event) {
      //The slide transition finished, so re-add the animate class so that
      //the timer bar takes time to fill up
      $(".transition-timer-carousel-progress-bar3", this)
          .addClass("animate").css("width", "100%");
  });

  //Kick off the initial slide animation when the document is ready
  $(".transition-timer-carousel-progress-bar3", "#transition-timer-carousel3")
      .css("width", "100%");
});
