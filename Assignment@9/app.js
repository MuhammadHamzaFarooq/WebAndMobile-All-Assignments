//                             CHAPTER - 1

// task: 1
// Write a script to greet your website visitor using JS alert box.
alert("Welcome!!");


//task: 2
// Write a script to display following message on your web
// page:


alert("Error! Please enter a valid password");

//task: 3
// Write a script to display following message on your web
// page

alert("Welcome to JS land.... \n Happy Coding ");



//Task : 4
// alert("Welcome to JS land..");
alert("Happy  Coding!! \n Prevent this page form creating dialogs ");


//Task : 5
alert("Hello.. I can run JS through my web brower's console");

//Task :6  Make use of alerts in your new/existing HTML & CSS project.
alert("hello world ");


//Task : 7
// b.Body(before your page’ s HTML)
// c.Body(inside your page’ s HTML)
// d.Body(after your page’ s HTML)

//                             CHAPTER - 2

// Task : 1
var username;

//Task : 2
var myName = "Muhammad Hamza Farooq";

// //Task : 3
var message;
message = "Hello World";
alert(message);


//Task : 4
var name = "Muhammad Hamza Farooq";
var age = "20 years old";
var education = "Certified Mobile Application Developnment ";

alert(name);
alert(age);
alert(education);


//Task : 5

alert("PIZZA \n PIZZ \n PIZ \n PI \n P");

//Task : 6
// var email = "mhamza2021999@gmail.com";
alert("My email address is " + email);


//Task : 7
alert("I am trying to learn form the Book A smater way to learn Java Script  ");


//Task :8
document.write("Yah!  I can write HTML content through JavaScript");

Task: 9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


//                            CHAPTER - 3

//Task : 1
var age = "20 years old";
alert(age);

// Task ; 2
var a = 14;
alert("you have visited this site " + a + " times");

//Task : 3
var birthYear = " 1999";
document.write("My birth is " + birthYear + "<br>" + "Data type of my decleared variable is number");


//Task : 4
var name = prompt("What is your name ");
var pname = prompt("What is your product you can this order ?");
var quantity = prompt("What quantity of product");
document.write(name + " " + "does order " + quantity + " " + pname + " " + " on XYZ store");


//                                   CHAPTER - 4

// Task:  1

var num1 = 20;
var num2 = 30;
var sum = num1 + num2;


//Task : 2

var sub = num1 - num2;
document.write("subtraction of " + num1 + " " + "and " + num2 + " " + "is " + sub + "<br>");


var multi = num1 * num2;
document.write("Multiplication of " + num1 + " " + "and " + num2 + " " + "is " + multi + "<br>");


var divi = num1 / num2;
document.write("Division of " + num1 + " " + "and " + num2 + " " + "is " + divi + "<br>");


var moduls = num1 % num2;
document.write("Reminder of " + num1 + " " + "and " + num2 + " " + "is " + moduls + "<br>");




//Task : 3
var num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
var increment = num + 1;
document.write("Value after increament is: " + increment + "<br>");
var add7 = increment + 7;
document.write("Value after addition of 7 is: " + add7 + "<br>");
var decrement = add7 - 1;
document.write("Value after decrement is: " + decrement + "<br>");
var remainder = decrement % 3;
document.write("The remainder after division by 3 is: " + remainder + "<br>" + "<hr>");




//Task :4
var ticket_price = 600;
var number_of_ticket = 5;
var total_price = ticket_price * number_of_ticket;
document.write("Total cost to buy " + number_of_ticket + " tickets to a movie is " + total_price + "PKR" + "<br>");

//Task : 5

document.write("<h1>Tabel Of 4</h1>" + "<br>")
for (var i = 1; i <= 10; i++) {
    document.write("4" + "x" + i + "=" + 4 * i + "<br>");
}



//Task :6
var celsius = +prompt("Enter your temputer in Celsius");
var fahrenheit = (Number(celsius) * 9 / 5) + 32;
document.write(celsius + "<sup>" + "o" + "</sup>" + "C is equal to " + fahrenheit + "<sup>" + "o" + "</sup>" + "F" + "<br>");

var fahrenheit = +prompt("Enter your temputer in fahrenheit");
var celsius = (Number(fahrenheit) - 32) * 5 / 9;
document.write(fahrenheit + "<sup>" + "o" + "</sup>" + "F is equal to " + celsius + "<sup>" + "o" + "</sup>" + "C" + "<br>");


//Task : 7
var cost_item1 = 10000;
var cost_item2 = 2000;
var quantity_item1 = 3;
var total_cost_item1 = cost_item1 * quantity_item1;
var quantity_item2 = 4;
var total_cost_item2 = cost_item2 * quantity_item2;
var shipping_charges = 400;
var total_price = total_cost_item1 + total_cost_item2 + shipping_charges;
document.write("<h1>" + "<b>" + "Shopping Cart" + "</b>" + "</h1>" + "<br>" +
    "Price of item 1 is: " + cost_item1 + "<br>" +
    "Quantity of item 1 is: " + quantity_item1 + "<br>" +
    "Price of item 2 is: " + cost_item2 + "<br>" +
    "Quantity of item 2 is: " + quantity_item2 + "<br>" +
    "Shipping Charges: " + shipping_charges + "<br>" +
    "Total cost of your order is: " + total_price + "PKR" + "<br>");




//Task :8
var total_marks = 600;
var obtained_marks = 510;
var student_percantage = (obtained_marks / total_marks) * 100;
document.write("<h3>" + "<b>" + "MARK SHEET" + "</b>" + "</h3>" + "<br>" +
    "Total marks: " + total_marks + "<br>" +
    "Marks obtained: " + obtained_marks + "<br>" +
    "Percentage: " + student_percantage + "%" + "<br>");





//Task : 9
var oneRiyalInPkr = 28;
var riyalQuantity = 25;
var oneUsdInPkr = 104.80;
var usdQuantity = 10;
var totalPkr = (oneUsdInPkr * usdQuantity) + (oneRiyalInPkr * riyalQuantity);
document.write("<h1>" + "<b>" + "Currency in PKR" + "</b>" + "</h1>" + "<br>" +
    "Total currency in PKR is: " + totalPkr + "<br>");



// //Task  : 10
var initialNumber = 50;
var allCalculations = (((initialNumber + 5) * 10) / 2);
document.write("Initial Number is: " + initialNumber + "<br>" +
    "Result after all calculation is: " + allCalculations + "<br>");




//Task : 11
var currentYear = 2020;
var birthYear = 1999;
var estimatedAge = currentYear - birthYear;
document.write("<h1>" + "<b>" + "Age Calculator" + "</b>" + "</h1>" + "<br>" +
    "Current year is: " + currentYear + "<br>" +
    "Birth year is: " + birthYear + "<br>" +
    "Calculated age is: " + estimatedAge + "<br>");




