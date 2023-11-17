let apiKey = "e55171de8d3da1084e5f5aa7654d69f7";

let qs = location.search;
let qsobj = new URLSearchParams (qs)
let busqueda=qsobj.get("busqueda")
console.log(busqueda);
let url=`https://api.themoviedb.org/3/search/movie?query=${busqueda}&include_adult=false&language=en-US&page=1?api_key=${apiKey}`

let resu = document.querySelector ("#resulta")


fetch(url)
.then(function(res){
    return res.json();
})
.then(function(data){
    console.log(data);
})

.catch()
