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
        // setting the total score to 0
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
        if (crystalClick === "crystal3") {
            totalScore = totalScore + crystal3;
            $("#total-score").text(totalScore);
        }; 
        if (crystalClick === "crystal4") {
            totalScore = totalScore + crystal4;
            $("#total-score").text(totalScore);
        }; 
        if (totalScore === targetNumber) {
            wins = wins + 1;
            $("#wins").text("Wins: " + wins);
            reset();
        };
        if (totalScore > targetNumber) {
            losses = losses + 1;
            $("#losses").text("Losses: " + losses);
            reset();
        }
        
    })



});
