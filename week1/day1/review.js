// variables & data types

// primitve data types
// string
var firstName = 'John';
// number 
var age = 15;
var pi = 3.14
// boolean
var isHuman = true


// data structures 
//             0         1          2         3    4    5
var names = ['Caden', 'Brendan', 'Chris', 'Denis', 1, true]
// console.log(names);
// console.log(names[0]);
// console.log(names[4]);


// objects 
var john = {
    // key value pairs
    firstName:'John',
    lastName:'Smith',
    age:25,
    isHuman:true
}
// console.log(john.age);

// function 
function sayHi(name){
    console.log('Hello ' + name);
}
sayHi('Ryu')
sayHi('Brendan')


// for loops 
// loop through array of names
//    start       stop            step
for(var i = 0; i < names.length; i++){
    console.log(names[i]);
}


// conditionals
// if statement
if(age > 18){
    console.log('You are an adult');
}
else if(age > 12){
    console.log('You are a teenager');
}
else{
    console.log('You are a child');
}

