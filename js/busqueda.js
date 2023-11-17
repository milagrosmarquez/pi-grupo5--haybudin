let apiKey = "e55171de8d3da1084e5f5aa7654d69f7";

let qs = location.search;
let qsobj = new URLSearchParams (qs)
let busqueda=qsobj.get("busqueda")
console.log(busqueda);
let url=`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${busqueda}`
let pelis = document.querySelector(".pelis")




fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
    let miData = data.results;
    let contenido = "";
    for (let i = 0; i < 8; i++) {
        contenido += `<a class="ima" href="./peliculas.html?id=${miData[i].id}"><img src="https://image.tmdb.org/t/p/w500/${miData[i].poster_path}"  alt=""></a>`
        
        
    }
    pelis.innerHTML = contenido
  document.querySelector("#titulos").innerText = `Resultados para: ${busqueda}`
    


    
    })

.catch(function(error) {
    console.log(error);
})
