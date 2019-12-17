var myIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}
x[myIndex-1].style.display = "block";
setTimeout(carousel, 2000); // Change image every 2 seconds
}

$(document).ready(function(){
  $("#empress").hover(function(){
    $("#empressp").slideDown()
  },function(){
    $("#empressp").slideUp()
  });
  $("#monica").hover(function(){
    $("#monicap").slideDown()
  },function(){
    $("#monicap").slideUp()
  });
  $("#njoro").hover(function(){
    $("#njorop").slideDown()
  },function(){
    $("#njorop").slideUp()
  });
  $("#selina").hover(function(){
    $("#selinap").slideDown()
  },function(){
    $("#selinap").slideUp()
  });
  $("#sj").hover(function(){
    $("#sjp").slideDown()
  },function(){
    $("#sjp").slideUp()
  });
  $("#titles").click(function() {
    $(".row").show()
  })
  $("#hamburger").click(function(){
    $(".topnav").fadeIn();
  });

});
