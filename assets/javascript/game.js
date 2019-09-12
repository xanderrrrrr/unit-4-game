$(document).ready(function() {

    // everything starts when the DOM is ready


    // setting some default variables
    var wins = 0;
    var losses = 0;
    var targetNumber;
    var numberOptions;
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;

    function randomizer() {
        // this will get the adequate target number based on hw requirements
        targetNumber = Math.floor((Math.random() * 101) + 19);
        // this will set a random number to my array 
        numberOptions = Array.from({ length: 4 }, () => Math.floor(Math.random() * 12) + 1);
        // assigning my array indeces to my crystals
        crystal1 = numberOptions[0];
        crystal2 = numberOptions[1];
        crystal3 = numberOptions[2];
        crystal4 = numberOptions[3];
        console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4)
    }

    randomizer();



});
