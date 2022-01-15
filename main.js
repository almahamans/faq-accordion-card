function info(id){ 
 var a = document.querySelectorAll("p");
 for (var i = 0; i < a.length; i++) {
    a[i].style.display = "none";
}
var toShow = document.getElementById(id);
toShow.style.display = "block";
}
