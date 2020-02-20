//sanjaya ghimire
//comp 584 
//assignment 2

var employees=[];//global array to store all emplyees
function addEmployee(){
    var name = document.getElementById("firstname").value + "," + document.getElementById("lastname").value;
}
 
 //function to start when the DOM is loaded
function getData() {
  //creating employeeId variable and storing random 8 digit number
   let employeeId = Math.random().toString().slice(2, 10);
   //adding employeeId property to employee object
   let employee = {employeeId: employeeId};
   //making employee object as a JSON object
   let employeeJson = JSON.stringify(employee);

   let first = document.getElementById('firstname').value;
   let last = document.getElementById('lastname').value;
   let department = document.getElementById('department').value;
   let flag = true;
  
  while(flag) {
    if(employees.length === 0) {
      employees[employees.length] = {firstName: first, lastName: last, department: department, Id: employeeId};
      flag = false;
    }
    else if(employees.indexOf(employeeId) == -1) {
    employees.push({firstName: first, lastName: last, department: department, Id: employeeId});
    flag = false;
    }
    else {
      employeeId = Math.random().toString().slice(2, 10);;
      flag = true;
    }
  }
}
var month_name = function(day){
  
var monthlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return monthlist[day.getMonth()];
};

function getWeekDay(date){
    //Create an array containing each day, starting with Sunday.
    var weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    //Use the getDay() method to get the day.
    var day = date.getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
}
 function send() {
 
   var date = new Date();
   var month = month_name(date);
   
  var today = getWeekDay(date);
   getData();
  document.getElementById('out-header').innerHTML = "<h1>Employee added</>";
  document.getElementById('out-name').innerHTML = "Name: " + employees[employees.length-1].firstName + ", " + employees[employees.length-1].lastName;
  document.getElementById('out-department').innerHTML = "Department: " + employees[employees.length-1].department;
  document.getElementById('out-employeeid').innerHTML = "Employee ID: " + employees[employees.length-1].Id;
  document.getElementById('out-hiredate').innerHTML = "Hire Date: " +today+" "+ month + " " + date.getDate() + " " + date.getFullYear();
  document.getElementById('out-totalemployees').innerHTML = "Total Employees: " + employees.length;
  document.getElementById('out-browserinfo').innerHTML = "browser info:" + navigator.appName;
  console.log(navigator.appName);
}
function start() {
  
  document.getElementById('button-submit').onclick = send;
}
window.onload = start;