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