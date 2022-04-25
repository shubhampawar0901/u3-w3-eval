// Store the wallet amount to your local storage with key "amount"
let addedAmount = document.getElementById("amount");
let displayAmount = document.getElementById("wallet")

let amount1 = JSON.parse(localStorage.getItem("amount")) || displayAmount.innerText  ;
displayAmount.innerText = amount1;

let addToWallet = () =>{
  amount1 = Number(amount1) + Number(addedAmount.value) ;
  localStorage.setItem("amount",amount1);
  displayAmount.innerText = amount1;
  addedAmount.value = null;
}

// let amount = JSON.parse(localStorage.getItem("amount")) 

// function addToWallet(){
//   total = amount + addedAmount
//   localStorage.setItem("amount",total);
//   console.log(amount)
// }

