//My Object
var todoList = {
   // it do one work (text). lets make it object in the next line
  // todos: [ "First", "Second", "Third"], 

  // object in array = array of object
  todos: [
    //one obj
    {
    textTodo: "First", 
    completed: false
    },
    //second obj
    {
      textTodo: "Second", 
      completed: false
      },
      //third obj
      {
        textTodo: "Third", 
        completed: false
        },
        {
          textTodo: "Third", 
          completed: true
          },
  ],
};

var myItem = todoList.todos[2];
var showItem = '( ' + myItem.compleated + ' ) ' + myItem.textTodo;
console.log(showItem);


//console.log(myItem.textTodo, myItem.completed);

  // console.log();
  // console.log(todoList.todos[3].textTodo);
  // console.log(todoList.todos[3].completed);


//   //display todos
//   displayTodos: function() {
//     console.log(this.todos);
//   }, 
//   //add todo
//   addTodo: function(text) {
//     // debugger;
//     todoList.todos.push(text);
//     this.displayTodos();
//   }, 
//   //change todos
//   changeTodos: function(index, text) {
//     todoList.todos[index] = text;
//     this.displayTodos();
//   },
//   deleteTodo: function(index, end) {
//     todoList.todos.splice(index, end);
//     this.displayTodos();
//   },
// }; 
// //call the function from out side the 
// todoList.displayTodos();
// todoList.addTodo("forth");
// todoList.changeTodos(0,"zero");
// todoList.deleteTodo(0, 1);
























// //object ------ inside object is array
// var todoList = {

//   // TODOS ARR
//   todos: [
//     {
//       text: "First item",
//       completed: false
//     },
//     {
//       text: "Second item",
//       completed: false
//     },
//     {
//       text: "Third item",
//       completed: true
//     },
//   ],
  
  
//   // DISPLAY TODOS
//   displayTodos: function () {
//     console.log(this.todos);
//   }

// };

// console.log(todoList.displayTodos());

// //----------------------------------


// var todos = ["first", "second", "third"];
// function displayTodos() {
//   //how to conect with array
//   console.log(todos);
// }

//--------------------------------------------------------------------------


//function add
// function addTodo(text) {
//   todos.push(text);
//   displayTodos(todos);
// }

// addTodo: function todoText() {

//   this.todos.push({
//     text: todoText, 
//     completed: false
//   }); 
//   this.displayTodos();
// }

// todoList.displayTodos(); 
// todoList.addTodo("Forth item");





// //how to call a add function
// displayTodos(todos);
// addTodo("forth");
// addTodo("fifth");

// todos[0] = "zero";
// displayTodos(todos);

//   displayTodos(todos);
// }
// //call the change
// changeTodos(2);

// //delete a function hardcore
// function deleteTodo() {
//   todos.splice(0, 1);

//   displayTodos(todos);
// }
// //call a funtion
// deleteTodo();

// //delete a fucntion softcode
// function deleteTodo(index, end) {
//   todos.splice(index, end);
//   displayTodos();
// }

// deleteTodo(1, 1);

// //cammant
// /**
//  * asödlkfj 
//  * asdflkj 
//  * 
//  */
// //---------------------------Object----------------------------

// var myObject = {
//   name: "Sorin",
//   dog: false,
//   cat: true
// }