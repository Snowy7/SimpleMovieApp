const posters_container = document.getElementById("poster-container")
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let query = urlParams.get("q");
$.ajax({
    url: "https://api.themoviedb.org/3/search/movie?query=" + query + "&api_key=02a636efd59338705dcd4f17c604e71f"
}).then(function(data) {
    console.log(data);
    for(movie of data.results){
        let poster = document.createElement("div");
        poster.className = "poster";
        
        let poster_img = document.createElement("div");
        poster_img.className = "poster__img";
        poster_img.style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + movie.poster_path+"')";
        poster.appendChild(poster_img);
        
        let poster_info = document.createElement("div");
        poster_info.className = "poster__info";
        poster.appendChild(poster_info);

        let poster_title = document.createElement("h1");
        poster_title.className = "poster__title";
        try{
            if (movie == undefined){
                poster_title.innerHTML = movie.name;
            }else{
                poster_title.innerHTML = movie.title;
            }
        }catch{
            poster_title.innerHTML = movie.name;
        }
        poster_info.appendChild(poster_title);

        let poster_text = document.createElement("p");
        poster_text.className = "poster__text";
        poster_text.innerHTML = movie.overview;
        poster_info.appendChild(poster_text);
        
        let btn = document.createElement("a")
        btn.innerHTML = "Find out more";

        poster.appendChild(btn);
        posters_container.appendChild(poster);

    }
    // container.style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + data.results[0].backdrop_path + "')";
    // score.innerHTML = data.results[0].vote_average;
    // desc.innerHTML = data.results[0].overview;
    // try{
    //     if (data.results[0] == undefined){
    //         title.innerHTML = data.results[0].name;
    //     }else{
    //         title.innerHTML = data.results[0].title;
    //     }
    // }catch{
    //     title.innerHTML = data.results[0].name;
    // }
    // let i = 0;
    // this.movies = data.results;
    // for(movie of data.results){
    //     let item = document.createElement("div");
    //     item.className = "item";
    //     let img = document.createElement("img");
    //     img.src = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
    //     item.appendChild(img);
    //     section1.appendChild(item);
    //     movies.push(movie);
    //     img.setAttribute("id", i);
    //     item.setAttribute("data-id", i)
    //     item.addEventListener("click", updateDeatils);
    //     i++;
    // }
});
