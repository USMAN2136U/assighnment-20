// let dObj = new Date();
// let dStr = new Date().toString();
// let d = new Date(); // Assuming you have a Date object named d
// let day = d.getDay();
// let date1992 = new Date(1992, 1, 2);
// let date = new Date(); // Create a new Date object
// date.setFullYear(2025); // Change the year to 2025
// function changeMonthToJanuary(date) {
    // Set the month to January (month index 0)
    // date.setMonth(0);
    // return date;
// }
// function displayAlert() {}
// function functionOne() {
//     console.log("Function One called");
// }
// displayName();
// function multiplyAndAssign(param1, param2, param3) {
//     let result = param1 * param2 * param3;
//     return result;

// }function sumNumbers(num1, num2) {
//     return num1 + num2;
// }

// // Example usage:
// let result = sumNumbers(5, 3); // Calling the function with arguments 5 and 3
// console.log("Sum:", result); // Outputting the result

// function sumNumbers(num1, num2) {
//     return num1 + num2;
// }
// // Capture the returned value from the function and store it in a variable
// let result = sumNumbers(5, 3);
// // Output the result stored in the variable
// console.log("Sum:", result);

let myDate = new Date(); // Create a new Date object
console.log("Original date:", myDate);

setYear(myDate, 2025); // Set the year to 2025
console.log("Date with year set to 2025:", myDate);

let word = "hello";
let result = countLetters(word);
console.log("Letter counts:", result);