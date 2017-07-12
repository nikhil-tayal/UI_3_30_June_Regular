window.addEventListener("load",init);

var move_x = 150;

function init(){
    screen = document.getElementById("screen");
    screen_bg = document.getElementById("background");
    player = document.getElementById("player");
    screen.addEventListener("keydown",check_key);
}

function check_key(event){
    key = event.keyCode;
    if (key == 39){
        /*
        player.innerHTML = '<img src="../../images/hulk5-18463.gif" alt="image"/>'*/
        move_player()
    }
    else if(key == 32) {
        player.innerHTML = '<img src="hulksmash2.gif" alt="image"/>'
        setTimeout(function(){
            player.innerHTML = '<img src="../../images/hulk5-18463.gif" alt="image"/>'
        },3000)
    }
}

function move_player(){
    screen_bg.style.transform = "translateX"+'('+-move_x+"px"+')';
    move_x += 130;
}