// //Task : 12
var circleRadius = 20;
var pi = 3.142;
var circleCircumference = (2 * pi * circleRadius);
var circleArea = (pi * (circleRadius * circleRadius));
document.write("<h1>" + "<b>" + "THE GEOMETRIZER" + "</b>" + "</h1>" + "<br>" +
    "Radius of circle is: " + circleRadius + "<br>" +
    "Circumference of circle is: " + circleCircumference + "<br>" +
    "Area of circle is: " + circleArea + "<br>");



//Task : 13
var favoriteSnack = "Lays";
var my_current_age = 21;
var maximum_age = 60;
var amount_of_snacks_per_day = 2;
var remaining_life = (60 - 20);
var remaining_days = (remaining_life * 365);
var total_snacks_in_remaining_life = (remaining_days * amount_of_snacks_per_day);
document.write("<h3>" + "<b>" + "THE LIFETIME SUPPLY CALCULATOR" + "</b>" + "</h3>" + "<br>" +
    "Favorite snack is: " + favoriteSnack + "<br>" +
    "Current age is: " + my_current_age + "<br>" +
    "Estimated maximum age is: " + maximum_age + "<br>" +
    "Amount of snacks per day is: " + amount_of_snacks_per_day + "<br>" +
    "You will need " + total_snacks_in_remaining_life + " " + favoriteSnack + " to last you until the ripe old age of " + maximum_age + "<br>");


//                               CHAPTER - 6 TO 9


//Task : 1
var a = 10;
document.write("<h1>Result:</h1>");
document.write("The value of a is " + a + "<br>");
document.write("------------------------------------------------------" + "<br>" + "<br>" + "<br>");
a += 1;
document.write("The value of ++a is " + a + "<br>");
document.write("Now the value of a is " + a + "<br>" + "<br>" + "<br>" + "<br>");

document.write("The value of a++ is " + a + "<br>");
a += 1;
document.write("Now the value of a is " + a + "<br>" + "<br>" + "<br>" + "<br>");


a -= 1;
document.write("The value of --a is " + a + "<br>");
document.write("Now the value of a is " + a + "<br>" + "<br>" + "<br>" + "<br>");

document.write("The value of a-- is " + a + "<br>");
a -= 1;
document.write("Now the value of a is " + a + "<br>" + "<br>" + "<br>" + "<br>");



//Task : 2
var a = 2,
    b = 1;
var result = --a - --b + ++b + b--;
//           1   -  0  +  1  +  1
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
document.write("a is " + " " + a + "<br>");
document.write("b is " + " " + b + "<br>");
document.write("result is " + " " + result + "<br>");



//Task : 3
var userName = prompt("Enter your name ");
alert(userName);



//Task :5
for (var i = 1; i <= 10; i++) {
    document.write("5" + "x" + i + "=" + 5 * i + "<br>");
}

//Task :6


var subject_1 = prompt("Enter First Subject Name");
var subject_2 = prompt("Enter Second Subject Name");
var subject_3 = prompt("Enter Third Subject Name");
var totalMarksForEachSubject = 100;
var obtainedMarksForEachSubject_1 = +prompt("Enter " + subject_1 + " Number");
var obtainedMarksForEachSubject_2 = +prompt("Enter " + subject_2 + " Number");
var obtainedMarksForEachSubject_3 = +prompt("Enter " + subject_3 + " Number");
var percentage_1 = (obtainedMarksForEachSubject_1 / totalMarksForEachSubject) * 100;
var percentage_2 = (obtainedMarksForEachSubject_2 / totalMarksForEachSubject) * 100;
var percentage_3 = (obtainedMarksForEachSubject_3 / totalMarksForEachSubject) * 100;
var totalMarksOf3Subjects = (totalMarksForEachSubject + totalMarksForEachSubject + totalMarksForEachSubject);
var totalObtainedMarks = (obtainedMarksForEachSubject_1 + obtainedMarksForEachSubject_2 + obtainedMarksForEachSubject_3);
var totalPercentage = ((totalObtainedMarks / totalMarksOf3Subjects) * 100);
document.write("<table>" +
    "<tr>" + "<th>" + "SUBJECTS" + "</th>" + "<th>" + "TOTAL MARKS" + "</th>" + "<th>" + "OBTAINED MARKS" + "</th>" + "<th>" + "PERCENTAGE" + "</th>" + "</tr>" + "<br>" +
    "<tr>" + "<td>" + "<center>" + subject_1 + "</center>" + "</td>" + "<td>" + "<center>" + totalMarksForEachSubject + "</center>" + "</td>" + "<td>" + "<center>" + obtainedMarksForEachSubject_1 + "</center>" + "</td>" + "<td>" + "<center>" + percentage_1 + "%" + "</center>" + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "<center>" + subject_2 + "</center>" + "</td>" + "<td>" + "<center>" + totalMarksForEachSubject + "</center>" + "</td>" + "<td>" + "<center>" + obtainedMarksForEachSubject_2 + "</center>" + "</td>" + "<td>" + "<center>" + percentage_2 + "%" + "</center>" + "</td>" + "</tr>" +
    "<tr>" + "<td>" + "<center>" + subject_3 + "</center>" + "</td>" + "<td>" + "<center>" + totalMarksForEachSubject + "</center>" + "</td>" + "<td>" + "<center>" + obtainedMarksForEachSubject_3 + "</center>" + "</td>" + "<td>" + "<center>" + percentage_3 + "%" + "</center>" + "</td>" + "</tr>" +
    "<tr>" + "<td>" + " " + "</td>" + "<td>" + "<center>" + "<b>" + totalMarksOf3Subjects + "</b>" + "</center>" + "</td>" + "<td>" + "<center>" + "<b>" + totalObtainedMarks + "</b>" + "</center>" + "</td>" + "<td>" + "<center>" + "<b>" + totalPercentage + "%" + "</b>" + "</center>" + "</td>" + "</b>" + "</tr>" +
    "</table>" + "<br>");


//                     CHAPTER - 9 TO 11


//Task : 1
var a = prompt("Enter your city name ");
if (a === "karachi") {
    alert("Welcome to cit of lights");
} else {
    alert("Welcome in the city");
}

//Task : 2

var a = prompt("Enter your gender");
if (a === "male") {
    alert("Good Morning Sir");
} else {
    alert("Good Morning Ma’am");
}

//Task :3

var inp = prompt("Enter your road traffic signal light color");
if (inp === "red") {
    alert("Must Stop");
} else if (inp === "yellow") {
    alert("Ready to move")
} else {
    alert("Move now");

}



