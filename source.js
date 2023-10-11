var colorBox=["red","green","yellow","blue"];
var gamePatterns=[];
var userClickedPattern=[];

var started=false;
var level=0;

$(document).keypress(function(){
  $("#level-title").text("LEVEL 1");
  nextSequence();
  started=true;
});
$("btn").click(function(){
//user choosing colour
var userChosenColour=$(this).attr("color");
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]) {
    if (userClickedPattern.length===gamePattern.length) {
      setTimeout(
        function(){
          nextSequence();
        },1000
      );
    }
      else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");


        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
          startOver();

      }

    }

  }
