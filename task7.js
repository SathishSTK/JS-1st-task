// =====================================================
// JAVASCRIPT PRACTICE TASKS - 1 TO 20
// =====================================================


// =====================================================
// TASK 1: Student Registration
// Variables + Object + If Else
// =====================================================

console.log("========== TASK 1 ==========");

let student = {
    name: "Sathish",
    age: 25,
    department: "Electrical&Electronics Engineering",
    courseFee: 50000
};

console.log("Name :", student.name);
console.log("Age :", student.age);
console.log("Department :", student.department);
console.log("Course Fee :", student.courseFee);

if (student.age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// =====================================================
// TASK 2: Employee Salary Calculator
// Functions
// =====================================================

console.log("\n========== TASK 2 ==========");

function calculateSalary(basicSalary, bonus, deduction) {

    let totalSalary = basicSalary + bonus - deduction;

    return totalSalary;
}

let basicSalary = 45000;
let bonus = 5000;
let deduction = 2000;

let totalSalary = calculateSalary(
    basicSalary,
    bonus,
    deduction
);

console.log("Basic Salary :", basicSalary);
console.log("Bonus :", bonus);
console.log("Deduction :", deduction);
console.log("Total Salary :", totalSalary);


// =====================================================
// TASK 3: Shopping Cart
// Array
// =====================================================

console.log("\n========== TASK 3 ==========");

let cart = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Headphone"
];

console.log("Original Cart :", cart);

// Add one product
cart.push("Webcam");

console.log("After Adding :", cart);

// Remove last product
cart.pop();

console.log("After Removing :", cart);

// Total products
console.log("Total Products :", cart.length);

// First product
console.log("First Product :", cart[0]);

// Last product
console.log("Last Product :", cart[cart.length - 1]);


// =====================================================
// TASK 4: Login Validation
// If Else
// =====================================================

console.log("\n========== TASK 4 ==========");

let storedUsername = "admin";
let storedPassword = "12345";

let enteredUsername = "admin";
let enteredPassword = "12345";

if (
    enteredUsername === storedUsername &&
    enteredPassword === storedPassword
) {
    console.log("Login Success");
} else {
    console.log("Invalid Username or Password");
}


// =====================================================
// TASK 5: Movie Ticket Booking
// Ternary Operator
// =====================================================

console.log("\n========== TASK 5 ==========");

let movieAge = 20;

let movieResult = movieAge >= 18
    ? "Eligible"
    : "Not Eligible";

console.log(movieResult);


// =====================================================
// TASK 6: Employee Search
// Array + Find
// =====================================================

console.log("\n========== TASK 6 ==========");

let employees = [
    {
        name: "Arun",
        salary: 25000
    },
    {
        name: "Kavin",
        salary: 40000
    },
    {
        name: "Ravi",
        salary: 55000
    }
];

let searchedEmployee = employees.find(
    employee => employee.name === "Kavin"
);

console.log("Employee Details :");
console.log(searchedEmployee);


// =====================================================
// TASK 7: Product Filter
// Filter
// =====================================================

console.log("\n========== TASK 7 ==========");

let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 400
    },
    {
        name: "Keyboard",
        price: 800
    },
    {
        name: "Headphone",
        price: 450
    },
    {
        name: "Monitor",
        price: 12000
    }
];

let cheapProducts = products.filter(
    product => product.price < 500
);

console.log("Products Below ₹500 :");
console.log(cheapProducts);


// =====================================================
// TASK 8: Student Marks
// Map
// =====================================================

console.log("\n========== TASK 8 ==========");

let marks = [45, 56, 67, 89];

let newMarks = marks.map(
    mark => mark + 5
);

console.log("Original Marks :", marks);
console.log("New Marks :", newMarks);


// =====================================================
// TASK 9: Attendance Checker
// Every
// =====================================================

console.log("\n========== TASK 9 ==========");

let studentMarks = [90, 85, 70, 65];