//Task ; 4
var fuel = +prompt("Please Enter your car fuel in liters");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

Task: 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}



//Task :6
document.write("<h1>Marks Sheet</h1>");
var english = +prompt("Enter your English Marks");
var urdu = +prompt("Enter your urdu Marks");
var science = +prompt("Enter your science Marks");
var totalObtainedMarksSubjects = english + urdu + science;
var totalMarks = 300;
var percentage = (totalObtainedMarksSubjects / totalMarks) * 100;
if (percentage >= 80) {
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + totalObtainedMarksSubjects + "<br>");
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Percentage : " + percentage + "<br>");
    document.write("Grade : A+" + "<br>");
    document.write("Remarks : Excellent" + "<br>");

} else if (percentage >= 70) {
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + totalObtainedMarksSubjects + "<br>");
    document.write("Percentage : " + percentage + "<br>");
    document.write("Grade : A" + "<br>");
    document.write("Remarks : Good" + "<br>");

} else if (percentage >= 60) {
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + totalObtainedMarksSubjects + "<br>");
    document.write("Percentage : " + percentage + "<br>");
    document.write("Grade : B" + "<br>");
    document.write("Remarks : You need to improve" + "<br>");

} else {
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + totalObtainedMarksSubjects + "<br>");
    document.write("Percentage : " + percentage + "<br>");
    document.write("Grade : Fail" + "<br>");
    document.write("Remarks : Sorry" + "<br>");

}



//Task:7
var secretNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var guess = +prompt("guess the secret number");
if (secretNo[0] === guess) {
    alert("Close enough to the correct answer");
} else if (secretNo[1] === guess) {
    alert("Bingo! Correct answer ");
} else if (secretNo[2] === guess) {
    alert("Bingo! Correct answer ");
} else if (secretNo[3] === guess) {
    alert("Bingo! Correct answer ");
} else if (secretNo[4] === guess) {
    alert("Bingo! Correct answer ");
} else if (secretNo[5] === guess) {
    alert("Bingo! Correct answer ");
} else if (secretNo[6] === guess) {
    alert("Bingo! Correct answer ");
} else if (secretNo[7] === guess) {
    alert("Bingo! Correct answer ");
} else if (secretNo[8] === guess) {
    alert("Bingo! Correct answer ");
} else if (secretNo[9] === guess) {
    alert("Bingo! Correct answer ");
} else {
    alert("Sorry Please Try agin!: ")
}



//Task :8
var num = +prompt("Enter your number");
if ((num % 3) === 0) {
    alert("The number is divisible by 3. ");
} else {
    alert("The number is not divisible by 3. ");
}



//Task : 9
var num = +prompt("Enter your number");
if ((num % 2) === 0) {
    alert("The number is even ");
} else {
    alert("The number is odd ");
}


