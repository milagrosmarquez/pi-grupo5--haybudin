let acaVaLaAPIKey = "e55171de8d3da1084e5f5aa7654d69f7";

let urlPelis = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`;
let urlSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`;

let generosPelis = document.querySelector("#generosPelis");
let generosSeries = document.querySelector("#generosSeries");

/* Fetch de Generos de pelis  ........... */
fetch(urlPelis)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    let miDataPelis = data.genres;
    let contenido = "";

    console.log(miDataPelis);
    for (let i = 0; i < 4; i++) {
        contenido += `  <li class="listgen"> <a class="tipos" href="./genero.html?id=${miDataPelis[i].id}">${miDataPelis[i].name}</a></li>
        ` 
    }
    generosPelis.innerHTML = contenido;
})
.catch(function (error) {
    console.log(error);
});

/* Fetch de Generos de series */
fetch(urlSeries)
.then(function (res) {
    return res.json();
})
.then(function (data) {
    let miDataSeries = data.genres;
    let contenido = "";

    console.log(miDataSeries);
    for (let i = 0; i < 4; i++) {
        contenido += `  <li class="listgen"> <a class="tipos" href="./genero.html?id=${miDataSeries[i].id}">${miDataSeries[i].name}</a></li> ` 
    }
    generosSeries.innerHTML = contenido;
})
.catch(function (error) {
    console.log(error);
});

