window.addEventListener("load",init)

function init(){
    song_name = document.getElementById("song_name");
    singer_name = document.getElementById("singer_name");
    movie_name = document.getElementById("movie_name");
    document.getElementById("add").addEventListener("click",add_song);
}

function add_song(){
    ul = document.getElementById("item_list");
    li = document.createElement('li');
    img = document.createElement('img');
    img.setAttribute('src','garbage.png');

    song_obj.add_songs(song_name.value, singer_name.value, movie_name.value);

    li.innerHTML = song_obj.id + " " + song_name.value + " " +
                    singer_name.value + " " + movie_name.value;
    li.appendChild(img);
    ul.appendChild(li);
    li.addEventListener("click",selected);
    clear_fields()

}

function selected(){
    event.srcElement.classList.toggle("selected");
    var current_id = event.srcElement.innerHTML.split(" ")[0];
    console.log(current_id);
}

function clear_fields(){
    song_name.value = "";
    singer_name.value = "";
    movie_name.value = "";
}