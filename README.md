# JavaScript Loops Practice

This repository contains practice exercises for JavaScript loops. You'll implement three functions that demonstrate different loop patterns.

## Setup Instructions

1. Fork this repository
2. Clone the forked repository
3. Run `npm install` to install dependencies
4. Implement the required functions in `index.js`
5. Run `npm test` to check your solutions

## Functions to Implement

### 1. sumToN(n)
Calculate the sum of all numbers from 0 to n (inclusive). 

```javascript
// Example
sumToN(5); // returns 15 (0 + 1 + 2 + 3 + 4 + 5)
```

### 2. countVowels(str)
Count the number of vowels in a given string.
```javascript
// Example
countVowels('hello'); // returns 2 (e and o are vowels)
```

### 3. reverseArray(arr)
Reverse the elements of an array.
```javascript
// Example
reverseArray([1, 2, 3, 4, 5]); // returns [5, 4, 3, 2, 1]
```

## Javascript Loop Syntax Reference

- `for` loop: Iterates over a range of numbers.
- `while` loop: Executes code as long as a condition is true.
- `for...of` loop: Iterates over elements of an array or string.
- `for...in` loop: Iterates over properties of an object.

### 1. For Loop
```javascript
for(initialization;condition;increment/decrement) {
    // code block
}

// Example
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
### 2. For... of Loop (for arrays/strings) 
```javascript
for (let item of array) {
    // code block
}

// Example
for (let char of 'hello') {
    console.log(char);
}
```
### 3. While Loop
```javascript
while (condition) {
    // code block
}
// Example  
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## Running Tests

- Run all tests: `npm test`
- Tests will automatically re-run when you make changes

## Need Help?

1. Check the test file to understand what's expected
2. Review the loop syntax above
3. Try breaking down the problem into smaller steps
4. Use console.log() to debug your code

Good luck! 🚀
