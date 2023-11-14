let acaVaLaAPIKey = "e55171de8d3da1084e5f5aa7654d69f7";

let queryS = location.search;
let qsObj = new URLSearchParams(queryS)
let busq = qsObj.get("Busqueda");

let urlPeliculasB = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${busqueda}`;
let urlSeriesB = `https://api.themoviedb.org/3/search/tv?api_key=${acaVaLaAPIKey}&query=${busqueda}`;

console.log(urlPeliculasB);
console.log(urlSeriesB);


