/*
; Author: Andrew Britt
; Class: WEB-231
; 2022
*/

let firstName = "Bob"
let lastName = "Burger"
let address = "123 A Street"
let hireDate = "12/34/56"
let payRate =  30.783449999999
let payRateFixed = payRate.toFixed(1)

document.getElementById("txtFirstName").innerHTML = firstName; 
document.getElementById("txtLastName").innerHTML = lastName;
document.getElementById("txtAddress").innerHTML = address;
document.getElementById("txtHireDate").innerHTML = hireDate;
document.getElementById("txtPayRate").innerHTML = payRateFixed;

let firstNameTwo = "Rick"
let lastNameTwo = "Sanchez"
let addressTwo = "456 B Street"
let hireDateTwo = "01/01/75"
let payRateTwo = 28.138999
let payRateTwoFixed = payRateTwo.toFixed(1)

document.getElementById("txtFirstNameTwo").innerHTML = firstNameTwo;
document.getElementById("txtLastNameTwo").innerHTML = lastNameTwo;
document.getElementById("txtAddressTwo").innerHTML = addressTwo;
document.getElementById("txtHireDateTwo").innerHTML = hireDateTwo;
document.getElementById("txtPayRateTwo").innerHTML = payRateTwoFixed;

let firstNameThree = "Albert"
let lastNameThree = "Einstein"
let addressThree = "789 C Street"
let hireDateThree = "02/10/25"
let payRateThree = 3.149999
let payRateThreeFixed = payRateThree.toFixed(1)

document.getElementById("txtFirstNameThree").innerHTML = firstNameThree;
document.getElementById("txtLastNameThree").innerHTML = lastNameThree;
document.getElementById("txtAddressThree").innerHTML = addressThree;
document.getElementById("txtHireDateThree").innerHTML = hireDateThree;
document.getElementById("txtPayRateThree").innerHTML = payRateThreeFixed;