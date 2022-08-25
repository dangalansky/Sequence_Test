// starting variables
var shapeArray = ["circle", "star", "triangle", "square"];

var compArray = [];
var userArray = [];

var level = 0;
var game = false;

// functions
function gameOn() {
  userArray = [];
  level++;
  $("h1").text("level: " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomShape = shapeArray[randomNumber];
  compArray.push(randomShape);
  playSound(randomShape);
  buttonPressed(randomShape);
}

function checkAnswer(lastResponse) {
  if (compArray[lastResponse] === userArray[lastResponse]) {
    if (userArray.length === compArray.length) {
      setTimeout(function() {
        gameOn();
      }, 1000);
    }
  } else {
    var wrong = new Audio("sounds/gameover.mp3");
    wrong.play();
    $("h1").text("game over. press a key to restart");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 1000);
    newGame();
  }
}

function newGame() {
  level = 0;
  compArray = [];
  game = false;
}

function playSound(shape) {
  var sound = new Audio("sounds/" + shape + ".mp3");
  sound.play();
}

function buttonPressed(key) {
  var activeButton = $("." + key);
  activeButton.addClass("pressed");
  setTimeout(function() {
    activeButton.removeClass("pressed");
  }, 100);
}

// game play
$(document).keydown(function() {
  if (game === false) {
    $("h1").text("level" + level);
    gameOn();
    game = true;
  }
});

$("input").click(function() {
  var shape = $(this).attr("class");
  // console.log(shape);
  playSound(shape);
  buttonPressed(shape);
  userArray.push(shape);
  checkAnswer(userArray.length - 1);
});
