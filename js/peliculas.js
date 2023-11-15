let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_pelicula = qsObj.get("id_pelicula");
 // id_pelicula = 575264

let apiKey = "e55171de8d3da1084e5f5aa7654d69f7";

let url = `https://api.themoviedb.org/3/movie/${id_pelicula}?api_key=${apiKey}`
let imagenPeliculas = document.querySelector(".aladdin");
let listaladdin = document.querySelector(".listaladdin");

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){

    console.log(data);
    
    let contenido = "";
let imagena = data.poster_path;
imagenPeliculas.style.backgroundImage = `URL(https://image.tmdb.org/t/p/w500/${imagena})`

 /* for (let i = 0; i < data.genres.length; i++) {
    generos +=` <a href = "./genero.html?id=${data.genres[i].id}">${data.genres[i].name}</a>
    `
} */
   // listaladdin.innerHTML = `
   //         <h1>Aladdin</h1>
     //           <li> ★★★★★ </li>
       ///         <li>1992</li>
          //      <li>1h 30m</li>
            //    <li>Musical/Aventura</li>
              //  <li ><button class="añadirfav">Agregar a favoritos</button></li>`
})

.catch(function(error){
    console.log(error);
})
