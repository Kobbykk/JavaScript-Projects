// Concatenate Method
function full_sentence(){
    var text1 = "We have combine ";
    var text2 = "this sentence together using ";
    var text3 = "a concatenate method in JavaScript";
    var full_sentence = text1.concat(text2,text3); // concat variable text1, text2, text3
    document.getElementById("concatenate").innerHTML = full_sentence; // display message
}

//Slice Method
function slice_method(){
    var sentence = "We have slice this sentence using a slice method in JavaScript";
    var slice = sentence.slice(36, 48); // slice from 36 to 48
    document.getElementById("slice").innerHTML = slice; // display message
}

// ToUpperCase Method
function to_uppercase(){
    var text = "This is a sentence in lowercase";
    var uppercase = text.toUpperCase(); // convert to uppercase
    document.getElementById("uppercase").innerHTML = uppercase;
}


// Search Method
function search_method(){
    var text = "This is a sentence in lowercase";
    var search = text.search("sentence"); // search for the word "sentence"
    document.getElementById("search").innerHTML = search; // display message
}


// Number Method
function string_Method(){
    var x = 456;
    document.getElementById("Numbers_to_string").innerHTML = x.toString(); // display message
}

// Precision Method
function precision_Method(){
  var y = 456.6548670008;
  document.getElementById("precision").innerHTML = y.toPrecision(10); // display message
}

// toFixed Method
function toFixed_Method(){
  var y = 456.6548670008;
  document.getElementById("toFixed").innerHTML = y.toFixed(3); // display message
}

// ValueOf Method
function ValueOf_Method(){
  var z = "The ValueOf Method";
  document.getElementById("valueOf").innerHTML = z.valueOf(); // display message
}