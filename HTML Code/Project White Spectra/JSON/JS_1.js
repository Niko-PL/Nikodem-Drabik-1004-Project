// JavaScript source code

//let is local
//var is gloabl

var Letter = /^[a-z]+$/;      //all letters a-z


function Password_Option1(Pass_Split) {

    let check_Sum = 0;   //little initiator 

    if (Letter.test(Pass_Split[0])) {
        Pass_Split[0] = Pass_Split[0].toUpperCase();
    }

    for (let i = 0; i < Pass_Split.length; i++) {


        if (check_Sum == 1 && Letter.test(Pass_Split[i])) {
            //if previous string was a space and this time it is a letter
            Pass_Split[i] = Pass_Split[i].toUpperCase();


            check_Sum = 0 
        }

        else if (Pass_Split[i] == " ") {
            Pass_Split[i] = "_";
            console.log(Pass_Split[i]);
            check_Sum = 1;
        }
       
    }
    alert(Pass_Split);

    Pass_Split.toString()

    return Pass_Split.join("")
}

function Password_Button() {

    var Option = document.getElementById("User_Encryption");
    var Option = Option.value;

    const User_Input = document.getElementById("User_Input");   //address is stored

    var String_Input = User_Input.value.toString();

    var Pass_Split = String_Input.split("");        //split user input into array to do sting manipulation

    if (Option == 1) {
        var Password_Encrypt = Password_Option1(Pass_Split);
    }
    else if (Option == 2) {
        var Password_Encrypt = Password_Option2(Pass_Split);
    }

    document.getElementById("User_Output").innerHTML = Password_Encrypt;   //address is sent out





}

