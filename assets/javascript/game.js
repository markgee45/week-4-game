document.body.style.backgroundImage = "url('assets/images/images-4.jpg')";


$(document).ready(function() {
    var random = Math.floor(Math.random() * 71 + 29);
    console.log(rand)
    $("#rand").text(random);



    var genNum = []
    var score = 0;
    var wins = 0;
    var losses = 0;
    var artists = ["tupac-image", "biggie-image", "busta-image", "cube-image"];

    $("numWins").text(wins);
    $("numLosses").text(losses);
    $("#score").text(score);
    
    function ranNum() {
        for (var i = 0; i < 4; i++) {
            var number = Math.floor(Math.random() * 12 + 1);
            genNum.push(number);
            
        }

    }
    ranNum();

    function reset () {

        random = Math.floor((Math.random() * 71) + 29);

        $('#rand').text(random);

        genNum = [];
        ranNum();
        score = 0;
        $("#total").text(score)
    }
    function loser() {
        alert ("C'mon You Can Do Better Than That!!!!");
            (losses++);
        $("#lo").text("losses: " + losses);
        reset();
          
    }
    function winner() {
        alert("I Knew You Could Do It!!!!");
            (wins++);
        $("#winlo").text("wins: " + wins);
        reset();

    }



    $(".tupac-image").on("click", function() {
        score = score + genNum[0];
        console.log("this is your score " + score);
        $("#score").text(score);     
        console.log("tupac can you hear me");
        console.log(genNum[0]);
        if (score === random){
            winner();
            
        }
        else if (score > random){
            loser();
            
        }
    })

    $(".biggie-image").on("click", function() {
        score = score + genNum[1];
        console.log("what's up big fella?");
        $("#score").text(score);
        console.log("this is your score " + score);
        if (score === random) {
            winner();
            
        }
        else if (score > random) {
            loser();
            
        }

    })

    $(".busta-image").on("click", function() {
    score = score + genNum[2];
    console.log("you finally cut that hair");
    $("#score").text(score);
    console.log("this is your score " + score);
        if (score === random) {
            winner();
            
        }
        else if (score > random) {
            loser();
            
        }
    })

    $(".cube-image").on("click", function() {
    score = score + genNum[3];
    console.log("still doing childrens movies huh");
    $("#score").text(score);
    console.log("this is your score " + score);
        if (score === random) {
            winner();
            
        }
        else if (score > random) {
            loser();
           
        }
})
})