var randgoal = Math.floor(Math.random() * (120) + 19);
var randred = Math.floor(Math.random() * (12) + 1);
var randyellow = Math.floor(Math.random() * (12) + 1);
var randgreen = Math.floor(Math.random() * (12) + 1);
var randpurple = Math.floor(Math.random() * (12) + 1);
var wins = 0;
var loses = 0;
var score = 0;

$(document).ready(function () {
    $("#goal").html(randgoal);
    $("#red").html(randred);
    $("#yellow").html(randyellow);
    $("#green").html(randgreen);
    $("#purple").html(randpurple);
    $("#score").html(score);
    $("#wins").html(wins);
    $("#loses").html(loses);

    $("#red").click(function(){
        score = score + randred;
        $("#score").html(score);
        check();    
    });
    $("#yellow").click(function(){
        score = score + randyellow;
        $("#score").html(score);
        check();    
    });
    $("#green").click(function(){
        score = score + randgreen;
        $("#score").html(score);
        check();    
    });
    $("#purple").click(function(){
        score = score +randpurple;
        $("#score").html(score);
        check();    
    });
    function check(){
        if(score === randgoal){
            $("#wins").html("You are a winner!");

        }
        else if (score > randgoal){
            $("#loses").html("Sorry!, Try again loser!");
        }
    }
})
