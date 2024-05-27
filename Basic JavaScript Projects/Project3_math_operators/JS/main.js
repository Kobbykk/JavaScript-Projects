function add_function(sum1, sum2) {
  return sum1 + sum2; //returning the sum of the two variables
}

let add_result = add_function(45, 50); // added values to the parameter sum1 and sum2
document.getElementById("Math").innerHTML =
  "The sum of 45 + 50 = " + add_result; // targeting HTML element with an id "Math" and modifiying the content. 

  //Substraction Operator function
function sub_function(sub1, sub2) {
  return sub2 - sub1; // subtracting values to the parameter sub1 and sub2
}

let sub_result = sub_function(100, 498); // added values to the parameter sub1 and sub2
document.getElementById("Sub").innerText = "498 - 100 is " + sub_result; // targeting HTML element with an id "Sub" and modifiying the content. 

// Multiple Operator
function Multi_Operator() {
  var multi_Math = 4 * 3 + 5 / 14 - 2; // using multiple operator to assign to variable multi_Math
  document.getElementById("Multi_Op").innerHTML =
    "4 multiplied by 3, plus 5, divide by 14, minus 2 is " + multi_Math;
  var roundMath = Math.round(multi_Math);
  document.getElementById("Roundup").innerHTML = "Round up is " + roundMath; // targeting HTML element with an id "Roundup" and modifiying the content after rounding the result.
}

// Modulus Operator
function Mod_Operator() {
  var mod_Math = 5 % 2; //using modulus operator
  document.getElementById("modulus").innerHTML = "5 mod 2 is " + mod_Math; // targeting HTML element with an id "modulus" and modifiying the content.
}


//Negation Operator
function Negation_Operator(x) {
  return x; //return the variable x
}
let negated = Negation_Operator(15);
document.getElementById("negation").innerHTML ="Negated operation of 15 is " +  -negated; // targeting HTML element with an id "negation" and modifiying the content. 


// Increment Operators
var I = 27;
I ++;
document.write("<br>" + "Increment of 27 is " + I); // displaying a content plus the variable "I" using Increment method

//Decrement Operators
var D = 27;
D --;
document.write("<br>" + "Decrement of 27 is " + D); // displaying a content plus the variable "D" using Decrement method

// Random Number
function random_number() {
  var random = Math.random() * 100; // using random method
  let whole_random = Math.round(random); // using round method to round the result
  document.getElementById("random").innerHTML =
    "Random number is " + whole_random; // targeting HTML element with an id "random" and modifiying the content.
}
