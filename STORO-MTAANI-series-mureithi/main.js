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


function rating(d, t, e, m){

// Async Rating-Widget initialization.
window.RW_Async_Init = function(){

    RW.init({
        huid: "448334",
        uid: "e9f53ab8f74a9b9a89846988dd54e2ea",
        options: { "style": "oxygen" }
    });
    RW.render();
};
    // Append Rating-Widget JavaScript library.
var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
    l = d.location, ck = "Y" + t.getFullYear() +
    "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
    f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
    a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
if (d.getElementById(id)) return;
rw = d.createElement(e);
rw.id = id; rw.async = true; rw.type = "text/javascript";
rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
s.parentNode.insertBefore(rw, s);
}(document, new Date(), "script", "rating-widget.com/");

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
  // fadeIn navbar and fadeOut
  $("#hamburger").click(function(){
    $(".topnav").fadeIn();
  });
  $("#close").click(function(){
    $(".topnav").fadeOut();
  });


});
