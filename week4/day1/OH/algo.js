// ? Given an array of 'weak passwords' and a password (string) determine if the password is strong or weak 
// ? if the password is in the array of weak passwords return 'Weak password'
// ? if the password is not found in the list of weak passwords return 'Strong password'
let weakPass = ['12345678', 'password', 'secretPassword', 'strongPassword', 'youllNeverGuess']
let password = 'passwordasdsad'
// 1.) Declare a function that takes in one param (password)
// 2.) loop through the array and check if the password matches the current itteration of the for loop (weakPass[i] == password)
// 3.) if it does match return 'Weak password'
// 4.) if it doesnt match return 'Strong password'
const checkPassword = (password) => {
    for (let i = 0; i < weakPass.length; i++){
        if(weakPass[i] === password){
            return 'Weak Password'
        }
    }
    return 'Strong Password'
}
console.log(checkPassword(password));

const checkPassRefactored = (password) => weakPass.includes(password) ? 'Weak Password': 'Strong Password';
console.log(checkPassRefactored(password));


// ! Hackerrank Link To The Problem: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem 
// ? Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.


const nbaAthletes = [
    {id: 1, name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {id: 2, name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {id: 3, name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {id: 4, name:'Shaq', league:'NBA',  position: 'Center', active:false },
    {id: 5, name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {id: 6, name:'Mike James', league:'Euro',  position: 'Shooting Guard', active:true },
]

// ? Given the array above use the map method to return a new array of objects with only the name and position of each player
const newAthletesArray = nbaAthletes.map((athlete) => {
    return {
        name:athlete.name,
        position:athlete.position
    }
})
console.log(newAthletesArray);



// ? Given the array above use the filter method to return a new array of objects where the player is currently active in the nba


// ? Given the array above use the filter method to return a new array of objects where the player is a point guard


// ? Given the array above write a function that takes in an id for a player to be 'deleted' Use the filter method to return a new array of athlete objects minus the player with the id that matches what was passed in
const filterAthletes = (id) => {
    const newTeam = nbaAthletes.filter(athlete => athlete.id !== id)
    return newTeam
}

const newTeam = filterAthletes(2)
console.log(newTeam);

// ? Build a function that takes the list of 'coordinates' and 'num' above and returns back a number of how many times x+y === num
// ? the output with the data provided should be 2

let coordinates = [
    {x:1, y:2}, // false
    {x:3, y:1}, // false
    {x:4, y:6}, // true count:1 
    {x:5, y:5}, // true count:2
];
let num = 10;