let allAbove50 = studentMarks.every(
    mark => mark > 50
);

console.log("Every student scored above 50 :", allAbove50);


// =====================================================
// TASK 10: OTP Generator
// Math + String
// =====================================================

console.log("\n========== TASK 10 ==========");

let otp = Math.floor(
    100000 + Math.random() * 900000
);

console.log("Generated OTP :", otp);


// =====================================================
// TASK 11: Password Strength Checker
// String
// =====================================================

console.log("\n========== TASK 11 ==========");

let password = "Abc@1234";

let hasMinimumLength = password.length >= 8;

let hasNumber = /[0-9]/.test(password);

let hasUppercase = /[A-Z]/.test(password);

let hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

if (
    hasMinimumLength &&
    hasNumber &&
    hasUppercase &&
    hasSpecialCharacter
) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}


// =====================================================
// TASK 12: Product Search
// Includes
// =====================================================

console.log("\n========== TASK 12 ==========");

let productList = [
    "Laptop",
    "Mobile",
    "Watch",
    "Camera"
];

let searchProduct = "Mobile";

if (productList.includes(searchProduct)) {
    console.log("Available");
} else {
    console.log("Not Available");
}


// =====================================================
// TASK 13: Current Digital Clock
// Date + setInterval
// =====================================================

console.log("\n========== TASK 13 ==========");

function digitalClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    console.log(
        `${hours}:${minutes}:${seconds} ${ampm}`
    );
}

// Uncomment to run the clock
// setInterval(digitalClock, 1000);


// =====================================================
// TASK 14: Countdown Timer
// setInterval
// =====================================================

console.log("\n========== TASK 14 ==========");

let countdown = 10;

console.log(countdown);

// Uncomment to start countdown

let timer = setInterval(() => {

    countdown--;

    console.log(countdown);

    if (countdown === 0) {
        clearInterval(timer);
        console.log("Time Up!");
    }

}, 1000);

// =====================================================
// TASK 15: Fake API Product Viewer
// Fetch API
// =====================================================

console.log("\n========== TASK 15 ==========");

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {

        data.forEach(product => {

            console.log("Product Name :", product.title);
            console.log("Price :", product.price);
            console.log("Image :", product.image);
            console.log("--------------------------");

        });

    })
    .catch(error => {

        console.log("Error :", error);

    });


// =====================================================
// TASK 16: Employee Dashboard
// Reduce
// =====================================================

console.log("\n========== TASK 16 ==========");

let employeeList = [
    {
        name: "Arun",
        salary: 25000
    },
    {
        name: "Kavin",
        salary: 40000
    },
    {
        name: "Ravi",
        salary: 55000
    },
    {
        name: "Rahul",
        salary: 45000
    }
];

// Total Salary

let totalEmployeeSalary = employeeList.reduce(
    (total, employee) => total + employee.salary,
    0
);

// Average Salary

let averageSalary =
    totalEmployeeSalary / employeeList.length;

// Highest Salary

let highestSalary = employeeList.reduce(
    (highest, employee) =>
        employee.salary > highest
            ? employee.salary
            : highest,
    0
);

console.log("Total Salary :", totalEmployeeSalary);
console.log("Average Salary :", averageSalary);
console.log("Highest Salary :", highestSalary);


// =====================================================
// TASK 17: Online Food Order
// Array
// =====================================================

console.log("\n========== TASK 17 ==========");

let foodMenu = [
    {
        name: "Pizza",
        price: 250
    },
    {
        name: "Burger",
        price: 150
    },
    {
        name: "Shawarma",
        price: 180
    },
    {
        name: "Fries",
        price: 100
    }
];

let foodCart = [];

// Add item

foodCart.push(foodMenu[0]);
foodCart.push(foodMenu[1]);
foodCart.push(foodMenu[3]);

console.log("Food Cart :", foodCart);

// Remove item

foodCart.pop();

console.log("After Removing :", foodCart);

// Total Items

console.log("Total Items :", foodCart.length);

