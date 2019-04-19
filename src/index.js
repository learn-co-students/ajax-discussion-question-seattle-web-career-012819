const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postalCode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const birthday = document.getElementById("date_of_birth");
const submit = document.getElementById("submit");

console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

submit.addEventListener("click", ()=> {
  fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( res => parseData(res.results[0]) )
});

function parseData(res){
  fullname.innerHTML = res.name.title + " " + res.name.first + " " + res.name.last;
  email.innerHTML = res.email;
  street.innerHTML = res.location.street;
  city.innerHTML = res.location.city;
  state.innerHTML = res.location.state;
  postalCode.innerHTML = res.location.postcode;
  phone.innerHTML = res.phone;
  cell.innerHtML = res.cell;
  birthday.innerHTML = res.dob.date;
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});