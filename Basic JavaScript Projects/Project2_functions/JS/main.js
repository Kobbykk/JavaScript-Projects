function Btn_Function () {
    var text1 = "This is the first click event in JavaScript"; // assigning var text1 with a string
    text1 += "This is the second click event in JavaScript"; // concatenating text1 using operator

    document.getElementById("para").innerHTML = text1; // modifying the HTML element with an Id para

}

function SecondFunction(sum1, sum2){
    return sum1 + sum2; 
}


let result = SecondFunction(25, 5);
document.getElementById("demo").innerHTML = result;