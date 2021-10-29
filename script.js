var formPage = document.getElementById("start");
var sheet1 = document.getElementById("sheet1");
var inputName = document.getElementById("nameInput"); // name from form
var inputPlay = document.getElementById("playInput"); // playbook from form 
var inputLooks = document.getElementById("looksInput"); // looks from form
var displayName = document.getElementById("charName"); // name on character sheet 
var displayPlay = document.getElementById("charPlay"); // playbook on character sheet
var displayLooks = document.getElementById("charLooks"); // looks on character sheet 


// on form submit, change to start display:none and sheet1 display: block to hide the form and show character sheet
function createCharacter() {
	formPage.style.display = 'none';
	sheet1.style.display = 'block';
	// take form information and display it on character sheet
	displayName.textContent = inputName.value;
	displayPlay.textContent = inputPlay.value;
	console.log(inputLooks.value);
	displayLooks.textContent = inputLooks.value;

	return false;
}
