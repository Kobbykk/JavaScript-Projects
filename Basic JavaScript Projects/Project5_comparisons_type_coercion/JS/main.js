document.write(typeof "Show the data type");

document.write("<br>" + "25" + 32); // using coercion type

document.getElementById("NAN").innerHTML = (0/0);
document.getElementById("trueNAN").innerHTML = isNaN("is this NAN?");
document.getElementById("falseNAN").innerHTML = isNaN("342");

document.write("<br>"+ 2E310); // positive infinity number
document.write("<br>" + -3E310) // negative infinity
document.write("<br>")

//using less or greater than operator
document.write(43 > 23);
document.write("<br>");
document.write(51 < 10);
document.write("<br>");
console.log( 4 * 2);
document.write("<br>");
console.log( 4 > 5);

// using two equal sign operator
document.write("<br>");
document.write("<br>" + "Two Equal Sign" + "<br>");
document.write(4 == 4);
document.write("<br>");
document.write(5 == 4);

//Return true by ensuring to match the data type and value.
var X = 40;
var Y = 40;

document.write("<br>");
document.write("<br>" + "Triple Equal Sign" + "<br>");
document.write(X === Y);

//Return false by writing a different data type and different value.
var X = "Data";
var Y = 50;
document.write("<br>");
document.write(X === Y);


//Return false by writing a different data type but the same value for both.
var A = "4";
var B = 4;
document.write("<br>");
document.write(A === B);

//Return false by writing the same data type but a different value for both.
var A = "Triple";
var B = "Triples";
document.write("<br>");
document.write(A === B);

//Return true using Boolean operators
document.write("<br>");
document.write("<br>" + "Boolen Operators" + "<br>");
document.write(8 > 2 && 20 > 5);
document.write("<br>");
document.write(8 > 2 && 20 < 5);

//Not operator function
function Not_function1(){
    document.getElementById("Not").innerHTML = !(45 < 2);// result true using Not operator
}

function Not_function2() {
  document.getElementById("Not").innerHTML = !(45 > 2); // result true using Not operator
}
