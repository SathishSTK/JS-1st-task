//Task 1 - Employee Date Management System

//Employee Details
let employeeName = "Sathish";

// Create Date
let joiningDate = new Date();

// SET METHODS

joiningDate.setFullYear(2026);
joiningDate.setMonth(6);
joiningDate.setDate(22);
joiningDate.setHours(9);
joiningDate.setMinutes(00);
joiningDate.setSeconds(00);

// GET METHODS

let year = joiningDate.getFullYear();
let month = joiningDate.getMonth();
let date = joiningDate.getDate();
let day = joiningDate.getDay();
let hours = joiningDate.getHours();
let minutes = joiningDate.getMinutes();
let seconds = joiningDate.getSeconds();

// DISPLAY EMPLOYEE DETAILS

console.log("Employee Name : " + employeeName);
console.log("Joining Year : " + year);
console.log("Joining Month : " + month);
console.log("Joining Date : " + date);

console.log("Joining Hours : " + hours);
console.log("Joining Minutes : " + minutes);
console.log("Joining Seconds : " + seconds);

//Task 2 - Bus Ticket Booking System

//Passenger Details
let passengerName = "Sathish";
let busName = "YBM Travels";
let ticketPrice = 750;
let seats = 2;

// Create Date
let travelDate = new Date();

// SET METHODS
travelDate.setFullYear(2024);
travelDate.setMonth(6);
travelDate.setDate(20);
travelDate.setHours(22);
travelDate.setMinutes(30);
travelDate.setSeconds(0);

// GET METHODS

// let year = travelDate.getFullYear();
// let month = travelDate.getMonth() + 1;
// let date = travelDate.getDate();
// let day = travelDate.getDay();

// let hours = travelDate.getHours();
// let minutes = travelDate.getMinutes();
// let seconds = travelDate.getSeconds();

// Calculate Ticket Amount

let totalAmount = ticketPrice * seats;

// Display Ticket Details

console.log("Passenger Name : " + passengerName);
console.log("Bus Name : " + busName);
console.log("Ticket Price : " + ticketPrice);
console.log("Number of Seats : " + seats);
console.log("Total Amount : " + totalAmount);

console.log("Travel Year : " + year);
console.log("Travel Month : " + month);
console.log("Travel Date : " + date);
console.log("Travel Day : " + day);

console.log("Travel Hours : " + hours);
console.log("Travel Minutes : " + minutes);
console.log("Travel Seconds : " + seconds);

console.log("Ticket Booking Successful");

// Task 3 - Exam Hall Ticket System

// Student Details
let studentName = "SATHISH";
let registerNumber = 111;
let subject = "JavaScript";
let examFee = 1000;

// Create Date
let examDate = new Date();

// SET METHODS

examDate.setFullYear(2025);
examDate.setMonth(6);
examDate.setDate(10);
examDate.setHours(9);
examDate.setMinutes(30);
examDate.setSeconds(0);

// GET METHODS

// let year = examDate.getFullYear() + 1;
// let month = examDate.getMonth() + 1;
// let date = examDate.getDate() - 3;
// let day = examDate.getDay() + 1;

// let hours = examDate.getHours();
// let minutes = examDate.getMinutes();
// let seconds = examDate.getSeconds();

// Display Hall Ticket

console.log("Student Name : " + studentName);
console.log("Register Number : " + registerNumber);
console.log("Subject : " + subject);
console.log("Exam Fee : " + examFee);

console.log("Exam Year : " + year);
console.log("Exam Month : " + month);
console.log("Exam Date : " + date);
console.log("Exam Day : " + day);

console.log("Exam Hours : " + hours);
console.log("Exam Minutes : " + minutes);
console.log("Exam Seconds : " + seconds);

console.log("Hall Ticket Generated");


// Task 4 - Library Book Return System

//Student Details
let studentName1 = "SATHISH";
let bookName = "JavaScript Programming";
let bookId = 121;

// Create Date
let returnDate = new Date();

// SET METHODS

returnDate.setFullYear(1988);
returnDate.setMonth(9);
returnDate.setDate(15);
returnDate.setHours(22);
returnDate.setMinutes(30);
returnDate.setSeconds(59);

// GET METHODS

// let year = returnDate.getFullYear() + 6;
// let month = returnDate.getMonth() + 1;
// let date = returnDate.getDate() - 7;
// let day = returnDate.getDay() + 5;

// let hours = returnDate.getHours();
// let minutes = returnDate.getMinutes();
// let seconds = returnDate.getSeconds();

// Display Book Details

console.log("Student Name : " + studentName1);
console.log("Book Name : " + bookName);
console.log("Book ID : " + bookId);

console.log("Return Year : " + year);
console.log("Return Month : " + month);
console.log("Return Date : " + date);
console.log("Return Day : " + day);

console.log("Return Hours : " + hours);
console.log("Return Minutes : " + minutes);
console.log("Return Seconds : " + seconds);

console.log("Book Return Date Confirmed");

// Task 5 - Flight Ticket Booking System

// Passenger Details
let passengerName1 = "Sathish";
let flightName = "Indigo";
let ticketPrice1 = 10000;

// Create Date
let travelDate1 = new Date();

// SET METHODS

travelDate1.setFullYear(2026);
travelDate1.setMonth(9);
travelDate1.setDate(6);
travelDate1.setHours(18);
travelDate1.setMinutes(30);
travelDate1.setSeconds(0);

// GET METHODS

// let year = travelDate1.getFullYear() - 4;
// let month = travelDate1.getMonth() + 2;
// let date = travelDate1.getDate();
// let day = travelDate1.getDay();

// let hours = travelDate1.getHours();
// let minutes = travelDate1.getMinutes();
// let seconds = travelDate1.getSeconds();

// Display Booking Details

console.log("Passenger Name : " + passengerName1);
console.log("Flight Name : " + flightName);
console.log("Ticket Price : " + ticketPrice1);

console.log("Travel Year : " + year);
console.log("Travel Month : " + month);
console.log("Travel Date : " + date);
console.log("Travel Day : " + day);

console.log("Travel Hours : " + hours);
console.log("Travel Minutes : " + minutes);
console.log("Travel Seconds : " + seconds);