var formPage = document.getElementById('start');
var sheet1 = document.getElementById('sheet1');
// var cChar = document.getElementById("submit");

// cChar.addEventListener("click", createCharacter());

function createCharacter() {
	console.log("create character running");
	// get value of form display
	
		formPage.style.display = 'none';
		console.log("form hidden");
		sheet1.style.display = 'block';
		console.log("char sheet visible");
		return false;
}

 function toggleClock() {
    // get the clock
    var myClock = document.getElementById('clock');

    // get the current value of the clock's display property
    var displaySetting = myClock.style.display;

    // also get the clock button, so we can change what it says
    var clockButton = document.getElementById('clockButton');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      myClock.style.display = 'none';
      // change button text
      clockButton.innerHTML = 'Show clock';
    }
    else {
      // clock is hidden. show it
      myClock.style.display = 'block';
      // change button text
      clockButton.innerHTML = 'Hide clock';
    }
  }