//Task : 10
var temp = +prompt("Enter temperature");
if (temp > 40) {
    alert("t is too hot outside");;
} else if (temp > 30) {
    alert("The Weather today is Normal");
} else if (temp > 20) {
    alert("Today’s Weather is cool");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

//Task  : 11
var val1 = +prompt("Enter your first value");
var sign = prompt("Enter your operator");
var val2 = +prompt("Enter your second value");


console.log(val1 + sign + val2);

if (sign === '+') {

    alert(val1 + val2);
} else if (sign === '-') {

    alert(val1 - val2);
} else if (sign === '*') {

    alert(val1 * val2);
} else if (sign === '/') {

    alert(val1 / val2);
}


//                              CHAPTER - 12 TO 13


//Task : 1
var charachterInput = prompt("Enter Your Number Or Alphabet");
var index = 0;

var i = charachterInput.charCodeAt(index);
if (i >= 65 && i <= 90) {
    document.write(charachterInput + " is an uppercase letter or string" + "<br>");
} else if (i >= 97 && i <= 122) {
    document.write(charachterInput + " is a lowercase letter or string" + "<br>");
} else if (i >= 48 && i <= 57) {
    document.write(charachterInput + " is a number" + "<br>");
} else {
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>");



//Task : 2
var num1 = +prompt("Enter your first number");
var num2 = +prompt("Enter your second number");
if (num1 > num2) {
    alert(num1 + "  is lagerest for  " + num2);
} else if (num2 > num1) {
    alert(num2 + "  is lagerest for  " + num1);

} else if (num1 === num2) {
    alert(num1 + " is equal to  " + num2);

}

//Task : 3

var integerCheck = +prompt("Enter a Number");
if (integerCheck > 0) {
    document.write(integerCheck + " is a Positive Number" + "<br>");
} else if (integerCheck < 0) {
    document.write(integerCheck + " is a Negative Number" + "<br>");
} else if (integerCheck == 0) {
    document.write(integerCheck + " is equal to Zero" + "<br>");
} else {
    document.write("User has not enter anything " + "<br>");
}
document.write("<br>");

//Task : 4
var input = prompt("Please Enter a single character");
if (input == 'A' || input == 'a' || input == 'E' || input == 'e' || input == 'I' || input == 'i' || input == 'O' || input == 'o' || input == 'U' || input == 'u') {
    console.log(input + " " + "is vowel ");
} else {
    console.log(input + " " + "is consunent")
}


// //Task : 5
var password = 'hamza123';
var val = prompt("Enter your password");
if (password === val) {
    alert("Correct! The password you entered matches the original password ");
} else {
    alert("Incorrect password");
}



//Task :6
var greeting = "";
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
} else {
    greeting = "Good evening";
    alert(greeting);
}



//Task : 7
var time = 1900;

if (time >= 0000 && time <= 1200) {
    alert("Good Moring ");

} else if (time >= 1200 && time <= 1700) {
    alert("Good Afernoon");
} else if (time >= 1700 && time <= 2100) {
    alert("Good evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good Afernoon");
}


//                             CHAPTER - 14 TO 16

// //Task : 1
var studentNames = [];
Task: 2
studentNames.push("Muhammad Hamza Farooq");
studentNames.push("Farooq Ali");
studentNames.push("Ahmed Ali ");
studentNames.push("Sufyan Ahmed Khan");
studentNames.push("Jazib Khan");

//Task : 3
var array = ["karachi ", "lahore", "islamabad", "multan", "quetta"];

//Task : 4
var array1 = [1, 2, 3, 4, 5, 67, 7, 8, 98];

//Task : 5
var array2 = ["true", "false "];

//Task : 6
var array3 = ["hamza", 1, "true", 'a'];

//Task : 7
document.write("<h1>Qualification</h1>" + "<br>" + "<br>" + "<br>");
var doc = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"]
document.write("1)" + " " + doc[0] + "<br>");
document.write("2)" + " " + doc[1] + "<br>");
document.write("3)" + " " + doc[2] + "<br>");
document.write("4)" + " " + doc[3] + "<br>");
document.write("5)" + " " + doc[4] + "<br>");
document.write("6)" + " " + doc[5] + "<br>");
document.write("7)" + " " + doc[6] + "<br>");
document.write("8)" + " " + doc[7] + "<br>");


// //Task :8
var students = ["Hamza", "Sufyan", "Ziyad"];
var scores = [480, 490, 475];
var score = ["90%", "91%", "89%"];

var totalNo = 500;
var percent1 = scores[0] / totalNo * 100;
var percent2 = scores[1] / totalNo * 100;
var percent3 = scores[2] / totalNo * 100;

document.write("Scores of " + students[0] + " " + " is " + " " + scores[0] + " Percentage: " + percent1 + "<br>");
document.write("Scores of " + students[1] + " " + " is " + " " + scores[1] + " Percentage: " + percent2 + "<br>");
document.write("Scores of " + students[2] + " " + " is " + " " + scores[2] + " Percentage: " + percent3 + "<br>");


//Task : 9
var colourName = [];
var val = prompt("what color he/she wants to add to the beginning ");
colourName.push(val);
alert(colourName);
var val1 = prompt("what color he/she wants to add to the end ");
colourName.push(val1);
alert(colourName);



var colourName1 = [];
var val2 = prompt("Add  color one to the beginning of the array");
var val3 = prompt("Add  color two to the beginning of the array");

colourName1.push(val2);
colourName1.push(val3);
alert(colourName1);

colourName.pop(val);
alert(colourName);













//Task : 10

var scoresStudent = [400, 600, 200, 350];
document.write("Scores of Students: " + scoresStudent + "<br>");
document.write("Ordered Scores Of Students: " + scoresStudent.sort());




//Task :11
document.write("Cities List" + " <br> ");
var cities = ["Karachi", "Lahore", "Islamabad", "Peshware", "Quetta"];
document.write(cities + " <br> " + " <br> " + " <br> ");

document.write("Selected cities List :" + "<br> ");

document.write(cities.slice(1, 3));


//Task :12
var arr = ["This", "is ", "my", "cat"];
document.write("<h1>Array :<h2>" + "<br>");
document.write(arr + "<br>" + "<br>" + "<br>" + "<br>");

document.write("String :" + "<br>" + "<br>");

document.write(arr.join(" " + " "));


//Task :13
var arr1 = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Out :" + "<br>")
document.write(arr1[0] + "<br>" + "<br>");
document.write("Out :" + "<br>")
document.write(arr1[1] + "<br>" + "<br>");
document.write("Out :" + "<br>")
document.write(arr1[2] + "<br>" + "<br>");
document.write("Out :" + "<br>")
document.write(arr1[3] + "<br>" + "<br>");

//Task :14

var arr1 = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Out :" + "<br>")
document.write(arr1[3] + "<br>" + "<br>");
document.write("Out :" + "<br>")
document.write(arr1[2] + "<br>" + "<br>");
document.write("Out :" + "<br>")
document.write(arr1[1] + "<br>" + "<br>");
document.write("Out :" + "<br>")
document.write(arr1[0] + "<br>" + "<br>");


//Task : 15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h1>" + "<b>" + "List of phone manufacturers" + "</b>" + "</h1>");
document.write("<select>" +
    "<option>" + phoneManufacturers[0] + "</option>" +
    "<option>" + phoneManufacturers[1] + "</option>" +
    "<option>" + phoneManufacturers[2] + "</option>" +
    "<option>" + phoneManufacturers[3] + "</option>" +
    "<option>" + phoneManufacturers[4] + "</option>" +
    "<option>" + phoneManufacturers[5] + "</option>" +
    "</select>" + "<br>" + "<br>");


//                         CHAPTER - 17 TO 20

//Task : 1

var multiD_array = [
    [],
    [],
    [],
    []
];

// 2. Declare and initialize a multidimensional array representing the following matrix:

var multiD_array_matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
document.write("<h1>" + "<b>" + "Multi Dimensional Array with Matrix Structure" + "</b>" + "</h1>");

document.write(multiD_array_matrix[0][0] + " " +
    multiD_array_matrix[0][1] + " " +
    multiD_array_matrix[0][2] + " " +
    multiD_array_matrix[0][3] + "<br>" +
    multiD_array_matrix[1][0] + " " +
    multiD_array_matrix[1][1] + " " +
    multiD_array_matrix[1][2] + " " +
    multiD_array_matrix[1][3] + "<br>" +
    multiD_array_matrix[2][0] + " " +
    multiD_array_matrix[2][1] + " " +
    multiD_array_matrix[2][2] + " " +
    multiD_array_matrix[2][3] + "<br>" + "<br>");

//Task3
for (var a = 0; a <= 10; a++) {
    document.write(a + "<br>");

}


//Task: 4
var j = +prompt("Enter a number to show its multiplication table");
var k = +prompt("Enter a multiplication table");

for (i = 0; i <= k; i++) {
    document.write(j + "x" + i + "=" + j * i + "<br>");
}


//Task  : 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("<br>" + "<br>");
for (var j = 0; j < fruits.length; j++) {
    document.write("Element at index " + j + " is " + fruits[j] + "<br>");
}



//Task : 8

var arr = [9999, 20000, 193, 007, 0202007];
document.write("<h1>" + "<b>" + "array items:" + "</b>" + "</h1>" + "<br>");
document.write(arr + "<br>");
var A_arr = Math.max.apply(Math, arr);
document.write("<h2>" + "<b>" + "largest element of array is:" + "</b>" + "</h2>" + "<br>");
document.write(A_arr + "<br>");


//Task :9


var arr = [00, 45, 1243, 87, 907];
document.write("<h1>" + "<b>" + "array items:" + "</b>" + "</h1>" + "<br>");
document.write(arr + "<br>");
var S_arr = Math.min.apply(Math, arr);
document.write("<h2>" + "<b>" + "smallest element of array is:" + "</b>" + "</h2>" + "<br>");
document.write(S_arr + "<br>");





//Task : 10
document.write("<h1>" + "<b>" + "multiples of 5 ranging 1 to 100 are:" + "</b>" + "</h1>" + "<br>");

for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        document.write(i + ",");
    }
}



//                                  Chapter 21 to 25

// //Task : 1
var fisrtName = prompt("Enter your First  name");
var lastName = prompt("Enter your last Name");
var fullName = fisrtName + lastName;
alert("Your full name is : " + " " + fullName);


// //Task : 2
var mobilePhone = prompt("Enter your favorite mobile phone model ");
var favoriteMobilePhone = mobilePhone.length;
alert("My Favorite Phone is :" + mobilePhone + "\n" + "Length of sting is : " + favoriteMobilePhone);


