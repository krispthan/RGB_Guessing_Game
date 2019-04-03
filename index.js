var colors = [
    "rgb(255,0,0)",
    "rgb(255,255,0)",
    "rgb(0,255,0)",
    "rgb(0,255,255)",
    "rgb(0.0,255)",
    "rgb(255,0,255)"
]
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;


for(var i =0 ; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
  var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor){
          messageDisplay.textContent = "Correct!";
          changeColor(clickedColor);
          h1.style.backgroundColor = clickedColor;
      } else {
          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again!"
      }
    });
}

//changedColor

function changedColors(color){
    //loop through all squares
    for(var i =0; i< squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
 }
}

function pickColor(){
    //pick a random number
    var randomNum = Math.floor(Math.random() * colors.length );
    //use number to access the array
    return colors[randomNum];
}

function generateRandomColors(num){
    //make an array
    var arr =[];
    //repeat num times
    for(var i =0 ; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
   var r= Math.floor(Math.random() * 256);
    //pick a green from a 0-255
    var g= Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b= Math.floor(Math.random() * 256);
    return "rbg("+ r + ",  " + g+ ", " + b + ")";
}