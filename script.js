let section1 = document.getElementById("section1")
const btn_left = document.getElementById('btn-left'), btn_right = document.getElementById('btn-right');
let wrapper = document.getElementById("wrapper");
let container = document.getElementById("container");
let title = document.getElementById("title");
let score = document.getElementById("score-text");
let desc = document.getElementById("desc");
let movies = [];

btn_left.onclick = function() {
    console.log(section1.scrollLeft + "hhhhh");
    document.getElementById("wrapper").scrollLeft -= 500;
};

btn_right.onclick = function() {
    console.log(section1.scrollLeft + "ggggg");
    document.getElementById("wrapper").scrollLeft += 500;
};

$.ajax({
    url: "https://api.themoviedb.org/3/trending/all/day?api_key=02a636efd59338705dcd4f17c604e71f"
}).then(function(data) {
    console.log(data);

    container.style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + data.results[0].backdrop_path + "')";
    score.innerHTML = data.results[0].vote_average;
    desc.innerHTML = data.results[0].overview;
    try{
        if (data.results[0] == undefined){
            title.innerHTML = data.results[0].name;
        }else{
            title.innerHTML = data.results[0].title;
        }
    }catch{
        title.innerHTML = data.results[0].name;
    }
    let i = 0;
    this.movies = data.results;
    for(movie of data.results){
        let item = document.createElement("div");
        item.className = "item";
        let img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
        item.appendChild(img);
        section1.appendChild(item);
        movies.push(movie);
        img.setAttribute("id", i);
        item.setAttribute("data-id", i)
        item.addEventListener("click", updateDeatils);
        i++;
    }
});

function updateDeatils(id){
    let elm = id.srcElement;
    index = elm.getAttribute("id");
    console.log(movies.length)
    movie = movies[index];
    score.innerHTML = movie.vote_average;
    desc.innerHTML = movie.overview;
    try{
        if (movie.title == undefined){
            title.innerHTML = movie.name;
        }else{
            title.innerHTML = movie.title;
        }
    }catch{
        title.innerHTML = movie.name;
    }
    container.style.backgroundImage = "url('https://image.tmdb.org/t/p/original/" + movie.backdrop_path + "')";
}
