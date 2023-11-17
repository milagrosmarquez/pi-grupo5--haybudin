
let acaValaAPIkey = "e55171de8d3da1084e5f5aa7654d69f7";
let url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaValaAPIkey}`
let url2 = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${acaValaAPIkey}`

let pelifavorito =  document.querySelector(".pelisfavoritos")
let seriefavorito =  document.querySelector(".seriefavoritos")

let qs2 = location.search;
let qsObj2 = new URLSearchParams(qs2);
let id_pelicula = qsObj.get("id");

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("id");

/*peliculas*/

fetch(url)
.then(function(responsive){
    return responsive.json();
})
.then(function(data){
    console.log(data);

      pelifavorito.innerHTML =  ` <div class="pelisfavoritos">
        <a class="ima" href="./peliculas.html"><img src="./img/aladdin.jfif" alt="Aladdin"></a>
        <a class="ima" href="./peliculas.html"><img src="./img/mivillano.jfif" alt="Mi villano favorito"></a>
        </div>`
})
.catch(function(error){
    console.log(error);
})

/*series*/

fetch(url2)
.then(function(responsive){
    return responsive.json();
})
.then(function(data){
    console.log(data);

      seriefavorito.innerHTML = `<div class="seriefavoritos">
        <a class="ima" href="./series.html"><img  src="./img/violetta.jfif" alt="Violetta"></a>
        <a class="ima" href="./series.html"><img  src="./img/unshowmas.jfif" alt="Un Show Más"></a>
        </div>`
})
.catch(function(error){
    console.log(error);
})
