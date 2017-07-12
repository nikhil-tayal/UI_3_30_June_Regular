window.addEventListener("load",init);

var result = 0;
function init(){
    a = document.getElementById("box_1");
    b = document.getElementById("box_2");
    span = document.getElementById("result");
    document.getElementById("add").addEventListener("click",add);
    document.getElementById("sub").addEventListener("click",sub);
    document.getElementById("mul").addEventListener("click",mul);
    document.getElementById("div").addEventListener("click",div);
}

function add(){
    result = parseInt(a.value) + parseInt(b.value);
    span.innerHTML = result;
}

function sub(){
    result = parseInt(a.value) - parseInt(b.value);
    span.innerHTML = result;
}

function mul(){
    result = parseInt(a.value) * parseInt(b.value);
    span.innerHTML = result;
}

function div(){
    result = parseInt(a.value) / parseInt(b.value);
    span.innerHTML = result;
}
