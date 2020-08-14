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