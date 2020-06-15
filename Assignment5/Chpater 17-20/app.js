//Task : 1

// var multiD_array = [
//     [],
//     [],
//     [],
//     []
// ];

// 2. Declare and initialize a multidimensional array representing the following matrix:

// var multiD_array_matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// document.write("<h1>" + "<b>" + "Multi Dimensional Array with Matrix Structure" + "</b>" + "</h1>");

// document.write(multiD_array_matrix[0][0] + " " +
//     multiD_array_matrix[0][1] + " " +
//     multiD_array_matrix[0][2] + " " +
//     multiD_array_matrix[0][3] + "<br>" +
//     multiD_array_matrix[1][0] + " " +
//     multiD_array_matrix[1][1] + " " +
//     multiD_array_matrix[1][2] + " " +
//     multiD_array_matrix[1][3] + "<br>" +
//     multiD_array_matrix[2][0] + " " +
//     multiD_array_matrix[2][1] + " " +
//     multiD_array_matrix[2][2] + " " +
//     multiD_array_matrix[2][3] + "<br>" + "<br>");

//Task3
// for (var a = 0; a <= 10; a++) {
//     document.write(a + "<br>");

// }


//Task: 4
// var j = +prompt("Enter a number to show its multiplication table");
// var k = +prompt("Enter a multiplication table");

// for (i = 0; i <= k; i++) {
//     document.write(j + "x" + i + "=" + j * i + "<br>");
// }


//Task  : 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// document.write("<br>" + "<br>");
// for (var j = 0; j < fruits.length; j++) {
//     document.write("Element at index " + j + " is " + fruits[j] + "<br>");
// }



//Task : 8

// var arr = [9999, 20000, 193, 007, 0202007];
// document.write("<h1>" + "<b>" + "array items:" + "</b>" + "</h1>" + "<br>");
// document.write(arr + "<br>");
// var A_arr = Math.max.apply(Math, arr);
// document.write("<h2>" + "<b>" + "largest element of array is:" + "</b>" + "</h2>" + "<br>");
// document.write(A_arr + "<br>");


//Task :9


// var arr = [00, 45, 1243, 87, 907];
// document.write("<h1>" + "<b>" + "array items:" + "</b>" + "</h1>" + "<br>");
// document.write(arr + "<br>");
// var S_arr = Math.min.apply(Math, arr);
// document.write("<h2>" + "<b>" + "smallest element of array is:" + "</b>" + "</h2>" + "<br>");
// document.write(S_arr + "<br>");





//Task : 10
// document.write("<h1>" + "<b>" + "multiples of 5 ranging 1 to 100 are:" + "</b>" + "</h1>" + "<br>");

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         document.write(i + ",");
//     }
// }