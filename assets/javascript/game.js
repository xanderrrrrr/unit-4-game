// placeholder for me to remember to initialize with a function!


// this is a function to generate a random number between 1 and 12
// that will be assigned to the crystals 

// function crystalNumber() {
//     randomNumber = Math.floor(Math.random() * 13) + 1
//     alert(randomNumber)
//     return randomNumber;
// }


// this is to generate the target number
function targetNumber() {
    nmbr = Math.floor(Math.random() * 121) + 19
    return nmbr;
}

function initialize() {


}

var crystalObj = {
    orangeCrystal: {
        value: 0,
        pushTovalue: function crystalNumber() {
            randomNumber = Math.floor(Math.random() * 13) + 1
            
            this.value = randomNumber
            alert(this.value)
        }
    }
    // blueCrystal: crystalNumber(),
    // yellowCrystal: crystalNumber(),
    // greenCrystal: crystalNumber()
}



$(document).ready(function() {

    $("#random-number").text(targetNumber);
    $("#orange-crystal").click(crystalObj.orangeCrystal.pushTovalue);

  });