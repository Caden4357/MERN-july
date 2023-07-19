const nums = [23,56,19,20,9,20,78,55,32,42,8,20,80]

// ? Given the array above use the map method to return a new array of all the numbers multiplied by 2
// const multipliedNums = nums.map((num) => num*2)
// console.log(multipliedNums);

// ? Given the array above use the filter method to return a new array of only numbers larger than 50
// const over50 = nums.filter((num) => num > 50)
// console.log(over50);
// ? Given the array above use the filter method to return a new array of only numbers divisible by 3
const divBy3 = nums.filter( num => num % 3 === 0)
console.log(divBy3);

// ? Given the array above write a function that takes in a number to remove from the array and returns the new array with all the numbers besides that number. Use the filter method for this
// ? were going to have a function that takes in a num
// ? And in that function were going to filter the array based on that num 
const filterNums = (numToRemove) => {
    const newNums = nums.filter( num => numToRemove !== num)
    return newNums
}
const result = filterNums(20)
console.log(result);




const nbaAthletes = [
    {id: 1, name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {id: 2, name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {id: 3, name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {id: 4, name:'Shaq', league:'NBA',  position: 'Center', active:false },
    {id: 5, name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {id: 6, name:'Mike James', league:'Euro',  position: 'Shooting Guard', active:true },
]

// ? Given the array above use the map method to return a new array of objects with only the name and position of each player


// ? Given the array above use the filter method to return a new array of objects where the player is currently active in the nba


// ? Given the array above use the filter method to return a new array of objects where the player is a point guard


// ? Given the array above write a function that takes in an id for a player to be 'deleted' Use the filter method to return a new array of athlete objects minus the player with the id that matches what was passed in
const filterAthletes = (id) => {
    const newTeam = nbaAthletes.filter(athlete => athlete.id !== id)
    return newTeam
}

const newTeam = filterAthletes(2)
console.log(newTeam);