// Print Bill

let foodTotal = foodCart.reduce(
    (total, food) => total + food.price,
    0
);

console.log("Total Bill :", foodTotal);


// =====================================================
// TASK 18: Bank Account
// Object + Functions
// =====================================================

console.log("\n========== TASK 18 ==========");

let bankAccount = {

    accountHolder: "Rahul",

    balance: 25000,

    deposit(amount) {
        this.balance += amount;

        console.log("Deposit Amount :", amount);
    },

    withdraw(amount) {

        if (amount <= this.balance) {

            this.balance -= amount;

            console.log("Withdraw Amount :", amount);

        } else {

            console.log("Insufficient Balance");

        }
    },

    checkBalance() {

        console.log(
            "Current Balance :",
            this.balance
        );

    }
};

console.log(
    "Account Holder :",
    bankAccount.accountHolder
);

bankAccount.checkBalance();

bankAccount.deposit(5000);

bankAccount.checkBalance();

bankAccount.withdraw(3000);

bankAccount.checkBalance();


// =====================================================
// TASK 19: To-Do List
// Add / Delete / Update / Show
// =====================================================

console.log("\n========== TASK 19 ==========");

let todoList = [];

// Add Task

function addTask(task) {

    todoList.push(task);

}

// Delete Task

function deleteTask(index) {

    todoList.splice(index, 1);

}

// Update Task

function updateTask(index, newTask) {

    todoList[index] = newTask;

}

// Show All Tasks

function showTasks() {

    console.log("To-Do List :");

    todoList.forEach(
        (task, index) => {
            console.log(
                `${index + 1}. ${task}`
            );
        }
    );

}

addTask("Learn JavaScript");
addTask("Practice Array Methods");
addTask("Build Project");

showTasks();

updateTask(
    1,
    "Practice Advanced JavaScript"
);

console.log("After Update :");

showTasks();

deleteTask(0);

console.log("After Delete :");

showTasks();


// =====================================================
// TASK 20: Mini E-Commerce Product Management
// Objects + Array + Find + Filter + Reduce
// =====================================================

console.log("\n========== TASK 20 ==========");

let ecommerceProducts = [

    {
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        stock: 10
    },

    {
        name: "Mobile",
        price: 25000,
        category: "Electronics",
        stock: 20
    },

    {
        name: "Shirt",
        price: 1200,
        category: "Fashion",
        stock: 30
    },

    {
        name: "Shoes",
        price: 2500,
        category: "Fashion",
        stock: 15
    }

];


// Add Product

function addProduct(
    name,
    price,
    category,
    stock
) {

    let product = {

        name: name,
        price: price,
        category: category,
        stock: stock

    };

    ecommerceProducts.push(product);

}

addProduct(
    "Headphone",
    2000,
    "Electronics",
    25
);

console.log(
    "After Adding Product :",
    ecommerceProducts
);


// Search Product

function searchProductByName(name) {

    let result = ecommerceProducts.find(
        product =>
            product.name.toLowerCase() ===
            name.toLowerCase()
    );

    return result;

}

console.log(
    "Search Result :",
    searchProductByName("Mobile")
);


// Filter by Category

function filterByCategory(category) {

    return ecommerceProducts.filter(
        product =>
            product.category.toLowerCase() ===
            category.toLowerCase()
    );

}

console.log(
    "Electronics Products :",
    filterByCategory("Electronics")
);


// Total Stock

let totalStock = ecommerceProducts.reduce(
    (total, product) =>
        total + product.stock,
    0
);

console.log(
    "Total Stock :",
    totalStock
);


// Total Inventory Value

let totalInventoryValue =
    ecommerceProducts.reduce(
        (total, product) =>
            total +
            (product.price * product.stock),
        0
    );

console.log(
    "Total Inventory Value :",
    totalInventoryValue
);


// =====================================================
// END OF ALL 20 TASKS
// =====================================================

console.log("\n========== ALL TASKS COMPLETED ==========");