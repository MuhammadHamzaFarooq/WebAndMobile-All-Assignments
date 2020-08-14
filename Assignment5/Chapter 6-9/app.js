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