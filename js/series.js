
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("idPelicula");

id_serie = 2;

let acaValaAPIkey = "e55171de8d3da1084e5f5aa7654d69f7";
let url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaValaAPIkey}`
let imagenSeries = document.querySelector(".floricienta");
let listaflor = document.querySelector(".listaflor");

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
    let contenido = "";

  let imagenApi = data.poster_path ;
  imagenSeries.style.backgroundImage = `URL(https://image.tmdb.org/t/p/w500/${imagenApi})`

  let generos = "";
  for (let index = 0; index < data.genres.length; index++) {
    generos += `<a href="./genero.html!id=${data.genres[index].id}">${data.genres[index].name}</a>`
}

    listaflor.innerHTML =` <h1>Floricienta</h1>
                                <li> ★★★★★</li>
                                <li>${data.last_air_date}</li>
                                <li>${data.number_of_seasons} temporadas</li>
                                <li>${generos}</li>
                                <li><button class="añadirfav">Agregar a favoritos</button></li>`
})
.catch(function(err){
    console.log(err);
})




