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
        document.getElementById("fullname").style.color = "red";
    }
}