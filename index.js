//alert("linked")

// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//   alert("ฉันถูกกด");
//  }


for (var i = 0 ; i < document.querySelectorAll(".drum").length ; i++) {

document.querySelectorAll(".drum")[i].addEventListener('click', function () {

  // console.log(this.innerHTML);

  // var audio = new Audio('sounds/kick-bass.mp3');
  // audio.play();;

  var buttonInnerHTML = this.innerHTML;
  playsong(buttonInnerHTML);

  document.addEventListener("keydown",function(play) {
    playsong(play.key);
  });
  function playsong(key){
  switch (key) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();;
      break;

    case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();;
      break;

    case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();;
       break;

    case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();;
      break;

    case "j":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();;
      break;

    case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();;
      break;

    case "l":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();;
      break;

    default:
    console.log(play.key)
  }
}
}
);

}

// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//    var audio = new Audio('sounds/kick-bass.mp3');
//    audio.play();
//  }
