//Global Scope
document.write("<h2>Global Scope</h2>"); //display h2 content using document write
var x = 15; // declaring and initializing global variable
function Sum_oneX() {
  document.write(x + 20 + "<br>"); // return and display the sum of x  plus 20
}
function Sum_TwoX() {
  document.write(x + 50 + "<br>"); // return and display the sum of x  plus 50
}

Sum_oneX();
Sum_TwoX();

//Local Scope
document.write("<h2>Local Scope</h2>"); //display h2 content using document write
function Sum_oneY() {
  var y = 5; // declaring and initializing local variable
  document.write(y + 20 + "<br>"); // return and display the sum of y  plus 20
}
function Sum_TwoY() {
  y = 40;
  document.write(y + 50 + "<br>"); // return and display the sum of y  plus 50
}

Sum_oneY();
Sum_TwoY();

//Undefined Scope
document.write("<h2>Undefined Scope</h2>");
function Sum_OneZ() {
  var z = 3;
  console.log(z + 20 + "<br>"); //Display answer in console
}
function Sum_TwoZ() {
  console.log(z + 50 + "<br>"); //Display answer in console 
}
Sum_OneZ();
Sum_TwoZ();

//IF Statement
function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?"; // display message if condition is true
  }
}

//IF Statement Assignment
function get_Date2() {
  const time = new Date().getHours(); // assigning date function to variable time
  let greetings;
  if (time < 12) {
    greetings = "Good morning"; // display message if condition is true
  } else if (time < 18) {
    greetings = "Good afternoon"; // display message if condition is true
  } else {
    greetings = "Good evening"; // display message if condition is true
  }

  document.getElementById("Greeting2").innerHTML = greetings + " it is " + time;
}

//IF & Else Statement ----- Age to Vote
function Age_Function() {
  var Age = document.getElementById("Age").value; // Assigning the user input value to Age
  if (Age >= 18) {
    Vote = "You are old enough to vote!"; // display message if condition is true
  } else {
    Vote = "You are not old enough to vote!"; // display message if condition is true
  }
  document.getElementById("How_old_are_you?").innerHTML = Vote;  // display message

}

// Else IF Statement
function Time_function() {
  var Time = new Date().getHours(); // assigning date function to variable Time
  var Reply; // Delcaring Reply variable
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!"; //  display message if condition is true
  } else if (Time > 12 == Time < 18) {
    Reply = "It is afternoon time!"; //  display message if condition is true
  } else {
    Reply = "It is evening time!"; //  display message if condition is true
  }
  document.getElementById("Time_of_day").innerHTML = Reply; // display message
}
