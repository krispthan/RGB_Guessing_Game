var colors = generateRandomColors(6);
// var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener('click', function (){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
})
hardBtn.addEventListener('click', function (){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
})

resetButton.addEventListener("click", function () {
    //generate all new colors
   colors =  generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors on the page
    for( var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})
colorDisplay.textContent = pickedColor;

for(var i =0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];
    //add click listeners to squares\
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if( clickedColor === pickedColor){
           messageDisplay.textContent= "Correct";
           changedColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
           resetButton.textContent = "Play Again?"
        } else{
            this.style.backgroundColor =  "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}


function changedColors(color){
    //loop through all squares
    for(var i=0; i< squares.length; i++){
     //change squares to match match color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    //pick a random number
    var random = Math.floor(Math.random() * colors.length);
    //use the number to access the array
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr =[];
    //repeat num times
    for(var i= 0;  i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
   var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
   var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
   var b = Math.floor(Math.random() * 256);
   return `rgb ${r}, ${g}, ${b}`;
}