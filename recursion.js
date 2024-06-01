//power function
function power(base, exponent) {
    // Base case: if the exponent is 0, return 1
    if (exponent === 0) {
        return 1;
    }
    // Recursive case: multiply base with the result of power function with decreased exponent
    // This recursively reduces the exponent until it reaches 0
    return base * power(base, exponent - 1);
}

// Example usage:
let base = 2;
let exponent = 3;
console.log(`${base} raised to the power of ${exponent} is:`, power(base, exponent)); // Output: 8


//palindrome checker

function isPalindrome(str) {
    // Helper function to clean the string
    function cleanString(s) {
        return s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    }

    // Recursive function to check for palindrome
    function checkPalindrome(s, start, end) {
        if (start >= end) {
            return true;
        }
        if (s[start] !== s[end]) {
            return false;
        }
        return checkPalindrome(s, start + 1, end - 1);
    }

    let cleanedStr = cleanString(str);
    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

// Example usage:
let str = "A man, a plan, a canal, Panama!";
console.log(`"${str}" is a palindrome:`, isPalindrome(str)); // Output: true
