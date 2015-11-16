function Employee(firstName, lastName, empNum, empTitle, lastRevScore, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.empNum = empNum;
    this.empTitle = empTitle;
    this.lastRevScore = lastRevScore;
    this.salary = salary;
  };

var employeeArray = [];

$(function() {
    $('form').on('submit', function(event) {
    event.preventDefault();
    var employee = $(this).serializeArray();
    var newEmployee = new Employee(employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value, employee[5].value);
    createEmployee(newEmployee);
    console.log(newEmployee);
    });

});

 function createEmployee(employee){
  var $button = $('<button>');
  var $ul = $('<ul>');
 $ul.append($('<li>').text('First Name: ' + employee.firstName));
 $ul.append($('<li>').text('Last Name: ' + employee.lastName));
 $ul.append($('<li>').text('Employee #: ' + employee.empNum));
 $ul.append($('<li>').text('Title: ' + employee.empTitle));
 $ul.append($('<li id="review">').text('Review Score (1-5): ' + employee.lastRevScore));
 $ul.append($('<li>').text('Salary: $' + employee.salary));
 $('#output').append($ul);
 
 $ul.append($('<button>').text('Remove: '+ employee.firstName + ' ' + employee.lastName));

};


$('div').on('click', 'button', function() {
  $(this).closest('ul').remove();
});













// employeeArray.push(new Employee()); 
// console.log(employeeArray);
// employeeArray.push(new Employee()); 
// console.log(employeeArray);
// employeeArray.push(new Employee()); 
// console.log(employeeArray);
// employeeArray.push(new Employee()); 
// console.log(employeeArray);
// employeeArray.push(new Employee()); 
// console.log(employeeArray);
// for (var i = 0; i < employeeArray.length; i++){
//   drawEmployee(i); 
// }

// function createEmpoloyee(i){
//   var employee = employeeArray[i];
//   var $ul = $('<ul>');
//   var $button = $('<button>');


// $ul.append($('<li>').text('First Name: ' + employee.firstName));
// $ul.append($('<li>').text('Last Name: ' + employee.lastName));
// $ul.append($('<li>').text('Employee #: ' + employee.empNum));
// $ul.append($('<li>').text('Title: ' + employee.title));
// $ul.append($('<li').text('Review Score (1-5): ' + employee.lastRevScore));
// $ul.append($('<li>').text('Salary: $' + employee.salary));

// $ul.append($(button).text('Remove: '+ employee.firstName + ' ' + employee.lastName));

// $button.attr('id', 'employee' + i);
// $button.addClass('remove');
// $ul.addClass('review' + emplyee.lastRevScore);
// $('#empList').append($ul);

// }

// $(function() {
//   $('#empForm').on('submit', function(event) {
//     var arrayEmployee = [];
//     var newEmployee = {};
    
//     arrayEmployee = $(this).serializeArray();
//     event.preventDefault();
//     $(this)[0].reset();

//     newEmployee = new Employee(arrayEmployee[0].value, arrayEmployee[1].value, arrayEmployee[2].value, arrayEmployee[3].value, arrayEmployee[4].value, arrayEmployee[5].value);
//     employeeArray.push(newEmployee);
//     drawEmployee(employeeArray.length -1);

//   })
// });


















// function drawEmployee(i){
//   var employee = employeeArray[i]; 
//   var $ul = $('<ul>'); 
//   var $button = $('<button'>);


// $ul.append($('<li>').text('First Name: ' + employee.firstName));
//   $ul.append($('<li>').text('Last Name: ' + employee.lastName));
//   $ul.append($('<li>').text('Employee #: ' + employee.empNum));
//   $ul.append($('<li>').text('Title: ' + employee.title));
//   $ul.append($('<li>').text('Last Review Score (1-5): ' + employee.lastRevScore));
//   $ul.append($('<li>').text('Salary: $' + employee.salary));

//   $ul.append($($button).text('Delete: ' + employee.firstName + ' ' + employee.lastName));

//   $button.attr('id', 'employee' + i); // Add a class to the remove button based on the Employee's position in employeeArray, #employee[i]
//   $button.addClass('remove'); // Add a .remove class to the remove button 
//   $ul.addClass('review' + employee.lastRevScore); // Add a class to the <ul> based on Employee reviewScore, .review(1-5)
//   $('#empList').append($ul); // Add the <ul> for the employee to <ol #empList> of employees
// }

// $(function() { // Wait until the document is loaded and ready
//   $('#empForm').on('submit', function(event){ // Check for a form submission
  
//     var arrayEmployee = []; // Holds an new employee as an array, before it is turned into an Employee object
//     var newEmployee = {}; // A new Employee object, to be added to employeeArray

//     arrayEmployee = $(this).serializeArray(); // Capture form input into an array
//     event.preventDefault(); // Do not send the form data
//     $(this)[0].reset(); // Reset the form
    
//     // Convert a newEmployee array into a new Employee object
//     newEmployee = new Employee(arrayEmployee[0].value, arrayEmployee[1].value, arrayEmployee[2].value, arrayEmployee[3].value, arrayEmployee[4].value, arrayEmployee[5].value);
//     employeeArray.push(newEmployee); // Add the new Employee instance to the array of employees
//     drawEmployee(employeeArray.length - 1); // Draw the most newly input employee
//   })
// });

// // Remove an employee
// $(function() { // Wait until the document is loaded and ready
//   $('#empList').on('click', 'button', function(){ // Check for a .remove Employee button click
//     var employeePosition = $(this).attr('id'); // Stores the Employee's possition as the .class[i] of the .remove button
    
//     // Updates Employee's possition to [i], it's loctaion in employeeArray
//     employeePosition = employeePosition.charAt(employeePosition.length - 1); 
//     delete employeeArray[employeePosition]; // Remove the Employee from employeeArray
//     $(this).closest('ul').remove();
    
//     console.log(employeeArray);
//   });
// });




























// function showValues() {
//     var fields = $( ":input" ).serializeArray();
//     $( "#results" ).empty();
//     jQuery.each( fields, function( i, field ) {
//       $( "#results" ).append( field.value + " " );
//     });
//   }
 
//   $( ":submit" ).click( showValues );
//   $( "select" ).change( showValues );
//   showValues();
















// $(function(){

//   $('form#myForm').on('submit', function(event){
//     try {
//       var data = $(this).serializeArray();

//       console.log(data);

//       for (var i = 0; i < data.length; i++){
//         var elem = data[i];
//         if (elem.firstName === "firstName"){
//           var $p = $('<p>');
//           $p.text(elem.firstName);
//           $('#content').append($p);
//           break;
//         }
//       }
//       $(this)[0].reset();

//     } catch (exception){
//       console.log('Exception:', exception);
//     } finally {
//         event.preventDefault();
//     }
//   })
// });
// // $(function(){

//  
//   $( "form" ).submit(function( event ) {
//   console.log( $( this ).serializeArray() );
//   event.preventDefault();
// });
// });



// var employee, firstName, lastName, empNumber, title, lastRevScore, salary;
// employee = 
// }














    // try {
//       var data = $(this).serializeArray();

//       console.log(data);

//       for (var i = 0; i < data.length; i++){
//         var elem = data[i];
//         if (elem.name === "firstName"){
//           var $p = $('<p>');
//           $p.text(elem.name + ": " + elem.value);
//           $('#content').append($p);
//           break;
//         }
//       }
//       $(this)[0].reset();

//     } catch (exception){
//       console.log('Exception:', exception);
//     } finally {
//         event.preventDefault();
//     }
//   })
// });