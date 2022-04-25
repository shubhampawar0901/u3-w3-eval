// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let amount = JSON.parse(localStorage.getItem("amount"));

let displayAmount = document.getElementById("wallet")

displayAmount.innerText = amount;

let movieGrid = document.getElementById("movies")

async function searchMovies(){
  try{
    const movies = document.getElementById("search").value;
    url = `http://www.omdbapi.com/?apikey=c23bb95b&s=${movies}`;

    let res = await fetch(url);
    let data = await res.json();
    let movie = data.Search;
    return movie;
  }catch(err){
    console.log("error",err)
  }
}

function displayMovie(data){
  movieGrid.innerHTML = null;
data.map((el)=>{
  let card = document.createElement("div");
  card.id = "card";
  let img = document.createElement("img");
  img.id = "img";
  img.src = el.Poster;
  let title = document.createElement("p");
  title.id = "title";
  title.innerText = el.Title;
  let button = document.createElement("button");
  button.id = "book_now";
  button.innerText ="Book Now"
  button.addEventListener("click",()=>{
     addMovie(el)
  })
  card.append(img,title,button);
  movieGrid.append(card)
})
}

function addMovie(data){
  let addarr = []
  addarr.push(data);
  localStorage.setItem("movie",JSON.stringify(addarr))
  window.location.href = 'checkout.html'
}

async function main(){
  let data = await searchMovies();
  if(data==undefined){
    movieGrid.innerHTML = null;
    return false
  }
  displayMovie(data)
}

let id
function debounce(func,delay){
  if(id){
    clearTimeout(id)
  }
  id = setTimeout(() => {
    func();
  }, delay);
}


