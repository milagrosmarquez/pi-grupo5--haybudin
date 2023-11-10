
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id_serie = qsObj.get("idPelicula");

id_serie = 2;

let acaValaAPIkey = "e55171de8d3da1084e5f5aa7654d69f7";
let url = `https://api.themoviedb.org/3/tv/${id_serie}?api_key=${acaValaAPIkey}`
let imagenSeries = document.querySelector(".floricienta");

fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
    let miData = data.result;
    let contenido = "";

    for (let i=0; i<5; i ++){
        console.log(miData[i]);
  }

  let imagenApi = "nombre.png";
  imagenSeries.style.backgroundImage = `URL(${imagenApi})`

  imagenSeries.innerHTML = contenido; 
})
.catch(function(err){
    console.log(err);
})
