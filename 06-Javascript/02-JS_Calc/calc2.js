window.addEventListener("load",init);

function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    span = document.getElementById("result");

    buttons = document.getElementsByTagName("button");

    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click",calculator);
    }

}

function calculator(){
    /*console.log("Executed")*/
    opr = event.srcElement.innerHTML;
    /*console.log("Operation is ",opr);*/
    var expression = a.value + opr + b.value;
    span.innerHTML = eval(expression);
}
