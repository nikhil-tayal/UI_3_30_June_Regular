window.addEventListener("load",init)

function init(){
    song_name = document.getElementById("song_name");
    singer_name = document.getElementById("singer_name");
    movie_name = document.getElementById("movie_name");
    document.getElementById("add").addEventListener("click",add_song);
    document.getElementById("del").addEventListener("click",delete_song);
    document.getElementById("sort").addEventListener("click",sort_song);
    document.getElementById("save").addEventListener("click",save_song);
    document.getElementById("load").addEventListener("click",load_song);
}

function save_song(){
    if(window.localStorage){
        var json = JSON.stringify(song_obj.song_list);
        /*console.log(json);*/
        localStorage.setItem('song_data',json);
    }
    else{
        console.log("Not Supported");
    }
}

function load_song(){
    if(window.localStorage){
        var json = JSON.parse(localStorage.song_data);
        /*console.log(json);*/
        song_obj.song_list = json;
        print_song()
    }
    else{
        console.log("Not Supported");
    }
}

function add_song(){
    var ul = document.getElementById("item_list");
    var li = document.createElement('li');
    var img = document.createElement('img');
    img.setAttribute('src','garbage.png');

    song_obj.add_songs(song_name.value, singer_name.value, movie_name.value);

    li.innerHTML = song_obj.id + " " + song_name.value + " " +
                    singer_name.value + " " + movie_name.value;
    li.appendChild(img);
    ul.appendChild(li);
    li.addEventListener("click",selected);
    /*clear_fields()*/

}

function selected(){
    event.srcElement.classList.toggle("selected");
    var current_id = event.srcElement.innerHTML.split(" ")[0];
    /*console.log(current_id);*/
    song_obj.toggle_song(current_id);
}

function delete_song(){
    song_obj.delete_song()
    print_song()
}

function sort_song(){
    song_obj.sort_song()
    print_song()
}

function print_song(){
    var ul = document.getElementById("item_list");
    ul.innerHTML = "";

    song_obj.song_list.forEach(function(obj){
        var li = document.createElement("li");
        var img = document.createElement('img');
        img.setAttribute('src','garbage.png');

        song_obj.add_songs(song_name.value, singer_name.value, movie_name.value);

        li.innerHTML = obj.id + " " + obj.song_name + " " + obj.singer_name + " " + obj.movie_name;
        li.appendChild(img);
        ul.appendChild(li);
        li.addEventListener("click",selected);
    })
}


/*
function clear_fields(){
    song_name.value = "";
    singer_name.value = "";
    movie_name.value = "";
}*/
