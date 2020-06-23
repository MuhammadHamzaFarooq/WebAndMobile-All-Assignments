//Task :1
// function dateAndtime() {
//     var date = new Date();
//     document.write(date + "<br>" + "<br>");
// }

// dateAndtime();


//Task: 2
// function firstAndLastName() {
//     var firstName = prompt("Enter your first name: ");
//     var lastName = prompt("Enter your last name");
//     document.write("ASSALAM O ALAIKUM " + firstName.toUpperCase() +
//         " " + lastName.toUpperCase() + "<br>" + "<br>");
// }

// firstAndLastName();

//Task : 3
// var num1 = +prompt("Enter your first number: ");
// var num2 = +prompt("Enter your second number: ");

// function add(x, y) {
//     var sum = x + y;
//     return sum;
// }

// var val = add(num1, num2);
// document.write("Sum of " + num1 + " and " + num2 + " is " + val + "<br>" + "<br>");

//Task :4

var num1 = +prompt("Enter your first number");
var num2 = +prompt("Enter your Second number");
var operator = prompt("nter your operator");

function Calculator(num, num2) {
    var result;

    if (operator === "+") {
        result = (num1 + num2);
    } else if (operator === "-") {
        result = (num1 - num2);
    } else if (operator === "/") {
        result = (num1 / num2);
    } else if (operator === "*") {
        result = (num1 * num2);
    } else if (operator === "%") {
        result = (num1 % num2);
    } else {
        result = "You have entered invalid operator";
    }
    return result;
}

var val = Calculator(num1, num2);
document.write("<h3>" + "<b>" + "CALCULATOR" + "</b>" + "</h3>" + "<br>" + " Number 1 value: " + num1 + "<br>" + " Number 2 value: " + num2 + "<br>" + " Operator value: " + operator + "<br>" + " Final result value: " + val + "<br>" + "<br>");