//Task : 3
var country = "Pakistani";
var index = country.indexOf("n");
alert("Index of n is : " + index);

//Task ; 4
var string_1 = "Hello World";
var last_index_of_l = string_1.lastIndexOf("l");
document.write("String: " + string_1 + "<br>" + "Last index of 'l' is: " +
    last_index_of_l + "<br>" + "<br>" + "<hr>");



// //Task: 5
var word = "pakistani";
var index = word.indexOf("i");
alert("Index of l is : " + index);


//Task ;6
var fisrtName = prompt("Enter your First  name");
var lastName = prompt("Enter your last Name");
var fullName = fisrtName + lastName;
alert("Your full name is : " + " " + fullName);

//Task :7
var city = "hyderabad";
console.log("City : " + " " + city);
var updateCity = city.replace("hyder", "islam");
console.log(" After Replacement :  " + " " + updateCity);



//Task : 8
var message = "Ali and Sami are best friends.They play cricket andfootball together.";
var updateMessage = message.replace("and", "&");
console.log(message);
console.log(updateMessage);


// Task : 9
var str = "472";
var convertStrIntoNum = parseInt(str);
var typeStr = typeof(str);
var typeNum = typeof(convertStrIntoNum);
console.log("Value : " + " " + str);
console.log("Type : " + " " + typeStr);
console.log("Value : " + " " + str);
console.log("Type : " + " " + typeNum);

//Task : 10
var userInput = prompt("Enter your Best Food name in small letters");
var converCase = userInput.toUpperCase();
alert(converCase);

//Task : 11
var userInput = prompt("Enter your Best Programming Language");
var copyCase = userInput.slice(0, 1);
var updateCase = copyCase.toUpperCase();
var acess = userInput.slice(1, userInput.length);
var merge = updateCase + acess;
document.write("User Input : " + " " + userInput + "<br>");
document.write("Title Case " + " " + merge);


//Task :12
var num = 35.36
var convertIntoStr = num.toLocaleString();
var remove = convertIntoStr.replace(".", "");
document.write("Number : " + num + "<br>")
document.write("Result : " + remove);

//Task : 13
var userName = prompt("Enter Your name");
if (userName[userName.indexOf("@")] == "@") {
    alert("Please enter a valid name ");
} else if (userName[userName.indexOf("!")] == "!") {
    alert("Please enter a valid name ");
} else if (userName[userName.indexOf(".")] == ".") {
    alert("Please enter a valid name ");
} else if (userName[userName.indexOf(",")] == ",") {
    alert("Please enter a valid name ");
} else {
    alert(userName);
}



//Task : 14
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to DilPasand bakery. What do you want to order sir/ma'am ??");
for (var i = 0; i <= arr.length; i++) {
    if (arr[i] === input.toLowerCase()) {
        alert(arr[i] + "   is available at index " + i + " " + " in our bakery");
        break;
    } else {
        alert("We are sorry " + input + " " + " is not available in our bakery");
        break;
    }
}


//Task : 15
var arr = prompt("Enter your password");
if (user[0] >= 1 && user[0] <= 9) {
    alert("Enter a valid password");
} else if (user.length < 6) {
    alert("Enter a valid password");
}



//Task : 16
var Uni = "University of Karachi";

for (var i = 0; i < Uni.length; i++) {
    document.write(Uni[i] + "<br>");
}


//  Task : 17
var input = prompt("Enter your country name");
var lastword = (input.length) - 1;
document.write("User Input: " + input + "<br>" + "<br>" + "Last character or User Input: " +
    input[lastword] + "<br>" + "<br>");


Task: 18
var str = "The quick brown fox jumps over the lazy dog";
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str.toLowerCase().slice(i, i + 3) === "the") {
        count = count + 1;
    }
}
document.write("Text: " + str + "<br>" + "<br>" + "There are " + count + " occurence(s) of word 'the'" + "<br>" + "<br>");

//                                Chapter 26 to 30

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


//                     Chapter 31 to 34

// //Task : 1
var dateTime = new Date();
document.write(dateTime + "<br>" + "<br>");


//Task : 2
var date = new Date();
var months = new Array();
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";
var monthName = months[date.getMonth()];
alert("Current Month: " + monthName);


// //Task :3
var date = new Date();
var days = new Array();
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";
var weekDays = days[date.getDay()];
var FirstThreeLetters = weekDays.slice(0, 3);
alert("Today is " + FirstThreeLetters);


//Task : 4
var date = new Date();
var days = new Array();
days[0] = "Sunday";
days[1] = "Monday";
days[2] = "Tuesday";
days[3] = "Wednesday";
days[4] = "Thursday";
days[5] = "Friday";
days[6] = "Saturday";
var weekDays = days[date.getDay()];
if (weekDays === "Saturday" || weekDays === "Sunday") {
    document.write("It's Fun Day" + "<br>" + "<br>");
}


//Task : 5

var date = new Date();
var days = date.getDate();
if (days < 16) {
    document.write("First fifteen days of the month" + "<br>" + "<br>");
} else {
    document.write("Last days of the month" + "<br>" + "<br>");
}


//Task : 6
var date = new Date();
document.write("Current Date: " + date + "<br>" + "<br>");
var milliSecondsSinceJan1_1970 = date.getTime();
document.write("Ellapsed milliseconds since January 1, 1970: " + milliSecondsSinceJan1_1970 + "<br>" + "<br>");
var minutesSinceJan1_1970 = (milliSecondsSinceJan1_1970 / 60000);
document.write("Ellapsed minutes since January 1, 1970: " + minutesSinceJan1_1970 + "<br>" + "<br>");

