// JavaScript source code

function Password_Option1(Pass_Split) {

    for (let i = 0; i < Pass_Split.length; i++) {

        if (Pass_Split[i] == " ") {
            Pass_Split[i] = "_"
            console.log(Pass_Split[i])
        }

    }
    alert(Pass_Split);

    Pass_Split.toString()

    return Pass_Split.join("")
}

function Password_Button() {

    const User_Input = document.getElementById("User_Input");   //address is stored

    var String_Input = User_Input.value.toString();

    var Pass_Split = String_Input.split("");        //split user input into array to do sting manipulation

    var Password_Encrypt = Password_Option1(Pass_Split);

    document.getElementById("User_Output").innerHTML = Password_Encrypt;   //address is sent out
    


    //alert(Pass_Split[0]);
}

/*
window.onscroll = function () { scroll_navbar() };     //when user scrolls.

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scroll_navbar() {
    if (window.pageYOffset > sticky) {
        sidebox.classList.add("sticky");
    } else {
        sidebox.classList.remove("sticky");
    }
}
*/