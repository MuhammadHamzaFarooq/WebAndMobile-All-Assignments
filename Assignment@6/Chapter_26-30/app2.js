// //Task  : 1
var inputFloat = +prompt("Enter a positive floating point number");
var roundOff = Math.round(inputFloat);
var floorVal = Math.floor(inputFloat);
var ceilVal = Math.ceil(inputFloat);
document.write("Number: " + inputFloat + "<br>" + "<br>" + "Round off value: " + roundOff + "<br>" + "<br>" + "Floor value: " + floorVal + "<br>" + "<br>" + "Ceil value: " + ceilVal + "<br>" + "<br>");

// //Task : 2
var inputFloat = +prompt("Enter a negative floating point number");
var roundOff = Math.round(inputFloat);
var floorVal = Math.floor(inputFloat);
var ceilVal = Math.ceil(inputFloat);
document.write("Number: " + inputFloat + "<br>" + "<br>" + "Round off value: " + roundOff + "<br>" + "<br>" + "Floor value: " + floorVal + "<br>" + "<br>" + "Ceil value: " + ceilVal + "<br>" + "<br>");


//Task :3
var inputAbsoluteValue = +prompt("Enter a negative integer \n will show it's absolute value ");
var absoluteData = (inputAbsoluteValue + (-(inputAbsoluteValue) * 2));
document.write("The absolute value of " + inputAbsoluteValue + " is " + absoluteData + "<br>" + "<br>");

//Task ; 4


var diceNumber = Math.random() * 6;
var ceilDiceNumber = Math.ceil(diceNumber);
document.write("Random Dice Value: " + ceilDiceNumber + "<br>" + "<br>");
var dice1 = Math.random() * 6;
var ceil1 = Math.ceil(dice1);
document.write("Random Dice Value: " + ceil1 + "<br>" + "<br>");


//Task :5

var coinToss = Math.random() * 2;
var floorCoin = Math.floor(coinToss);
if (floorCoin === 0) {
    document.write(floorCoin + "<br>" + "<br>" + "Random coin Value: Heads" + "<br>" + "<br>");
} else {
    document.write(floorCoin + "<br>" + "<br>" + "Random coin Value: Tails" + "<br>" + "<br>");

}

//Task :6

var randomNum = Math.random() * 100;
var ceilRandomNum = Math.ceil(randomNum);
document.write("Random number between 1 to 100: " + ceilRandomNum + "<br>" + "<br>");

// //Task :7
var weight = +prompt("Enter your weight in kilogram");
var num = .2;
var result = weight + num;
alert(result + " kilogram");

//Task : 8

var randomNumGame = Math.random() * 10;
var ceilRandomNumGame = Math.ceil(randomNumGame);
var randomGame = +prompt("Enter number between 1 to 10");
if (randomGame === ceilRandomNumGame) {
    alert("CONGRATULATION YOU WON");
} else {
    alert("TRY AGAIN!!!" + "\n" + "Number was " + ceilRandomNumGame);
}