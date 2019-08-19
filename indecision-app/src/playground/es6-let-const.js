// You can reassign and redefine var variables 
// You should avoid using var as it is too flexible and can cause issues down the track. 

var nameVar = 'Max';
nameVar = 'Mikey Mike'
console.log('nameVar', nameVar)

// You can reassign let variables 
// You cannot redefine let variables
// You should only use let when you need to reassign the value 

let nameLet = 'Jeff'
nameLet = 'Julie';
console.log('nameLet', nameLet)

// You can not redefine const variables
// You cannot reassign const variables as well 
// You should use const by default for everything. 

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Luna'
    return petName; 
}
// ------ Block Scoping -----
const petName = getPetName();
console.log(petName)

// Block Scoping - BLOCK level scopes mean that they're accessible only inside the function scope. So you can't access firstName in the below with a console.log which is calling it outside the function
// Var variables are function scoped - LET & CONST are blocked scoped

// Below is an example of a block scoping 

// var fullName = "Max Kelly";
// if (fullName) {
//     let firstName = fullName.split(' ')[0]
//     console.log(firstName)
// }

// Below is an example where we don't have to use var and can still access functional scoping 

const fullName = "Max Kelly";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}


console.log(firstName)