//Task :7
var date = new Date();
var amORpm = date.getHours();
if (amORpm < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

//Task:8

var later_date = new Date("December 31, 2020");
document.write(later_date + "<br>" + "<br>" + "<hr>");

//Task :9
var date_of_1st_ramadan = new Date("June 18, 2015");
var date_of_1st_ramadan_in_millis = date_of_1st_ramadan.getTime();
var today_date = new Date();
var today_date_in_millis = today_date.getTime();
var diff = (today_date_in_millis - date_of_1st_ramadan_in_millis);
var diff_days_till_today = diff / (1000 * 60 * 60 * 24);
var accurate_diff_days_till_today = Math.floor(diff_days_till_today);
document.write(accurate_diff_days_till_today + " days have passed since 1st Ramadan, 2015" + "<br>" + "<br>" + "<hr>");

//Task:10

var latest_date = new Date();
var latest_date_millis = latest_date.getTime();
var reference_date = new Date("January 01, 2015");
var reference_date_millis = reference_date.getTime();
var milliseconds_from_2015 = (latest_date_millis - reference_date_millis);
var accurate_milliseconds_from_2015 = Math.floor(milliseconds_from_2015);
document.write("On Reference date " + reference_date + ", <br>" + accurate_milliseconds_from_2015 +
    " seconds had passed since begining of 2015" + "<br>" + "<br>" + "<hr>");

//Task:11
var current_date_before_an_hour = new Date();
current_date_before_an_hour.setHours(current_date_before_an_hour.getHours() - 1);
var current_date = new Date();
document.write("Current Date: " + current_date + "<br>" + " 1 hour ago, it was " +
    current_date_before_an_hour + "<br>" + "<br>" + "<hr>");

//Task:12

var current_date_before_100_years = new Date();
current_date_before_100_years.setFullYear(current_date_before_100_years.getFullYear() - 100);
var current_date_1 = new Date();
document.write("Current Date: " + current_date_1 + "<br>" + " 100 years ago, it was " +
    current_date_before_100_years + "<br>" + "<br>" + "<hr>");

//Task:13
var user_input_DOB = prompt("Enter Date of Birth", " like  mm/dd/yyyy");
var today = new Date();
var birthDate = new Date(user_input_DOB);
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
}
document.write("Your age is: " + age + "<br> Your birth year is: " +
    birthDate.getFullYear() + "<br>" + "<br>" + "<hr>");

//Task:14
document.write("<h3>" + "<b>" + "K-Electric Bill" + "</b>" + "</h3>" + "<br>")
var Customer_name_for_bill = "ABC Customer";
var current_date_2 = new Date();
var current_month = current_date_2.getMonth();
var number_of_units_consumed = 410;
var charges_per_unit = 16;
var late_payment_surcharges = 350;
document.write("Customer Name: " + "<b>" + Customer_name_for_bill + "</b>" + "<br> Month: " +
    "<b>" + current_month + "</b>" + "<br>" + "Number Of Units: " + "<b>" + number_of_units_consumed +
    "</b>" + "<br>" + "Charges per Unit: " + "<b>" + charges_per_unit + "</b>" + "<br>" + "<br>" +
    "Net Amount Payable(within Due Date): " + "<b>" + number_of_units_consumed * charges_per_unit +
    "</b>" + "<br>" + "Late Payment Surcharges: " + "<b>" + late_payment_surcharges + "</b>" + "<br>" +
    "Gross Amount Payable(after Due Date): " + "<b>" +
    ((number_of_units_consumed * charges_per_unit) + late_payment_surcharges) + "</b>" + "<br>" + "<br>" + "<hr>");


//                        	Chapter 35 to 38

//Task :1
function dateAndtime() {
    var date = new Date();
    document.write(date + "<br>" + "<br>");
}

dateAndtime();


//Task: 2
function firstAndLastName() {
    var firstName = prompt("Enter your first name: ");
    var lastName = prompt("Enter your last name");
    document.write("ASSALAM O ALAIKUM " + firstName.toUpperCase() +
        " " + lastName.toUpperCase() + "<br>" + "<br>");
}

firstAndLastName();

Task: 3
var num1 = +prompt("Enter your first number: ");
var num2 = +prompt("Enter your second number: ");

function add(x, y) {
    var sum = x + y;
    return sum;
}

var val = add(num1, num2);
document.write("Sum of " + num1 + " and " + num2 + " is " + val + "<br>" + "<br>");

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


Task: 5
var number_going_to_be_argument = +prompt("Enter a number for taking it's square");

function square(s) {
    var square_of_number = s * s;
    document.write("<h3>" + "<b>" + "SQUARE CALCULATOR" + "</b>" + "</h3>" + "<br>" +
        " value: " + number_going_to_be_argument + "<br>" + "<br>" +
        " Square of value: " + square_of_number + "<br>" + "<br>" + "<hr>");
}

square(number_going_to_be_argument);
//Task: 6
function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
let number_whose_factorial_is_to_be_calculated = +prompt("Enter a number for it's factorial calculation");
answer = factorial(number_whose_factorial_is_to_be_calculated)
document.write("<h3>" + "<b>" + "FACTORIAL CALCULATOR" + "</b>" + "</h3>" + "<br>" +
    "The factorial of " + number_whose_factorial_is_to_be_calculated + " is " + answer + "<br>" + "<br>" + "<hr>");
//Task: 7
var starting_num_of_counting = +prompt("Enter a number to start counting");
var ending_num_of_counting = +prompt("Enter a number to end counting");

function counting_with_user_input(s, e) {
    document.write("<h3>" + "<b>" + "COUNTING FROM " + starting_num_of_counting + " TO " +
        ending_num_of_counting + "</b>" + "</h3>" + "<br>");
    for (var start_count = starting_num_of_counting; start_count <= ending_num_of_counting; start_count++) {
        document.write(start_count + "<br>");
    }
    document.write("<br>" + "<hr>");
}

counting_with_user_input(starting_num_of_counting, ending_num_of_counting);
//Task :8
function outer() {
    var base = +prompt("Enter a value for Base of right angle triangle");
    var perpendicular = +prompt("Enter a value for Perpendicular of right angle triangle");

    function inner(base, perpendicular) {
        var b2 = (base * base);
        var p2 = (perpendicular * perpendicular);
        return b2 + p2;
    }

    returning_value = inner(base, perpendicular);

    var hypotenuse_square = (returning_value);
    var hypotenuse = Math.sqrt(hypotenuse_square);

    document.write(" Value of Hypotenuse: " + hypotenuse + "<br>" + "<br>" + "<hr>");
}

outer();
//Task 9
function area_of_rectangle(width, height) {
    var area_denoted_by_A = (width * height);
    return area_denoted_by_A;
}

var width_of_rectangle_by_value = 10;
var height_of_rectangle_by_value = 15;

var result_of_returned_area = area_of_rectangle(width_of_rectangle_by_value, height_of_rectangle_by_value);

document.write("<h3>" + "<b>" + "Arguments as variables" + "</b>" + "</h3>" + "<br>" +
    "Area of Rectangle: " + result_of_returned_area + "<br>" + "<br>");

var result_of_returned_area_1 = area_of_rectangle(10, 15);

document.write("<h3>" + "<b>" + "Arguments as value" + "</b>" + "</h3>" + "<br>" +
    "Area of Rectangle: " + result_of_returned_area_1 + "<br>" + "<br>" + "<hr>");

