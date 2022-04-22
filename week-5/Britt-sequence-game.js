/*
===========================================
; File: Britt-sequence-game.js
; Author: Andrew Britt
; Date: 11 Apr 2022
; Description: JavaScript code for sequence game
; Reference: 
; Date reference accessed: 
===========================================
*/    
    // Input - onClick event
    // Output - back to results div
    let choice = document.getElementById("sequence").value;
    let output = document.getElementById("results");
    
    // Function and string comparison 
    function seqFunction() {
        let choice = document.getElementById("sequence").value;
    
    // Fib sequence variable
    let num1 = 0;
    let num2 = 1;
    let next;
    let fibonacciSequenceText = "";

        if("fibonacci" == choice) {
            while (num1 < 40) {
                fibonacciSequenceText += num1 + ", ";
                next = num1 + num2;
                num1 = num2;
                num2 = next;
                document.getElementById("results").innerHTML = fibonacciSequenceText.slice(0,-2); 
            }
            
        }
        if("select" == choice) {
            alert ("Invalid selection, please try again!");
        }

            // Even number sequence generator loop
        else if("fibonacci" > choice) {
            let num4 = 0;
            let num3 = 2;
            let again;
            let evenOutText = "";
        do {
            again = num3 + num4;
            num4 = again;
            evenOutText += again + ", ";
            document.getElementById("results").innerHTML = evenOutText.slice(0,-6); 
            }
        while (again < 20);
        }

        // Odd number sequence generator loop
        else if("fibonacci" < choice) {
            let oddOutText = "";
            for (let i = 1; i <= 20; i++) {
                if (i % 2 !== 0)
                oddOutText += i + ", ";
                document.getElementById("results").innerHTML = oddOutText.slice(0,-2); 
            }
            
        }
      
    }
   