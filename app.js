// // Chap 26-30
// // Q.1
// var user = +prompt("Enter any Positive Integer")
// document.write("number: " + user + "<br>" + "round off value: " + Math.round(user) + "<br>" + "floor number: " + Math.floor(user) + "<br>" + "ceil number: " + Math.ceil(user) + "<br>")

// // Q.2
// var user = +prompt("Enter any Negative Floating Point")
// document.write("number: " + user + "<br>" + "round off value: " + Math.round(user) + "<br>" + "floor number: " + Math.floor(user) + "<br>" + "ceil number: " + Math.ceil(user) + "<br>")

// // Q.3
// var val = -4
// var absval = Math.abs(val)
// document.write("The Absolute value of " + val + " is " + absval + "<br>")

// // Q.4
// for (var i = 0; i < 2; i++) {
//     var ran = Math.ceil(6 * Math.random())
//     document.write("Random dice value is" + ran + "<br>")
// }

// // Q.5
// for (var i = 0; i < 2; i++) {
//     var ran = Math.ceil(2 * Math.random())
//     if (ran == 1) {
//         document.write(ran + "<br>")
//         document.write("Random coin value: Tails" + "<br>")
//     } else {
//         document.write(ran + "<br>")
//         document.write("Random coin value: Heads" + "<br>")
//     }
// }

// // Q.6
// var rndm = Math.ceil((100 * Math.random()))
// document.write("random number between 1 and 100: " + rndm)

// // Q.7
// var user = prompt("Enter your weight in kilograms")
// document.write("the weight of user is: " + user + "kilograms")

// // Q.8
// var scrt = Math.ceil((10 * Math.random()))
// var user = +prompt("Enter number between 1 and 10")
// for (var i = 0; i < 10; i++) {
//     if (user == scrt) {
//         alert("Congratulations! you have entered correct value ")
//         break
//     } else {
//         alert("Try Again!")
//         break

//     }
// }


// // Chap 31-34
// // Q.1
// var cdate = new Date()
// document.write(cdate)

// // Q.2
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var cdate = new Date()
// var cmon = cdate.getMonth()
// document.write("Current Month: " + month[cmon])

// // Q.3
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var cdate = new Date()
// var cday = cdate.getDay()
// document.write("Today is: " + days[cday])

// // Q.4
// var cdate = new Date()
// var cday = cdate.getDay()
// if (cday == 1 && cday == 0) {
//     alert("“It’s Fun day")
// }

// // Q.5
// var cdate = new Date()
// var cdate = cdate.getDate()
// if (cdate <= 15) {
//     document.write("First fifteen days of the month")
// } else {
//     document.write("Last days of the month")
// }

// // Q.6
// var cdate = new Date()
// document.write("Current Date: " + cdate)
// document.write("Ellapsed millisecond since January 1, 1970: " + cdate.getMilliseconds)
// document.write("Ellapsed minutes since January 1, 1970: " + cdate.getMinutes)

// // Q.7
// var cdate = new Date()
// var chours = cdate.getHours
// if (chours < 12) {
//     document.write("“Its AM")
// } else {
//     document.write("“Its PM")
// }

// // Q.8
// var laterDate = new Date("Dec 31, 2020")
// document.write("Later date: " + laterDate)

// // Q.9
// var BFR = new Date("June 18, 2015")
// var BFRD = BFR.getTime()

// var cdate = new Date()
// var ctime = cdate.getTime
// document.write((Math.round((cdate - BFRD) / (1000 * 60 * 60 * 24))) + " days have passed since 1st ramadan, 2015 ")

// Q.10
// var refdate = new Date("Dec 5, 2015")
// var refsec = refdate.getTime
// var date = new Date("Jan 1, 2015")
// var datesec = date.getTime
// document.write("On reference of "+ refdate+", "+ ((refsec-datesec)/1000)+ " seconds has passed since beggininig of 2015")

// // Q.11
// var cdate = new Date()
// var cdatetime = cdate.getTime()


// var subhour = cdatetime - (1000 * 60 * 60)
// var aftersub = new Date(subhour)

// document.write("Current date: " + cdate + "<br>")
// document.write("1 hour ago, it was: " + aftersub)


// // Q.11
// var cdate = new Date()
// var cdatetime = cdate.getTime()


// var hundback = cdatetime - (1000 * 60 * 60 * 24 * 365 * 100)
// var hundbackdate = new Date(hundback)

// document.write("Current date: " + cdate + "<br>")
// document.write("100 years back, it was: " + hundbackdate)


// // Q.13
// var Input = prompt("Enter Your date of Birth");
// var dateob = new Date(Input)
// var dobY = dateob.getFullYear()
// var userdobt = dateob.getTime()


// var today = new Date()
// var currenttime = today.getTime()


