function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    c = document.getElementById("box_3");

    span = document.getElementsByTagName("span");

    validate();
    check_strength();
    conf_pwd();

    event.preventDefault();

}

function validate(){
    a = document.getElementById("box_1");
    if(a.value == ""){
        a.className = "red"
        span[0].innerHTML = "Cannot leave this field blank";
    }
    else {
        a.className = ""
        span[0].innerHTML = ""
    }
}

function check_strength(){
    if(b.value.length == 0){
        span[1].innerHTML = "Fill this first";
        span[1].className = ""
    }
    else if(b.value.length > 0 && b.value.length <= 4){
        span[1].innerHTML = "Weak";
        span[1].className = 'weak';
    }
    else if(b.value.length > 4 && b.value.length <= 8){
        span[1].innerHTML = "Average";
        span[1].className = 'average';
    }
    else {
        span[1].innerHTML = "Strong";
        span[1].className = 'strong';
    }
}

function conf_pwd(){
    if (b.value == c.value){
        span[2].innerHTML = "Matched";
    }
    else {
        span[2].innerHTML = "Password Do Not Match";
    }
}
