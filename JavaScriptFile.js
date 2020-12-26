// Scrolling function 
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("mainNav");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function validateContactForm(){
    var valid = true;

    var userFullName = document.getElementById("fullname");
    if(userFullName == ""){
        document.getElementById("name").style.color = "red";
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

