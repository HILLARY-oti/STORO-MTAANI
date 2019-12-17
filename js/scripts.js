$(document).ready(function(){
  $("#song").click(function(){
    $("#songs").slideDown();
  });
})
$(document).ready(function () {
  $("#close").click(function () {
    $("#songs").slideUp();
  });
})
$(document).ready(function(){
  $("#image").click(function(){
    $("#images").slideDown();
  });
});
$(document).ready(function(){
  $("#funga").click(function(){
    $("#images").slideUp();
  });
});