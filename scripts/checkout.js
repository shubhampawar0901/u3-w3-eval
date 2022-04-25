// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amount = JSON.parse(localStorage.getItem("amount"));
let seats = document.getElementById("number_of_seats");

let displayAmount = document.getElementById("wallet")

displayAmount.innerText = amount;

let movieGrid = document.getElementById("movie");

let data = JSON.parse(localStorage.getItem("movie"))
console.log(data[0])

function displayMovie(data){
data.map((el)=>{
  console.log(el)
  let card = document.createElement("div");
  card.id = "card";
  let img = document.createElement("img");
  img.id = "img";
  img.src = el.Poster;
  let title = document.createElement("p");
  title.id = "title";
  title.innerText = el.Title;
  card.append(img,title);
  movieGrid.append(card)
})
}

displayMovie(data)



function checkcon(){
  let x = Number(seats.value)*100
  if(x>amount){
    alert("Insufficient Balance!")
  }
  else{
    alert("Booking successfull!")
  }
}