// * You will be given an array and a value. you need to write a function to check whether the provided array contains the value.
// * Array can contain numbers or strings. value can be either.
// * Return true if the array contains the value, 
// declare new function that takes in 2 params
// write a loop to go through the array 
// conditonal to check if 
const checkArr = (arr, val) => {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] == val){
            return true
        }
    }
    return false
}
console.log(checkArr([1,2,3,4,5], 38));


// * refactor function above



// * Given an array and a value write a function that returns a count of how many times that value appears in the array
// * Array can contain numbers or strings. value can be either.
// * Return the count of the value




// * Write a function called sumEvenNums to sum all EVEN numbers between 1 and 100 the function should return the sum at the very end output 2550



// * Given an array of 'weak passwords' and a password (string) determine if the password is strong or weak 
// * if the password is in the array of weak passwords return 'Weak password'
// * if the password is not found in the list of weak passwords return 'Strong password'
let weakPass = ['12345678', 'password', 'secretPassword', 'strongPassword', 'youllNeverGuess']
let password = '123456781234321dfdf'


// * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.


