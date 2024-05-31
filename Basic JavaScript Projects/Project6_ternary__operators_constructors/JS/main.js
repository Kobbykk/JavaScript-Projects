//Using Ternary operator to check whether a user can ride or not
function checkHeight() {
  var Height, Can_ride;
  Height = document.getElementById("Height").value;
  Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//Using Ternary operator to check whether a user can vote or not
function checkAge() {
  var Age, Can_vote;
  Age = document.getElementById("Age").value;
  Can_vote = Age >= 18 ? "You are old enough" : "You are too young";
  document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

// New Keyword Assignment

function Student(Name, Age, Course, Phone) {// Student constructor function
  this.Name = Name;
  this.Age = Age;
  this.Course = Course;
  this.Phone = Phone;
}
//Instance of Student constructor function
var Student1 = new Student("Jackie Dawn", 24, "Physics", "234-175-4643");
var Student2 = new Student("Vincent Cox", 30, "Chemistry", "324-715-4203");
var Student3 = new Student("Brenda Hall", 32, "Biology", "612-864-4643");
var Student4 = new Student("Sandra Owens", 27, "Pyschology", "234-175-4643");

function Student_Info() {
  document.getElementById("New_and_This").innerHTML =
    Student1.Name +
    " is " +
    Student1.Age +
    " and is studying " +
    Student1.Course + " in School.";
}


// Nested Function

function Add_function(){
    document.getElementById("Nested_Function").innerHTML = Add();
    function Add(){
        let counter = 0; // declaring and initializing counter
        function plus() {
            counter += 1; // increasing counter by 1
        };
        plus(); // calling the plus function
        return counter; //return counter
    }
}