//Task: 10
function palindrome_checker() {
    var palindrome_word_check = prompt("Enter a string to check if it is palindrome or not");

    var palindrome_word_container = "";

    for (var p = palindrome_word_check.length - 1; p >= 0; p--) {
        palindrome_word_container += palindrome_word_check[p]
    }

    document.write("<h3>" + "<b>" + "PALINDROME CHECKER" + "</b>" + "</h3>" + "<br>");

    if (palindrome_word_check === palindrome_word_container) {
        document.write("The word '" + palindrome_word_check + "' is a Palindrome");
    } else {
        document.write("The word '" + palindrome_word_check + "' is not a Palindrome");
    }

    document.write("<br>" + "<br>" + "<hr>");

}

palindrome_checker();
//Task: 11
var example_string = "the quick brown fox";

function uppercase_first_letter_of_every_word_in_string(t_q_b_f) {
    var array1 = t_q_b_f.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}

var return_from_newarray1 = uppercase_first_letter_of_every_word_in_string(example_string);
document.write("<h3>" + "<b>" + "CAPITALIZE FIRST LETTER OF EVERY WORD IN STRING" + "</b>" + "</h3>" + "<br>" +
    "Example String: " + example_string + "<br>" + "<br>" + "Converted String: " +
    return_from_newarray1 + "<br>" + "<br>" + "<hr>");

//Task;12
var example_string_1 = "Web Development Tutorial";

function finding_longest_word_in_a_string(W_D_T) {
    var array1 = W_D_T.match(/\w[a-z]{0,}/gi);
    var result_of_array1 = array1[0];

    for (var longest_word = 1; longest_word < array1.length; longest_word++) {
        if (result_of_array1.length < array1[longest_word].length) {
            result_of_array1 = array1[longest_word];
        }
    }
    return result_of_array1;
}

var return_from_result_of_array1 = finding_longest_word_in_a_string(example_string_1);
document.write("<h3>" + "<b>" + "LONGEST WORD IN STRING" + "</b>" + "</h3>" + "<br>" +
    "Example String: " + example_string_1 + "<br>" + "<br>" + "Longest String: " +
    return_from_result_of_array1 + "<br>" + "<br>" + "<hr>");

//Task: 13
var sample_argument = "JSResourceS.com";
var occurrence_check_letter = "o"

function occurrence_count_of_a_letter(sample_str, specified_letter) {
    var specified_letter_Count = 0;
    for (var index = 0; index < sample_str.length; index++) {
        if (sample_str.charAt(index) == specified_letter) {
            specified_letter_Count += 1;
        }
    }
    return specified_letter_Count;
}

var return_from_specified_letter_count = occurrence_count_of_a_letter(sample_argument, occurrence_check_letter);
document.write("<h3>" + "<b>" + "OCCURRENCES OF THE SPECIFIED LETTER 'O' " + "</b>" + "</h3>" + "<br>" +
    "Sample Arguments: " + sample_argument + "<br>" + "<br>" + "Occurences of the specified letter '" +
    occurrence_check_letter + "' within the string: " + return_from_specified_letter_count + "<br>" + "<br>" + "<hr>");
//Task:14
document.write("<h3>" + "<b>" + "THE GEOMETRIZER" + "</b>" + "</h3>" + "<br>");

var radius_of_a_circle = 5;

calcCircumference(radius_of_a_circle);
calcArea(radius_of_a_circle);

function calcCircumference(radius) {
    var value_of_pi = 3.142;
    var circumference_of_circle = (2 * (value_of_pi * radius));
    document.write("The Circumference is " + circumference_of_circle + "<br>" + "<br>");
}

function calcArea(radius) {
    var value_of_pi = 3.142;
    var area_of_circle = (value_of_pi * (radius * radius));
    document.write("The Area is " + area_of_circle + "<br>" + "<br>" + "<hr>");
}


//						Chapter 38 to 42


//Task :1

var ans = 1;

function power(a, b) {
    for (var x = 1; x <= b; x++) {
        ans = ans * a;
    }
    document.write(a + "<sup>" + b + "</sup>" + " is " + ans + "<br>" + "<br>" + "<hr>");
}
power(2, 5);

//Task:2
function leapYear() {
    var year = +prompt("Enter any year:");
    if (year % 4 == 0) {
        alert(year + " is a leap year");
    } else {
        alert(year + " is not a leap year");
    }
}
leapYear();

//Task : 3
function areaOfTriangle(a, b, c) {
    var s = calculateSide();
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    area = area.toFixed(4);
    document.write("Area of triangle is: " + area + "<br>" + "<br>" + "<hr>");

    function calculateSide() {
        var sides = (a + b + c) / 2;
        return sides;
    }
}
areaOfTriangle(5, 10, 13);

//Task:4
function mainFunction(sub1, sub2, sub3) {
    var result1 = average();
    var result2 = percentage();
    result1 = result1.toFixed(4);
    result2 = result2.toFixed(4);
    document.write("Average of marks is: " + result1 + "<br>");
    document.write("Percentage is: " + result2 + "%" + "<br>" + "<br>" + "<hr>");

    function average() {
        var avg = (sub1 + sub2 + sub3) / 3;
        return avg;
    }

    function percentage() {
        var perc = ((sub1 + sub2 + sub3) / 360) * 100;
        return perc;
    }
}
mainFunction(+prompt("Marks of 1st subject"), +prompt("Marks of 2nd subject"), +prompt("Marks of 3rd subject"));

//Task: 5
function funcIndexOf(value, char) {
    for (var x = 0; x < value.length; x++) {
        if (value[x] == char) {
            var index = x;
            document.write(index + "<br>" + "<br>" + "<hr>");
            break
        }
    }
}
funcIndexOf(prompt("Enter any string"), prompt("Enter the character to find the index number of in string"));


//Task : 6
function deleteVowels(sentence) {
    for (var x = 0; x < sentence.length; x++) {
        if (sentence[x] == "a" || sentence[x] == "e" || sentence[x] == "i" || sentence[x] == "o" || sentence[x] == "u") {
            sentence = sentence.slice(0, x) + sentence.slice(x + 1);
        }
    }
    document.write(sentence + "<br>" + "<br>" + "<hr>");
}
deleteVowels("the crazy brown fox jumps over the lazy dog")

//Task:7
function findOccurrences() {
    var text = "Pleases read this application and give me gratuity";
    var chars = text.toLowerCase().split("");
    var count = 0;

    for (var x = 0; x < chars.length - 1; x++) {
        var char1 = chars[x];
        var char2 = chars[x + 1];

        if (isVowelCharacter(char1) && isVowelCharacter(char2)) {
            count++
        }
    }
    return count;
}

function isVowelCharacter(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}
var occurs = findOccurrences();
document.write("Occurrences of any two successive vowels are: " + occurs + "<br>" + "<br>" + "<hr>");

