// JavaScript source code

//let is local
//var is gloabl



var Letter = /^[a-z]*$/;      //all letters a-z (global to be accessed by both functuons) 


function Password_Option1(Pass_Split) {

    let check_Sum = 0;   //little letter initiator 

    if (Letter.test(Pass_Split[0])) {       //checks if the piece of data is in Letter variable
        Pass_Split[0] = Pass_Split[0].toUpperCase();
    }

    for (let i = 0; i < Pass_Split.length; i++) {


        if (check_Sum == 1 && Letter.test(Pass_Split[i])) {
            //if previous string was a space and this time it is a letter
            Pass_Split[i] = Pass_Split[i].toUpperCase();


            check_Sum = 0;
        }

        else if (Pass_Split[i] == " ") {    //if space make it _
            Pass_Split[i] = "_";
            console.log(Pass_Split[i]);
            check_Sum = 1;
        }
       
    }
    alert(Pass_Split);

    Pass_Split.toString();

    return Pass_Split.join("");
}


function Password_Option2(Pass_Split) {


    // i=! L=1 O=0 E=3 A=@ b=6  S=$
    var Special_Letters = /^[ILOEABS]*$/;
    

    var Special_Letters_List = ["I", "L", "O", "E", "A", "B", "S"];
    var Special_Characters_List = ["!", "1", "0", "3", "@", "6", "$"];
    let check_Sum = 0;   //little letter initiator 

    if (Letter.test(Pass_Split[0])) {       //checks if the piece of data is in Letter variable
        Pass_Split[0] = Pass_Split[0].toUpperCase();
    }

    for (let i = 0; i < Pass_Split.length; i++) {


        if (check_Sum == 1 && Letter.test(Pass_Split[i])) {
            //if previous string was a space and this time it is a letter
            Pass_Split[i] = Pass_Split[i].toUpperCase();


            check_Sum = 0;
        }

        else if (Pass_Split[i] == " ") {    //if space make it _
            Pass_Split[i] = "_";
            console.log(Pass_Split[i]);
            check_Sum = 1;
        }

        if (Special_Letters.test(Pass_Split[i].toUpperCase())) {   //test if letter is to be changed for soemthing
            for (let y = 0; y < Special_Letters_List.length; y++) {
                if (Pass_Split[i].toUpperCase() == Special_Letters_List[y]) {
                    Pass_Split[i] = Special_Characters_List[y];
                }
            }
        }


    }
    alert(Pass_Split);

    Pass_Split.toString();

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

function Memorable_Button() {

    const fs = require("fs");       //importing fs

    const Website_Name = document.getElementById("Website_Name");   //address is stored

    var Website_String = Website_Name.value.toString(); //converted

    const Memorable_Data = document.getElementById("Memorable_Data");   //address is stored

    var Memorable_String = Memorable_Data.value.toString();


    if (Website_String.length != 0 && Memorable_String.length != 0) {       //both need to have data

        const User_Data = {             //creating an object to save
            Website: Website_String,
            Memorable: Memorable_String,
        }

        const User_Data_JSON = JSON.stringify(User_Data);  //turn to json
        alert(User_Data_JSON);


                //write to file
        fs.write("MemorableData.json", User_Data_JSON, (error) => {
            if (error) {
                console.log("Failed to save Memorable to MemorableData.json");

                throw error;
            }
            console.log("Data Saved :)")
        });


    }



}