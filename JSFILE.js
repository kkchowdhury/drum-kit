var total_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < total_buttons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

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
    case "a":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "b":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "c":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "e":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case "f":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

  


   

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
