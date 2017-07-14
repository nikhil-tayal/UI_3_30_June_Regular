var song_obj = {
    "id" : 0,
    "song_list" : [],

    add_songs : function(song_name,singer_name,movie_name){
        this.id++;
        var obj = new Song(this.id,song_name,singer_name,movie_name);
        this.song_list.push(obj);
        console.log(this.song_list)
    }

}