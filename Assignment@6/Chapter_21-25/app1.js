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

var word = "hello world";
var index = word.lastIndexOf("l");
alert("Index of l is : " + index);


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