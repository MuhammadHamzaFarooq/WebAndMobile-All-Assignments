// //Task : 1
// var dateTime = new Date();
// document.write(dateTime + "<br>" + "<br>");


//Task : 2
// var date = new Date();
// var months = new Array();
// months[0] = "January";
// months[1] = "February";
// months[2] = "March";
// months[3] = "April";
// months[4] = "May";
// months[5] = "June";
// months[6] = "July";
// months[7] = "August";
// months[8] = "September";
// months[9] = "October";
// months[10] = "November";
// months[11] = "December";
// var monthName = months[date.getMonth()];
// alert("Current Month: " + monthName);


// //Task :3
// var date = new Date();
// var days = new Array();
// days[0] = "Sunday";
// days[1] = "Monday";
// days[2] = "Tuesday";
// days[3] = "Wednesday";
// days[4] = "Thursday";
// days[5] = "Friday";
// days[6] = "Saturday";
// var weekDays = days[date.getDay()];
// var FirstThreeLetters = weekDays.slice(0, 3);
// alert("Today is " + FirstThreeLetters);


//Task : 4
// var date = new Date();
// var days = new Array();
// days[0] = "Sunday";
// days[1] = "Monday";
// days[2] = "Tuesday";
// days[3] = "Wednesday";
// days[4] = "Thursday";
// days[5] = "Friday";
// days[6] = "Saturday";
// var weekDays = days[date.getDay()];
// if (weekDays === "Saturday" || weekDays === "Sunday") {
//     document.write("It's Fun Day" + "<br>" + "<br>");
// }


//Task : 5

// var date = new Date();
// var days = date.getDate();
// if (days < 16) {
//     document.write("First fifteen days of the month" + "<br>" + "<br>");
// } else {
//     document.write("Last days of the month" + "<br>" + "<br>");
// }


//Task : 6
// var date = new Date();
// document.write("Current Date: " + date + "<br>" + "<br>");
// var milliSecondsSinceJan1_1970 = date.getTime();
// document.write("Ellapsed milliseconds since January 1, 1970: " + milliSecondsSinceJan1_1970 + "<br>" + "<br>");
// var minutesSinceJan1_1970 = (milliSecondsSinceJan1_1970 / 60000);
// document.write("Ellapsed minutes since January 1, 1970: " + minutesSinceJan1_1970 + "<br>" + "<br>");

//Task :7
// var date = new Date();
// var amORpm = date.getHours();
// if (amORpm < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


//Task :8