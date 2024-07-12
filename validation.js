//to display error msg
function printError(elemId,hintMsg){
    document.getElementById(elemId).innerHTML=hintMsg;
}

//validation form

function validateForm(){

    var name=document.contactForm.name.value;
    var email=document.contactForm.email.value;
    var mobile=document.contactForm.mobile.value;
    var country=document.contactForm.country.value;
    var gender=document.contactForm.gender.value;
    var hobbies=[];
    var checkboxes=document.getElementsByName("hobbies[]");

    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            hobbies.push(checkboxes[i].value);
        }
    }

    var nameerror = emailerror = mobileerror = countryerror = gendererror = true;

    if(name == ""){  //mandatory logic check

        printError("nameerror","Please enter your name");
    }
    else {    //type of value check
        var regex=/^[a-zA-Z\s]+$/;
        if(regex.test(name)===false){
            printError("nameerror","Please enter valid name");

        }
        else{
            printError("nameerror","");
            nameerror=false;
        }
    }

    if(email==""){
        printError("emailerror","Please enter Email, it is mandatory");
    }
    else{
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailerror","Please enter valid email ID");
        }
        else{
            printError("emailerror","");
            emailerror=false;
        }
    }

    if(mobile==""){
        printError("mobileerror","Please enter Mobile Number, It is Mandatory");

    }
    else{
        var regex=/^[1-9]\d{9}$/;

        if(regex.test(mobile)===false){
            printError("mobileerror","Please enter valid Mobile Number");
        }
        else{
            printError("mobileerror","");
            mobileerror=false;
        }
    }

    if(country=="Select"){
        printError("countryerror","Please enter value,it is mandatory");

    }
    else{
        printError("countryerror","");
        countryerror=false;
    }

    if(gender==""){
        printError("gendererror","Please select Gender Value:");
    }
    else{
        printError("gendererror","");
        gendererror=false;
    }

if((nameerror || emailerror || mobileerror || countryerror || gendererror)==true){
    return false;
}
else{
    var preview="You have entered followong details:\n" + 
    "Full Name:" + name +"\n"+ 
    "Email ID:" + email + "\n"+
    "Mobile Number:" + mobile + "\n"+ 
    "Country:" + country + "\n"+
    "Gender:" + gender + "\n";
    if(hobbies.length){
        preview += "Hobbies:" + hobbies.join(", ");
    } 

    alert(preview);
}
};