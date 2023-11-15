let apiKey = "e55171de8d3da1084e5f5aa7654d69f7";

let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
let peliculasIn = document.querySelector("#peliculasIn")

/* peliculas */
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
    let miData = data.results;
    let contenido = "";
    for (let i = 0; i < 5; i++) {
       console.log(miData[i]);
       contenido += ` 
            
                <a class="ima" href="./peliculas.html?id=${miData[i].id}">
                <img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}"></a>
                <ul class = "tyf">
                    <li>${miData[i].title}</li>
                    <li> Fecha de estreno:${miData[i].release_date}</li>
                </ul>
        `   
    }
    peliculasIn.innerHTML = contenido
})
.catch(function(error){
    console.log(error);

})

/* series  */

let urlSeries = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
let seriesIn = document.querySelector("#seriesIn")

fetch(urlSeries)
.then(function(res){
    return res.json();
})
.then(function(data){
    let miData = data.results;
    let contenido = "";
    for (let i = 0; i < 5; i++) {
       console.log(miData[i]);
       contenido +=  ` 
                        <a class="ima" href="./series.html?id=${miData[i].id}">
                        <img  src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path} "></a>
                        <ul class = "tyf">
                            <li>${miData[i].original_name}</li>
                            <li> Fecha de estreno:${miData[i].first_air_date}</li>
                        </ul>
                    `
       
    }
    seriesIn.innerHTML = contenido
})
.catch(function(error){
    console.log(error);
})


/* populares */

let urlPopulares = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
let popularesIn = document.querySelector("#popularesIn")

fetch(urlPopulares)
.then(function(res){
    return res.json();
})
.then(function(data){
    let miData = data.results;
    let contenido = "";
    for (let i = 0; i < 5; i++) {
       console.log(miData[i]);
       contenido +=  `
                            <a class="ima" href="./series.html?id=${miData[i].id}">
                            <img  src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}"></a>
                            <ul class = "tyf">
                                <li>${miData[i].original_title}</li>
                                <li> Fecha de estreno:${miData[i].release_date}</li>
                            </ul>
                    `          
    }
    popularesIn.innerHTML = contenido
})
.catch(function(error){
    console.log(error);
})
