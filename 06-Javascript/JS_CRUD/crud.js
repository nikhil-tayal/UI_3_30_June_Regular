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
    li.innerHTML = song_name.value + " " + singer_name.value + " " +
        movie_name.value;
    li.appendChild(img);
    ul.appendChild(li);
    li.addEventListener("click",selected);

}

function selected(){
    event.srcElement.classList.toggle("selected");
}