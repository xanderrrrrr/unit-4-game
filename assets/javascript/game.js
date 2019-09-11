$(document).ready(function() {

    // everything starts when the DOM is ready
    // maybe I initialize with init function?


    // setting my global variables
    var wins = 0;
    var losses = 0 ;
    var targetNumber = targetNumber();
    var userNumber = 0;

    // this is my crystal array
    crystalArray = ["assets/images/orange-crystal.png","assets/images/green-crystal"]

    // this is to generate the target number
    function targetNumber() {
        nmbr = Math.floor(Math.random() * 121) + 19
        console.log(nmbr);
        return nmbr;
        
    }

});
