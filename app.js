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

// setYear(myDate, 2025); // Set the year to 2025
// console.log("Date with year set to 2025:", myDate);

// let word = "hello";
// let result = countLetters(word);
// console.log("Letter counts:", result);
var date =  new Date();
var dayOfMonth = date.getDate();
var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var week=date.getDay();
var months=["January","Feburary","March","April","May","June","July","August","September","Octuber","November","December"]
// Q#1
document.write(date)
document.write("<br>")
// Q#2
document.write("Current Month "+months[date.getMonth()])
document.write("<br>")
// Q#3
document.write("Today is \n"+day[date.getDay()])
document.write("<br>")
// Q#4
if(day===7){
    document.write("Fun day")
}
if(day===0){
    document.write("Fun day")
}
if(week<6){
    document.write("Working day"+day[date.getDay()])
}
document.write("<br>")
// document.write(week)
// Q#5
if(dayOfMonth<16){
document.write("First fifteen days of the month")
}
if(dayOfMonth>15){
    document.write("last fifteen days of the month")
};
document.write("<br>")
// Q#6
var specificDate = new Date(1970, 0, 1);
document.write(specificDate.getTime())
document.write("<br>")
// Q#7
var currentHrs = date.getHours();
if(currentHrs<13){
    document.write(currentHrs+"\n Am")
}if(currentHrs>12){
    document.write(currentHrs+"\n Pm")
}
document.write("<br>")
// Q#8
var Laterdate=new Date(2020 ,11 ,31)
document.write(Laterdate)
document.write("<br>")
// Q#9
var Ramzanrimind=new Date(2015, 6 ,15)
document.write(Ramzanrimind.getTime())