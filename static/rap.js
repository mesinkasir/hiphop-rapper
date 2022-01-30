var numberOfDrumButtons = document.querySelectorAll(".beat").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".beat")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "d":
      var tom1 = new Audio("static/sounds/dubs (1).wav");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("static/sounds/dubs (2).wav");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('static/sounds/dubs (3).wav');
      tom3.play();
      break;

    case "q":
      var tom4 = new Audio('static/sounds/dubs (4).wav');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('static/sounds/dubs (10).wav');
      snare.play();
      break;

    case "k":
      var crash = new Audio('static/sounds/dubs (6).mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('static/sounds/dubs (11).wav');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
