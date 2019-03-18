// Team = Allen, Sahir and Billy

const button = document.getElementById('main-button')
button.addEventListener('click', addPerson)

let profile_picture = document.getElementById('profile_picture')
let fullname = document.getElementById('fullname')
let email = document.getElementById('email')
let street = document.getElementById('street')
let city = document.getElementById('city')
let state = document.getElementById('state')
let postcode = document.getElementById('postcode')
let phone = document.getElementById('phone')
let cell = document.getElementById('cell')
let date_of_birth = document.getElementById('date_of_birth')

function addPerson(){
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(json => assignDataResponse(json))
  // .then(console.log)
}

function assignDataResponse(json){
  let result = json.results[0]
  cell.textContent = result.cell
  fullname.textContent = `${result.name.title} ${result.name.first} ${result.name.last}`
  email.textContent = result.email
  date_of_birth.textContent = result.dob.date
  street.textContent = result.location.street
  city.textContent = result.location.city
  state.textContent = result.location.state
  postcode.textContent = result.location.postcode
  phone.textContent = result.phone
  profile_picture.src = result.picture.medium
}
