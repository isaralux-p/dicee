function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var pic1 = getRandomIntInclusive(1,6); //1-6


var dice = ("images/"+"dice"+pic1+".png");   //image/dice5.png
//var dice2 = ("images/"+"dice"+pic2+".png");   //image/dice5.png

var img1 = document.querySelectorAll("img")[0];
//var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src",dice );


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);



if (randomNumber2 > pic1 ){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 < pic1 ) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}
