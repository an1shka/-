// alert("hello")
// console.log("hello from console")

// let a = 5
// const b = false
// let c = 6

// console.log(a, b)

// console.log(a + c)
// console.log(a - c)
// console.log(a * c)
// console.log(a / c)
// console.log(a % c)
// // console.log(a ** c)

// a = Number(prompt("enter your age: "))
// console.log(a)
// confirm("are you sure?: ")

// let x = 10
// x = "stroka"

// const y = 10
// y = "stroka"

// console.log(x)
// console.log(y)

// console.log(5 + "5")

//zadanie
// 1
// console.log("amir")
// console.log(17)

//2
// a = String(prompt("enter ypur name: "))
// console.log(a)
// b = Number(prompt("enter your age: "))
// console.log(b)

//3
// a = Number(prompt("enter first number: "))
// b = Number(prompt("enter second number: "))
// console.log(a + b)

//4
// let a = 5
// a = a + 1
// console.log(a)


// let day = Number(prompt("enter day(1-7):"))

// if (day == 1){
//     console.log("Monday")
// }
// else if (day == 2){
//     console.log("Tuesday")
// }
// else if (day == 3){
//     console.log("Wednesday")
// }
// else if (day == 4){
//     console.log("Thursday")
// }
// else if (day == 5){
//     console.log("Friday")
// }
// else if (day == 6){
//     console.log("Saturday")
// }
// else if (day == 7){
//     console.log("Sunday")
// }
// else{
//     console.log("invalid day")
// }

// let day = Number(prompt("enter day(1-7): "))

// switch (day){
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log("invalid day")
// }





//zadania

//1
// let a = Number(prompt("enter number: "))
// if (a > 0){
//     console.log("positive")
// }
// else if (a < 0){
//     console.log("negative")
// }
// else{
//     console.log("zero")
// }

//2
// let a = Number(prompt("enter number: "))
// if (a % 4 == 0){
//     console.log("делится на 4 и четное")
// }
// else if (a % 2 == 0){
//     console.log("четное")
// }
// else if (a % 2 != 0){
//     console.log("нечетное")
// }
// else{
//     console.log("неизвестное число")
// }

//3
// let a = Number(prompt("enter first number: "))
// let b = Number(prompt("enter second number: "))
// let c = (prompt("enter operation (+, -, *, /): "))

// if (c == "+"){
//     console.log(a + b)
// }
// else if (c == "-"){
//     console.log(a - b)
// }
// else if (c == "*"){
//     console.log(a * b)
// }
// else if (c == "/"){
//     console.log(a / b)
// }
// else{
//     console.log("invalid operation")
// }

//4
// let a = Number(prompt("enter first number: "))
// let b = Number(prompt("enter second number: "))

// if (a > b){
//     console.log(a)
// }
// else if (a < b){
//     console.log(b)
// }
// else if (a == b){
//     console.log("numbers are =")
// }
// else{
//     console.log("invalid numbers")
// }

//5

// let a = Number(prompt("enter first number: "))
// let b = Number(prompt("enter second number: "))
// let c = Number(prompt("enter third number: "))

// if (a > b && a > c){
//     console.log(a)
// }
// else if (b > a && b > c){
//     console.log(b)
// }
// else if (c > a && c > b){
//     console.log(c)
// }
// else{
//     console.log("numbers are =")
// }

//6
// let a = prompt("enter login: ")
// let b = Number(prompt("enter passwod: "))

// if (a == "admin" && b == 1234){
//     console.log("Добро пожаловать")
// }
// else{
//     console.log("error")
// }

//7
// let a = Number(prompt("enter grade: "))
// if (a >= 90 && a <= 100){
//     console.log("A")
// }
// else if (a >= 70 && a < 90){
//     console.log("B")
// }
// else if (a >= 50  && a < 70){
//     console.log("C")
// }
// else if (a < 50){
//     console.log("D")
// }
// else{
//     console.log("error")
// }

//8
// let a = Number(prompt("enter summa: "))

// if (a >= 500 && a < 1000){
//     console.log("скидка 10% = ", a - (a * 0.1))
// }
// else if (a >= 1000){
//     console.log("скидка 20% = ", a - (a * 0.2))
// }
// else{
//     console.log("скидки нет, суммка к оплате = ", a)
// }

//9
// let temp = Number(prompt("Enter temperature: "))

// if (temp < 0){
//     console.log("холодно")
// }
// else if (temp >= 0 && temp <= 20){
//     console.log("Прохладно")
// }
// else if (temp > 20 && temp <= 30){
//     console.log("норм")
// }
// else if (temp > 30){
//     console.log("жара")
// }
// else{
//     console.log("error")
// }

//10
// let a = prompt("enter password: ")

// if (a.length >= 6){
//     console.log("ok")
// }
// else {
//     console.log("ne ok")
// }

//11
let a = prompt("enter: ")

if (typeof a == "number"){
    console.log("number")
}
else{
    console.log("not number")
}