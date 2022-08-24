var buttons = $("input");
var compArray = []
var userArray = []
var buttonShapes = ["circle", "star", "triangle", "square"]

function chooseRandomShape() {
  var n = Math.floor(Math.random()* 4);
  var randomShape =  buttonShapes[n];
  compArray.push(randomShape);
}

for (var i=0; i<compArray.length; i++) {
  var simonClass = compArray[i];
  playSound(simonClass);
}

for (var i=0; i<buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var simonClass = this.classList[0];
    console.log(simonClass);
    playSound(simonClass);
    userArray.push(simonClass);
  });
}

function playSound(simonClass) {
  switch (simonClass) {

    case "circle":
      var circle = new Audio("sounds/circle.mp3");
      circle.play();
      buttonPressed(simonClass);
      break;

    case "star":
      var star = new Audio("sounds/star.mp3");
      star.play();
      buttonPressed(simonClass);
      break;

    case "triangle":
      var triangle = new Audio("sounds/triangle.mp3");
      triangle.play();
      buttonPressed(simonClass);
      break;

    case "square":
    var square = new Audio("sounds/square.mp3");
    square.play();
    buttonPressed(simonClass);
    break;

    default: console.log(simonClass);

  }
}

function buttonPressed(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

function simon(n) {
  if (n === 1) {
    playSound("circle");
    compArray.push("circle");
  }
  else if (n === 2) {
    playSound("star");
    compArray.push("star");
  }
  else if (n === 3) {
    playSound("triangle");
    compArray.push("triangle");
  } else {
    playSound("square");
    compArray.push("square");
  }
}



$("body").on("keydown", function(){
  $("h1").text("Repeat the pattern.");
  while (true) {
    simon(random());
    if (userArray === compArray) {
      simon(random());
    } else {
      $("h1").text("Game Over.");
    }
  }

});
