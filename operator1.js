// ================================
// Task 1 - Employee Profile
// ================================
let empName = "Sathish";
let employeeId = "EMP1001";
let department = "Frontend";
let salary = 25000;
let isPermanent = true;

console.log("Task 1 - Employee Profile");
console.log("Name :", empName);
console.log("Employee ID :", employeeId);
console.log("Department :", department);
console.log("Salary :", salary);
console.log("Permanent :", isPermanent);


// ================================
// Task 2 - Student Details
// ================================
let student = {
    name: "Dinesh",
    age: 25,
    course: "BE",
    college: "ANNA UNIVERCITY COLLEGE",
    passed: true
};

console.log("\nTask 2 - Student Details");
console.log("Student Name :", student.name);
console.log("Course :", student.course);
console.log("Passed Status :", student.passed);


// ================================
// Task 3 - Shopping Cart
// ================================
let cart = ["Milk", "Rice", "Oil", "Sugar", "Soap"];

console.log("\nTask 3 - Shopping Cart");
console.log("First Product :", cart[0]);
console.log("Third Product :", cart[2]);
console.log("Last Product :", cart[4]);
console.log("Total Products :", cart.length);


// ================================
// Task 4 - Company Employee Database
// ================================
let employee = {
    name: "Sathish",
    designation: "Software Developer",
    salary: 35000,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

console.log("\nTask 4 - Company Employee Database");
console.log("Employee Name :", employee.name);
console.log("Designation :", employee.designation);
console.log("Second Skill :", employee.skills[1]);


// ================================
// Task 5 - Salary Calculation
// ================================
let basicSalary = 25000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;

console.log("\nTask 5 - Salary Calculation");
console.log("Total Salary :", totalSalary);


// ================================
// Task 6 - GST Calculator
// ================================
let productPrice = 4500;
let gst = 18;

let gstAmount = (productPrice * gst) / 100;
let finalAmount = productPrice + gstAmount;

console.log("\nTask 6 - GST Calculator");
console.log("GST Amount :", gstAmount);
console.log("Final Amount :", finalAmount);


// ================================
// Task 7 - Even or Odd
// ================================
let number = 25;

console.log("\nTask 7 - Even or Odd");
console.log(number % 2 === 0 ? "Even Number" : "Odd Number");


// ================================
// Task 8 - Login System
// ================================
let username = "admin";
let password = 12345;

console.log("\nTask 8 - Login System");

if (username === "admin" && password === 12345) {
    console.log("Login Success");
} else {
    console.log("Invalid Credentials");
}


// ================================
// Task 9 - Voting Eligibility
// ================================
let age = 22;

console.log("\nTask 9 - Voting Eligibility");
console.log(age >= 18 ? "Eligible for Vote" : "Not Eligible");


// ================================
// Task 10 - EMI Eligibility
// ================================
let monthlySalary = 40000;
let experience = 3;

console.log("\nTask 10 - EMI Eligibility");

if (monthlySalary > 30000 && experience >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// ================================
// Task 11 - Product Discount
// ================================
let price = 5000;
let discount = 10;

let discountAmount = (price * discount) / 100;
let finalPrice = price - discountAmount;

console.log("\nTask 11 - Product Discount");
console.log("Discount Amount :", discountAmount);
console.log("Final Price :", finalPrice);


// ================================
// Task 12 - User Registration
// ================================
let userName = "Sathish";
let email = "sathish@gmail.com";
let phone = "9876543210";
let city = "Chennai";

console.log("\n----- User Details -----");
console.log("Name :", userName);
console.log("Email :", email);
console.log("Phone :", phone);
console.log("City :", city);


// ================================
// Task 13 - Social Media Profile
// ================================
let profile = {
    username: "sathish",
    followers: 1500,
    following: 500,
    posts: 120,
    verified: true
};

console.log("\nTask 13 - Social Media Profile");
console.log("Username :", profile.username);
console.log("Followers :", profile.followers);
console.log("Verified Status :", profile.verified);


// ================================
// Task 14 - Restaurant Menu
// ================================
let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"];

console.log("\nTask 14 - Restaurant Menu");
console.log("Second Item :", menu[1]);
console.log("Fourth Item :", menu[3]);
console.log("Last Item :", menu[4]);


// ================================
// Task 15 - Banking System
// ================================
let accountBalance = 25000;
let withdraw = 8000;

let remainingBalance = accountBalance - withdraw;

console.log("\nTask 15 - Banking System");
console.log("Remaining Balance :", remainingBalance);


// ================================
// Task 16 - Mobile Store
// ================================
let mobilePrice = 25000;
let exchange = 5000;
let coupon = 2000;

let finalMobileAmount = mobilePrice - exchange - coupon;

console.log("\nTask 16 - Mobile Store");
console.log("Final Amount :", finalMobileAmount);


// ================================
// Task 17 - Employee Promotion
// ================================
let exp = 5;
let performance = true;

console.log("\nTask 17 - Employee Promotion");

if (exp >= 5 && performance === true) {
    console.log("Promotion Approved");
} else {
    console.log("Promotion Pending");
}


// ================================
// Task 18 - Movie Ticket
// ================================
let ticketPrice = 180;
let people = 5;

let totalAmount = ticketPrice * people;

console.log("\nTask 18 - Movie Ticket");
console.log("Total Amount :", totalAmount);


// ================================
// Task 19 - Weather App
// ================================
let temperature = 38;

console.log("\nTask 19 - Weather App");
console.log(temperature >= 35 ? "Hot Day" : "Normal Weather");


// ================================
// Task 20 - Mini HR Management
// ================================
let employeeDetails = {
    empCode: "EMP1001",
    name: "Sathish",
    department: "Frontend",
    designation: "Associate Software Engineer",
    salary: 28000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    permanent: true
};

console.log("\nTask 20 - Mini HR Management");
console.log("Employee Code :", employeeDetails.empCode);
console.log("Employee Name :", employeeDetails.name);
console.log("Department :", employeeDetails.department);
console.log("Salary :", employeeDetails.salary);
console.log("Last Skill :", employeeDetails.skills[3]);
console.log("Permanent Status :", employeeDetails.permanent);