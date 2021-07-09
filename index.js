var randomNumber1 = Math.floor(Math.random() * 6) + 1;     //generating random number between 1 to 6 to simulate dice throw

var randomImage1 = "dice" + randomNumber1 + ".png";          //finding image

// var randomImageSource1 = "images/" +randomImage1;            //pinpointing image in the images folder

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);   //choosing image to be displayed


var randomNumber2 = Math.floor(Math.random() * 6) + 1;    //generating random number between 1 to 6 to simulate dice throw

var randomImage2 = "dice" + randomNumber2 + ".png";          //finding image

// var randomImageSource2 = "images/" +randomImage2;            //pinpointing image in the images folder

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);    //choosing image to be displayed


//checking win,, loss, and draw

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText = "Player 2 wins!";
}else{
    document.querySelector("h1").innerText = "Draw!";
}
