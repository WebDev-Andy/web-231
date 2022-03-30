/*
==================================
; Title: Britt-payroll.js
; Author: Andrew Britt
; Date: 26 Mar 2022
; Description: Variables, Date and payRate change
==================================
*/

const firstName = "Robert"
const lastName = "Burgers"
const address = "123 A Street"
const hireDate = new Date();
const hireDateFixed = hireDate.toLocaleDateString();
const payRate =  30.783449999999
const payRateFixed = payRate.toFixed(1)

document.getElementById("txtFirstName").innerHTML = firstName; 
document.getElementById("txtLastName").innerHTML = lastName;
document.getElementById("txtAddress").innerHTML = address;
document.getElementById("txtHireDate").innerHTML = hireDateFixed;
document.getElementById("txtPayRate").innerHTML = payRateFixed;

const firstNameTwo = "Richard"
const lastNameTwo = "Sanchez"
const addressTwo = "456 B Street"
const hireDateTwo = new Date()
const hireDateTwoFixed = hireDateTwo.toLocaleDateString();
const payRateTwo = 28.138999
const payRateTwoFixed = payRateTwo.toFixed(1)

document.getElementById("txtFirstNameTwo").innerHTML = firstNameTwo;
document.getElementById("txtLastNameTwo").innerHTML = lastNameTwo;
document.getElementById("txtAddressTwo").innerHTML = addressTwo;
document.getElementById("txtHireDateTwo").innerHTML = hireDateTwoFixed;
document.getElementById("txtPayRateTwo").innerHTML = payRateTwoFixed;

const firstNameThree = "Alberta"
const lastNameThree = "Einstein"
const addressThree = "789 C Street"
const hireDateThree = new Date()
const hireDateThreeFixed = hireDateThree.toLocaleDateString();
const payRateThree = 3.149999
const payRateThreeFixed = payRateThree.toFixed(1)

document.getElementById("txtFirstNameThree").innerHTML = firstNameThree;
document.getElementById("txtLastNameThree").innerHTML = lastNameThree;
document.getElementById("txtAddressThree").innerHTML = addressThree;
document.getElementById("txtHireDateThree").innerHTML = hireDateThreeFixed;
document.getElementById("txtPayRateThree").innerHTML = payRateThreeFixed;