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

let sequence = document.getElementById("sequence").value;
    let choice = sequence;
    
    if (choice === "fibonacci") {
        
        function seqFunction() {
            if (n == 1)
                return 0;
            if (n == 2)
                return 1;
            let num1 = 0;
            let num2 = 1;
            let next;
            let fibonacciSequenceText;
            
            while (let i = 2; i <= n; i++) {
                next = num1 + num2;
                num1 = num2;
                num2 = next;
                i+ = 1;
            }
                return num2;
                
        }
     
    }
    console.log(seqFunction(40));
    