// var diff = currenttime - userdobt

// var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))

// document.write("Your age is " + age)
// document.write("Your Birth Year is " + dobY)


// // Q.14
// document.write("Customer Name: ABC Costumer")
// var date = new Date()
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var cmon = date.getMonth()
// document.write("Month: " + month[cmon])
// document.write("Number of Units: 410")
// document.write("Charges perunit: 16")
// document.write("Net Amount payable (witin Due Date): 6560")
// document.write("Late Payment Surcharge: 350")
// document.write("Gross Amount payable (after due date): 6910")



// // Chap 35-38

// // Q.1
// function cdt(){
//     var a= new Date();
//     document.write (a)
// }
// cdt();

// //  Q.2
// function greeting (){
//     var firstname = prompt("Enter your first name");
//     var lastname = prompt("Enter your last name");
// document.write( "your Complete name is " + firstname +" " + lastname )
// }
// greeting();

// // Q.3

// var a = +prompt("Enter first value")
// var b = +prompt("Enter second value")
// function add(){
//     var c = a+b;
//     return c;
// }
// document.write(add())

// // Q.4
// function calculator()
// {
// var a= +prompt("first value")
// var b= +prompt("second value")
// var operator= prompt("operator sign")
// if(operator==="+"){
//     document.write("Answer is " + (a+b))
// }
// else if(operator==="-"){
//     document.write("Answer is " + (a-b))
// }
// else if(operator==="*"){
//     document.write("Answer is " + (a*b))
// }
// else if(operator==="/"){
//     document.write("Answer is " + (a/b))
// }}
// calculator()

// // Q.5
// function square(){
//     var x=+prompt("enter a number")
// alert("Your Answer is "+  (x*x))
// }
// square()

// // Q.6
// function factorial(){
// var number = prompt('Enter a number: ');
// if (number < 0) {
//     alert('Error! Factorial for negative number does not exist.');
// }
// else if (number === 0) {
//     alert(`The factorial of ${number} is 1.`);
// }
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     alert(`The factorial of ${number} is ${fact}.`);
// }
// }
// factorial();

// // Q.7
// var a = +prompt("Enter start value")
// var b = +prompt("Enter end value")
// var c = b - a
// function count() {
//     for (var i = 0; i <= c; i++) {
//         document.write(a + "<br>")
//         a = a + 1
//     }
// }
// count();


// // Chap 38-42
// // Q.1
// var x = +prompt("Enter number")
// var y = +prompt("Enter number")

// function custom(a, b) {
//     var power = a ** b
//     document.write(power)
// }
// custom(x, y)

// // Q.2
// var year = +prompt("Enter year to check it is leap year or not")

// function leapyear() {
//     if ((year % 4) === 0) {
//         if ((year % 100) === 0) {
//             if ((year % 400) === 0) {
//                 document.write("The year is a leap year (it has 366 days).")
//             } else {
//                 document.write("The year is not a leap year (it has 365 days).")
//             }
//         } else {
//             document.write("The year is a leap year (it has 366 days).")
//         }
//     } else {
//         document.write("The year is not a leap year (it has 365 days).")
//     }
// }
// leapyear()

// // Q.3
// var a = +prompt("Enter first length of triangle")
// var b = +prompt("Enter second length of triangle")
// var c = +prompt("Enter third length of triangle")
// function for_S() {
//     var S = (a + b + c) / 2
//     return S
// }
// function areaoftriangle() {
//     var S = for_S()
//     var area = S * (S - a) * (S - b) * (S - c)
//     document.write("The area of triangle is " + area)
// }
// areaoftriangle()

// // Q.4
// var a = +prompt("Marks in Sub1")
// var b = +prompt("Marks in Sub2")
// var c = +prompt("Marks in Sub3")
// function average() {
//     var avg = (a + b + c) / 3
//     return avg
// }
// function percentage() {
//     var perc = ((a + b + c)/300)*100
//     return perc
// }
// function mainFunction() {
//     var Average = average()
//     var Percentage = percentage()

//     document.write("The averge number is: " + Average)
//     document.write("The percentage gained is: " + Percentage)
// }
// mainFunction

// // Q.5
// var text = "Awais"

// function wordIndexOf() {
//     for (var i = 0; i < text.length; i++) {
//         if (text[i] == "i") {
//             var wordindex = i
//             break
//         }
//     }
//     return wordindex
// }
// document.write("The index number is: " + wordIndexOf())

// Q.6
// var text = prompt("Enter sentence in 25 alphabet only")
// function wordIndexOf() {
//     for (var i = 0; i < text.length; i++) {
//         if (text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") {
//             text = " " + text.slice(0, i) + text.slice(i + 1)
//             i = 0
//         }
//     }
//     document.write(text)
// }
// wordIndexOf()

// Q.7