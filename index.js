// Function to sum all numbers from 0 to n
function sumToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Function to count the vowels in a string
function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Function to reverse an array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Export the functions to make them available for testing or use
export { sumToN, countVowels, reverseArray };

// Test sumToN
console.log(sumToN(5));  // Should print 15 (0 + 1 + 2 + 3 + 4 + 5)

// Test countVowels
console.log(countVowels('hello'));  // Should print 2 (vowels are 'e' and 'o')

// Test reverseArray
console.log(reverseArray([1, 2, 3, 4, 5]));  // Should print [5, 4, 3, 2, 1]
