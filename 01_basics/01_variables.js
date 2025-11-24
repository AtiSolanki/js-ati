const accountId = 12345
let accountEmail = "abc@gmail.com"
var accountPassword = "56789"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed 



accountEmail = "efg@gmail.com"
accountPassword = "101010"
accountCity = "ajmer"

// console.log(accountId,accountEmail,accountPassword,accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


/*
prefer not to use var
beacause of issue in block scope and functional scope
*/