/*
===========================================NOTES=================================================

• Variable can store some information.

•JavaScript me variable scop 4 triko se declare hote he.

   1.) var:-  
             • var ki help se bne variable ko re-assign and rename kr skte he.
             • scope:-  function-scopedor globally scope
              
   2.) let:-
             • let ki help se bne variable ki value re-assign ki ja skti he but variable rename bhi kiya ja skta he but new name ke sath .
             • scope:-block-scope         

   3.) const:-
              • const se bne variable ko re-assign or re name nhi kr skte.
             • scope:-block-scope


----------------------------------Key Differences------------------------------------

1.) Scope:

  • var is function or globally scoped.
•let and const are block-scoped.

2.)Re-declaration:

  •var allows re-declaration.
 •let and const do not allow re-declaration.

 3.)Value reassignment:

•var and let can be reassigned.
•const cannot be reassigned after it's declared (but objects/arrays can have their properties modified).
Hoisting:

var is hoisted and initialized with undefined.
let and const are hoisted but not initialized, so accessing them before declaration causes an error.







            


*/
//-----Practical of var -------

//declare a variable

//  var firstName="uzma";
//  console.log(firstName);

 // re-assign value

//  firstName="Faizan";
//  console.log(firstName);

 // rename of variable

//  var firstName="uzzi";
//  console.log(firstName);

//----------Pracitcal of let ----------

//declare a variable

// let firstName="Faizan";
// console.log(firstName);

// re-assign of variable value

// firstName="Uzma";
// console.log(firstName);

//rename of variable

// let Name="fuzzi";  // let me same name ke variable nhi bn skte ye ek error he
// console.log(Name);


//----const practicle------

const firstName="uzma";
console.log(firstName);

// rename of variable

const firstname="faizan";
console.log(firstname);

//re-assign of vriable value

// firstName="uzzi"; // ye ek error he
// console.log(firstName);