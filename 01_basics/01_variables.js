const accountId = 1235432
let accountEmail = "onkar@gmail.com"
var accountPassword = "123"
accountCity = "Udaipur"
let accountStatus;

// accountId  = 6768
// Reassigning a value to a const variable will throw an error.
// TypeError: Assignment to constant variable.

console.log(accountId);

accountEmail = "onkargill@gmail.com"
accountPassword = "5656"
accountCity = "Delhi"

/*
    prefer not to use var 
    because of issue in block scope and functional scope

    and without defining the type of variable is also not prefered
    accountCity = "Udaipur"
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus])



