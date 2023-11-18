let apiKey = "e55171de8d3da1084e5f5aa7654d69f7";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_pelicula = qsObj.get("id");

let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${apiKey}`
let imagenPeliculas = document.querySelector(".aladdin");
let parrafo = document.querySelector(".parrafo")
let nombre = document.querySelector("#nombre")
let fecha = document.querySelector("#fecha")
let duracion = document.querySelector("#duracion")
let ratingp = document.querySelector("#ratingp")

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){

   console.log(data);
    
    let contenido = "";
let imagena = data.poster_path;
imagenPeliculas.style.backgroundImage = `URL(https://image.tmdb.org/t/p/w500/${imagena})`

let generos = "";
  for (let index = 0; index < data.genres.length; index++) {
    console.log(data.genres[index].name);
     generos += `<a id="genPeli" href="./genero.html!id=${data.genres[index].id}">${data.genres[index].name}</a>`
}

nombre.innerHTML= `<h1 id="nombre">${data.title}</h1>`
ratingp.innerHTML= `<li id="ratingp">Rating: ${data.popularity}</li>`
fecha.innerHTML= `<li id="fecha">${data.release_date}</li>`
duracion.innerHTML= `<li id="duracion">${data.runtime} minutos</li>`
gene.innerHTML= `<li id="gene">${generos}</li>`
parrafo.innerHTML  = `<p class="parrafo">${data.overview}</p> `

})
.catch(function(error){
    console.log(error);
})

/* boton ver recomendaciones */
let boton = document.querySelector("#botonRecom");
let urlRecom = `https://api.themoviedb.org/3/movie/${id_pelicula}/recommendations?api_key=${apiKey}`;

boton.addEventListener("click", function(){

    fetch(urlRecom)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        let contenido = "";
        let miData = data.results;
        for (let i = 0; i < 3; i++) {
            contenido += `<a href=""><img class="imgRecom" src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt=""></a>`
            
            
        }
        listaRecom.innerHTML = contenido
    })
    .catch(function (error) {
        console.log(error);
    })
    
    
})