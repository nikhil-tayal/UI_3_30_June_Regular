/*window.addEventListener("load",function(){
    document.getElementById("button_1").addEventListener("click",function(){
        document.getElementById("heading").innerHTML = "Content coming from JS"
        a = document.getElementById("box_1").value;
        document.getElementById("user").innerHTML = a;
    })
})*/


/*alert("JS Executed....")*/

/*
function change_content(){
    document.getElementById("heading").innerHTML = "Content coming from JS"
    a = document.getElementById("box_1").value;
    document.getElementById("user").innerHTML = a;
}*/


window.addEventListener("load",init)

function init(){
    a = document.getElementById("box_1");
    document.getElementById("button_1").addEventListener("click",change_content)
}

function change_content(){
    document.getElementById("heading").innerHTML = "Content coming from JS"
    console.log(a.value);
    document.getElementById("user").innerHTML = a.value;
}