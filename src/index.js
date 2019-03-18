const fullname = document.getElementById('fullname');
console.log('CONTENT NOT YET LOADED!', fullname); //what will fullname evaluate to?

document.addEventListener('DOMContentLoaded', () => {
	console.log('CONTENT LOADED!');
});

const newPersonButton = document.getElementById('addPerson');
const dob = document.getElementById('date_of_birth');
let profilePic = document.getElementById('profile_picture');

newPersonButton.onclick = () => {
	fetch('https://randomuser.me/api/').then((res) => res.json()).then((res) => addUser(res.results[0]));
};

function addUser(res) {
	console.log(res);
	profilePic.src = res.picture.large;
	fullname.textContent = `${res.name.title} ${res.name.first} ${res.name.last}`;
	email.textContent = res.email;
	street.textContent = res.location.street;
	city.textContent = res.location.city;
	state.textContent = res.location.state;
	postcode.textContent = res.location.postcode;
	phone.textContent = res.phone;
	cell.textContent = res.cell;
	dob.textContent = res.dob.date;
}
