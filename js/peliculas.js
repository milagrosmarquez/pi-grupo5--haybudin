let apiKey = "e55171de8d3da1084e5f5aa7654d69f7";

let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_pelicula = qsObj.get("id");

let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${apiKey}`
let imagenPeliculas = document.querySelector(".aladdin");
let listaladdin = document.querySelector(".listaladdin");
let parrafo = document.querySelector(".parrafo")

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
     generos += `<a href="./genero.html!id=${data.genres[index].id}>${data.genres[index].name}</a>`
}

 listaladdin.innerHTML = `
        <h1>${data.title}</h1>
           <li> ★★★★★ </li>
           <li>${data.release_date}</li>
           <li>${data.runtime} minutos</li>
           <li>${generos}</li>
           <li><button class="añadirfav">Agregar a favoritos</button></li>`
 parrafo.innerHTML  = `<p class="parrafo">${data.overview}</p>`

})
.catch(function(error){
    console.log(error);
})