//Task : 8
function converter() {
    var distance = +prompt("Enter distance between two cities in kilometers:");
    var result1 = meterConversion(distance);
    var result2 = feetConversion(distance);
    var result3 = inchesConversion(distance);
    var result4 = centimeterConversion(distance);
    document.write("The distance in meters is: " + result1);
    document.write("<br>" + "The distance in feets is: " + result2);
    document.write("<br>" + "The distance in inches is: " + result3);
    document.write("<br>" + "The distance in centimeters is: " + result4 + "<br>" + "<br>" + "<hr>");

    function meterConversion(km) {
        var meter = km * 1000;
        return meter;
    }

    function feetConversion(km) {
        var feet = km * 3281;
        return feet;
    }

    function inchesConversion(km) {
        var inch = km * 39370;
        return inch;
    }

    function centimeterConversion(km) {
        var cm = km * 100000;
        return cm;
    }
}
converter();

//TasK:9
var overTime = +prompt("Enter the overtime you have worked in hours:");
var payment = overTime * 12;
document.write("Your overtime payment is: " + payment + "<br>" + "<br>" + "<hr>");

//Task:10
var withdraw = +prompt("Enter amount to withdraw");
var hundredNotes = Math.floor((withdraw / 100));
var fiftyNotes = Math.floor(((withdraw % 100) / 50));
var tenNotes = Math.floor((((withdraw % 100) % 50) / 10));
var remain = Math.floor((((withdraw % 100) % 50) % 10));
document.write("Amount to withdraw: " + withdraw + "<br>");
document.write("You will have " + hundredNotes + " hundred notes " + fiftyNotes + " fifty notes " + tenNotes + " ten notes.");
document.write("<br>" + "Remaining amount will be: " + remain + "<br>" + "<br>" + "<hr>");



//						Chapter 43 to 48


// 1. Show an alert box on click on a link.

// 				This task is done using html.

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function message() {
    alert("Thanks for purchasing a phone from us.")
}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

function deleteRow(id) {
    var table = document.getElementById("table");
    var rowNo = document.getElementById(id);
    table.deleteRow(rowNo.rowIndex);
}

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function changeImage(id, source) {
    var change = document.getElementById(id);
    change.src = source;
}

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

function increment() {
    var counter = document.getElementById("counter");
    counter.value++;
}

function decrement() {
    var counter = document.getElementById("counter");
    counter.value--;
}


//						Chapter 48 to 52


// 1. Create a signup form and display form data in your web
// page on submission.

function SignUp() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var pass = document.getElementById("pswd");
    document.write("First Name: " + fname.value + "<br>");
    document.write("Last Name: " + lname.value + "<br>");
    document.write("Email - Id: " + email.value + "<br>");
    document.write("Password: " + pass.value);
    fname.value = "";
    lname.value = "";
    email.value = "";
    pass.value = "";
}

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function readMore() {
    var text = document.getElementById("text");
    var moreText = document.getElementById("moreText");
    text.innerHTML = moreText.innerHTML;
}

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

function deleteRow(id) {
    var table = document.getElementById("stdTable");
    var rowNo = document.getElementById(id);
    table.deleteRow(rowNo.rowIndex);
}

function editRow(name, fname, rollNum) {
    var name = document.getElementById(name);
    var fname = document.getElementById(fname);
    var rollNum = document.getElementById(rollNum);
    var edit = document.getElementById("fields");
    var input1 = document.getElementById("inp1");
    var input2 = document.getElementById("inp2");
    var input3 = document.getElementById("inp3");
    edit.hidden = false;
    input1.value = name.innerHTML;
    input2.value = fname.innerHTML;
    input3.value = rollNum.innerHTML;
    name = input1.value;
    fname = input2.value;
    rollNum = input3.value;
}

function editDetails() {
    var edit = document.getElementById("fields");
    edit.hidden = true;
}


//						Chapter 53 to 58


// 1.Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.

function clickImg(myImg, modal, modalImg, caption) {
    var myImg = document.getElementById(myImg);
    var modal = document.getElementById(modal);
    var modalImg = document.getElementById(modalImg);
    var caption = document.getElementById(caption);
    modal.style.display = "block";
    modalImg.src = myImg.src;
    caption.innerHTML = myImg.alt;
}

function closeModal(value) {
    var close = document.getElementById(value);
    close.style.display = "none"
}

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.

var fontSize = 1;

function zoomIn() {
    fontSize += 0.1;
    var text = document.getElementById("text");
    text.style.fontSize = fontSize + "em";
}

function zoomOut() {
    fontSize -= 0.1;
    var text = document.getElementById("text");
    text.style.fontSize = fontSize + "em";
}


//						Chapter 58 to 67


// 1.Consider you have following code snippet:
// (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i.Get element of id “main-content” and assign them in a variable.
// ii.Display all child elements of “main-content” element.
// iii.Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// 		Task1 (i)
var main = document.getElementById("main-content");

// 		Task1 (ii)
console.log(main.children);

// 		Task1 (iii)
var render0 = document.getElementsByClassName("render")[0];
var render1 = document.getElementsByClassName("render")[1];
var render2 = document.getElementsByClassName("render")[2];
var render3 = document.getElementsByClassName("render")[3];
var render4 = document.getElementsByClassName("render")[4];
document.write(render0.innerHTML + "<br>");
document.write(render1.innerHTML + "<br>");
document.write(render2.innerHTML + "<br>");
document.write(render3.innerHTML + "<br>");
document.write(render4.innerHTML);

// 		Task1 (iv)
var input1 = document.getElementById("first-name");
input1.value = "Alex";

// 		Task1 (v)
var input2 = document.getElementById("last-name");
var input3 = document.getElementById("email");
input2.value = "Bank";
input3.value = "alexbank@gmail.com";

// 2. use HTML code of question 1 and show the result on browser.
// i.What is node type of element having id “form-content”.
// ii.Show node type of element having id “lastName” and its child node.
// iii.Update child node of element having id “lastName”.
// iv.Get First and last child of id “main-content”.
// v.Get next and previous siblings of id “lastName”. 
// vi.Get parent node and node type of element having id “email”

// 		Task2 (i)
var form = document.getElementById("form-content");
document.write(form.nodeType);

// 		Task2 (ii)
var lname = document.getElementById("lastName");
console.log(lname.nodeType);
console.log(lname.childNodes);

// 		Task2 (iii)
var textnode = document.createElement("h1");
var lname = document.getElementById("lastName");
lname.replaceChild(textnode, lname.childNodes[0]);
console.log(lname.childNodes);

// 		Task2 (iv)
var main = document.getElementById("main-content");
console.log(main.firstChild);
console.log(main.lastChild);

// 		Task2 (v)
var element = document.getElementById("lastName");
console.log(element.previousSibling);
console.log(element.nextSibling);

// 		Task2 (vi)
var email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType);


//						THE END