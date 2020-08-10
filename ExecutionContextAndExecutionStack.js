/**
 * Created by YoussefNagdy on 8/9/2020.
 */

/*
   So far we learned how code parsed and translated
   into machine Code

   now focus on the order in which the code is run
   and for that we need to talk about Execution Context


   all js Code needs to run in an environment
   and these environments are called execution context

   so can imagine an execution context like a box
   which stores variables and in which of piece of our
   code is executed

   the default execution context is always to global
   context:-
   - Code that is not inside any function
   - Associated With the Global object
   - In the Browser, that's the Window Object

   as i said that is an execution context
   is where a piece of code is executed
   in a global context , all the code that's not
   inside any function is executed

   again global execution context for variables and
   function that's not inside any function

   now you also think of an execution context
   as an Object , so the global execution context
   is Associated with the global Object
   every thing we're declare in the global context
   automatically get attached to the window object
   in the Browser


 */

// Global Context
let lastName = "hany";
lastName === window.lastName;
//The Result always True ( - ^ ^ - )

/*
  so Remember Execution context is for code
  that's not inside any function but what about code
  that is in functions
  it's very simple each time that we call a function
  it's get on run on new execution context

  our Example Blow :-
  this first declaretion not in any function
  so we are in global execution context here
  so this var store in a global object

  2 - next up this function declare
      is also in a global context so we still here
      in same execution context

  3- and same about the second and third function;

  4- first() --> this is where the fun begins
     here where we call the first function
     new function gets new execution context
     what happens is new context is put on top
     of the current context forming execution Stack

     so our arrow will point to first function
     so this a variable will now get stored
     in the execution context for this function
     and not any more in global context

     and now we call the second function
     so once again a new execution context
     will be created and put on  top of execution stack

     and here we go this now the active context
     the arrow point to it

     the variable b stored in this new execution context
     and call the third function
     and once more a new execution context
     is created and put on top of execution stack

     inside third function we have these two variable
     declartion so this function has no done
     all it's work and so we say that a function return
     so what happens to it's execution context
     is gets removed from the top of the stack

     and then the context of the second function
     is back to being the active context
     so this z variable get stored in curentlly
     active context and after the function returns
     the context also pops of the stack

     back to the first function now
     and pops out of the stack

     and like this we executed all three functions
     created three execution context
     and pop them of the stack
     when the function returned

 */

var name = 'youssef';
function first() {
    var a = "Hello";
    second();
    var x = a +name ;
}

function second() {
    var b = "Hi !";
    third();
    var z = b + name ;
}
function third() {
    var c = "Hey !";
    var z = c + name;
}
first();