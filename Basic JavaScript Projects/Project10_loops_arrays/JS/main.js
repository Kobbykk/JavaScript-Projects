// While Loop
function Call_Loop() {
  var array_Loop = "";
  var x = 1;
  while (x < 15) {
    // while true
    array_Loop += "<br>" + x;
    x++;
  }
  document.getElementById("Loop").innerHTML = array_Loop;
}

// Length Properties

function Length_Function() {
  var Letter = "This is a sentence.";
  var Length_Letter = Letter.length;
  document.getElementById("Length").innerHTML =
    "<strong><i>This is a sentence</i></strong> has a length of " +
    Length_Letter;
}

//For Loop

var Instruments = [
  "Drums",
  "Guitar",
  "Piano",
  "Bass",
  "Flute",
  "Trumpet",
  "Acoustic",
  "Voilin",
];
var List = "";
var Y;

function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
    List += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = List;
}

//Arrays & Objects

function cat_pics() {
  var Cat_Pics = [];
  Cat_Pics[0] = "sleeping";
  Cat_Pics[1] = "playing";
  Cat_Pics[2] = "eating";
  Cat_Pics[3] = "purring";

  document.getElementById("Cat").innerHTML =
    "In this picture, the cat is " +
    "<strong>" +
    Cat_Pics[0] +
    "</strong>" +
    ".";
}


//Script using Const Keyword
function constant_function(){
    const Lenovo_Product = {type: "Laptop ", model: "Lenovo T14", color:"black ", serial: "PF124M53 "};
    Lenovo_Product.model = "Lenovo P16 ";
    Lenovo_Product.ID = "LT-PF124M53";
    document.getElementById("constant").innerHTML = "We have " + Lenovo_Product.model + Lenovo_Product.type +  Lenovo_Product.color + " color in stock."
}

//Let Keyword
var X = 25;
document.write(X);
{
    let X = 50;
    document.write("<br>" + X)
}
document.write("<br>" + X)


//Object Assignment
let Person = {
    firstName:"Michael",
    lastName: "Brian",
    age: 27,
    isEmployed: true,
    introduction : function() {
        return "Hello, my name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old.";
    }
};
 document.getElementById("Person_Object").innerHTML = Person.introduction();

