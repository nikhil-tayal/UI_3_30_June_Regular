window.addEventListener("load",init);

var move_x = 100;

function init(){
    screen = document.getElementById("screen");
    screen_bg = document.getElementById("background");
    player = document.getElementById("player");
    screen.addEventListener("keydown",check_key);
    screen.addEventListener("keyup",change_image);
    screen.addEventListener("keyup",smash_image);
}

function check_key(event){
    key = event.keyCode;
    if (key == 39){
        /*
        player.innerHTML = '<img src="../../images/hulk5-18463.gif" alt="image"/>'*/
        player.innerHTML = '<img src="../../images/hulk5-18463.gif" alt="image"/>';
        player.style.bottom = '10px';
        move_player()
    }
    else if (key == 37) {
        change_player_direction()
        player.innerHTML = '<img src="../../images/hulk5-18463.gif" alt="image"/>';
    }
    else if(key == 38){
        jump_image()
    }
}

function smash_image(){
if(key == 32) {
        player.innerHTML = '<img src="hulksmash2.gif" alt="image"/>'
        setTimeout(function(){
            player.innerHTML = '<img src="01-img.png" alt="image"/>';
        },2500);
    }
}

function change_image(){
    player.innerHTML = '<img src="01-img.png" alt="image"/>';
    player.style.bottom = '10px';
}

function jump_image(){
    player.innerHTML = '<img src="hulk_jumping.png" alt="image"/>';
    player.style.bottom = '400px';
}


function move_player(){
    player.style.transform = 'rotateY(0deg)';
    screen_bg.style.transform = "translateX"+'('+-move_x+"px"+')';
    move_x += 100;
}

function change_player_direction(){
    player.style.transform = 'rotateY(180deg)';
    screen_bg.style.transform = "translateX"+'('+-move_x+"px"+')';
    move_x -= 100;
}