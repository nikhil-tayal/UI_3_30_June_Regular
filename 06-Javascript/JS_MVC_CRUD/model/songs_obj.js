var song_obj = {
    "id" : 0,
    "song_list" : [],

    add_songs : function(song_name,singer_name,movie_name){
        this.id++;
        var obj = new Song(this.id,song_name,singer_name,movie_name);
        this.song_list.push(obj);
        /*console.log(this.song_list)*/
    },

    toggle_song : function(id){
        var new_song = this.song_list.filter(function(obj){
            return obj.id == id;
        })
        /*console.log(new_song);*/
        new_song[0].selected = !new_song[0].selected;
        console.log(new_song);
    },

    delete_song : function(){
        this.song_list = this.song_list.filter(function(obj){
            return obj.selected == false;
        })
    },

    sort_song : function(){
        return this.song_list.sort(function(obj){
            return obj.name;
        })
    }

}