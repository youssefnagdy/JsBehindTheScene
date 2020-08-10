/**
 * Created by YoussefNagdy on 8/10/2020.
 */

/*
   so far we learned when Execution Context  Created

   but How exactly this Happens ?!

   let's start by creating a presentation
   first Of as we mention we can associate
   an execution context within object
   and this object has 3 Properties :-
   1 - Variable Object (VO)
   which will contain function arguments
   and variable Declarations as well as function
   Declarations

   2- Scope Chain :- which contains the current variable
   objects as well as the variable object of all
   it's parents

   3- "This" Variable :-


  Okay , So how this Execution Context Actually
  Created !!

  - When a function is called in your execution context
    is put on top of Stack and this happens in 2 Phases

    1- Creation Phase
    2- Execution Phase

 in the creation phase we first have to creation of
 the variable object then the creation of the
 scope chain and lastly the this variable
 is determined to set

 so basically the properties of the execution context
 object are defined

 then in Execution Phase:-
 the code in the function that generated the current
 execution context is ran line by line
 and the variables are defined

 if it's global context then it's global code
 is executed

 so let's now look at the creation of the global object
 in a creation phase
 What happen in the creation of the variable object
 - the argument object is created , containing
 all the arguments that were passed into the function

 - code is scanned for function declarations: for each
 function a property is created in the variable object
 , pointing to the function
 This means that all the functions will be stored
 inside the variable object event before the code
 start executing and this too important to know

 - lastly code is scanned for variable declarations
 for each variable , a property is created in the
 variable object , and set to undefined

 and last two point commonly called Hoisting ***

 function and variables are hoisted in javascript
 which means there are available before the
 execution phase actually start
 there are hoisted in different way although
 the difference between functions and variables
 is that function already defined before the execution
 phase start , while variables are set up to undefined

 and only will be defined in execution phase

 each execution context has an object which stores
 a lot  of important data  that the function will use
 while it's running and this happen even before the code
 is executed













 */