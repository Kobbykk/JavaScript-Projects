// Using Dictionary Function
function Dict_Function(){
    var Student = {
        Name: "John",
        Age: 25,
        Phone: "234-532-5343",
        Course: "Computer Science",
        Start_Date: "05/13/2023",
    };
    document.getElementById("Dictionary").innerHTML = Student.Course;
}


// Add delete statement to a function
function Delete_Function() {
  var Student = {
    Name: "John",
    Age: 25,
    Phone: "234-532-5343",
    Course: "Computer Science",
    Start_Date: "05/13/2023",
  };
  delete Student.Name;
  document.getElementById("Delete").innerHTML = Student.Name;
}