$(document).ready(function () {

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
    reset();


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
        console.log(targetNumber)
    }

    // this is the reset function that will re-set the variables
    function reset() {
        // I will re-invoke the randomizer function
        randomizer()
        // re-setting the total score to 0
        totalScore = 0
        // pushing the total score to the html div
        $("#total-score").text(totalScore);
        // pushing the randomized target number to the target div
        $("#random-number").text(targetNumber);
    }

    $(".crystal").on("click", function () {
        var crystalClick = $(this).attr("id");
        console.log(crystalClick); if (crystalClick === "orange-crystal") {
            totalScore = totalScore + crystal1;
            $("#total-score").text(totalScore);
        }; 
        if (crystalClick === "blue-crystal") {
            totalScore = totalScore + crystal2;
            $("#total-score").text(totalScore);
        }; 
        if (crystalClick === "yellow-crystal") {
            totalScore = totalScore + crystal3;
            $("#total-score").text(totalScore);
        }; 
        if (crystalClick === "green-crystal") {
            totalScore = totalScore + crystal4;
            $("#total-score").text(totalScore);
        }; 
        // this is the winning condition
        if (totalScore === targetNumber) {
            // setting the running counter for wins if target number reached
            wins = wins + 1;
            // pushing to the wins div
            $("#wins").text("Wins: " + wins);
            // pushing to another dive stating they won
            $("#win-lose-display").text("You won!!")
            // invoking the reset so we can do it all over agagin
            reset();
        };
        // this is the losing condition
        if (totalScore > targetNumber) {
            // setting the running counter for losses if the target number goes above
            losses = losses + 1;
            // pushing to the div saying they lost
            $("#win-lose-display").text("You lost!!")
            // pushing to the losses div showing the running losses
            $("#losses").text("Losses: " + losses);
            // invoking the reset so we can do it all over again
            reset();
        }
        
    })



});
