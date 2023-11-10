let acaVaLaAPIKey = "e55171de8d3da1084e5f5aa7654d69f7";

let urlDetallePelis =`https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}`;
let urlDetalleSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}`;

let generoJS = document.querySelector("#generoJS");
let generoSeriesJS = document.querySelector("#generoSeriesJS");

/* detalle de genero pelis */
fetch(urlDetallePelis)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    let miData = data.results;
    let contenido = ""

    console.log(miData);
    for (let i = 0; i < 7; i++) {
        contenido += `<a class="ima" href="./peliculas.html?id=${miData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="Jefe en pañales"></a>`
        
    }
    generoJS.innerHTML = contenido;
})
.catch(function (error) {
    console.log(error);
});

/* detalle de genero series */
fetch(urlDetalleSeries)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    let miData = data.results;
    let contenido = ""

    console.log(miData);
    for (let i = 0; i < 7; i++) {
        contenido += `<a class="ima" href="./peliculas.html?id=${miData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}" alt="Jefe en pañales"></a>`
        
    }
    generoSeriesJS.innerHTML = contenido;
})
.catch(function (error) {
    console.log(error);
});

