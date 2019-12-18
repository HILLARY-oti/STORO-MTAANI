$(document).ready(function(){
  $("#trailer").click(function(){
    $(".iframe").fadeIn()
    $(".description").hide()
  })
  $("#Characters").click(function() {
    $(".row").show()
    $(".description").hide()
    $(".iframe").hide()
  })
  $("#esco").click(function() {
    $("#escop").slideDown()
  })
  $("#johnny").click(function() {
    $("#johnnyp").slideDown()
  })
  $("#jonnie").click(function() {
    $("#jonniep").slideDown()
  })
  $("#kate").click(function() {
    $("#katep").slideDown()
  })
  $("#becky").click(function() {
    $("#beckyp").slideDown()
  })
})
