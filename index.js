var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageGenerator = "D:/Web Development/Dicee Challenge - Starting Files/images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageGenerator);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageGenerator = "D:/Web Development/Dicee Challenge - Starting Files/images/" + randomDiceImage;
document.querySelectorAll("img")[1].setAttribute("src", randomImageGenerator);