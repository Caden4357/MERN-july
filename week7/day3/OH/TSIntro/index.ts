// types 
type StringOrNum = string | number;
let john:string = 'John';
let age:number = 30;
let isMarried:boolean = false;
// arrays   
let names:StringOrNum[] = ['John', 'Jane', 'Jack', 5];
let ages:number[] = [30, 28, 32];

// objects
// defining the type of the object person
type Person = {
    name:string,
    age:number
    isMarried:boolean
}

let person:Person = {
    name: 'John',
    age: 30,
    isMarried: false
};

console.log(john, age, isMarried, names, ages, person);

// union types
let id:StringOrNum = 123;

// functions
function add(num1:number, num2:number):number|void {
    // return num1 + num2;
    console.log(num1 + num2);
    // return 'hello';
}

const sum = (num1:number, num2:number):number => {
    return num1 + num2;
}
