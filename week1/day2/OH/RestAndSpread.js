// Rest Operator (...):
// The rest operator, represented by three dots (...), allows you to capture multiple function arguments or the remaining elements of an array into a single variable. It collects the arguments or elements into an array.

// When used in function parameters, the rest operator allows a function to accept any number of arguments. Here's an example:

const sum = (...numbers) => {
    console.log('NUMBERS ', numbers);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sum(1, 2, 3));

// In this example, the sum function accepts any number of arguments and collects them into the numbers array using the rest operator.

// The rest operator can also be used to gather the remaining elements of an array into a new array. Here's an example:

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...restOfNums] = numbers;
console.log(first);//1 
console.log(second);//2 
console.log(restOfNums);//[3, 4, 5]


// In this case, the first two elements of the numbers array are assigned to the variables first and second, while the rest of the elements are collected into the restOfNums array using the rest operator.

// Spread Operator (...):
// The spread operator, also represented by three dots (...), allows you to expand elements from an array or object into individual elements. It is used in function calls, array literals, and object literals.

// When used with arrays, the spread operator can copy the elements of one array into another array. Here's an example:

const nums = [1, 2, 3];
                // 1,2,3
const newNums = [...nums, 4, 5, 6];
console.log(newNums);// [1,2,3,4,5,6]
console.log(nums);// [1,2,3]


// In this example, the spread operator is used to expand the numbers array into individual elements, which are then combined with the additional elements [4, 5] to create a new array moreNumbers.


// the spread operator can be used with objects to create new object literals or merge objects. Here's an example:


const person = {
    name: 'John',
    age: 20,
};

const info = {
    address: '123 Main St.',
    city: 'Boston',
    state: 'MA',
    zipCode: '02118',
};

// const updatedPerson = {...person, ...info}
// console.log(updatedPerson);

const updatedPerson = {...person, favLang:22, ...info}
console.log(updatedPerson);
console.log(person);
