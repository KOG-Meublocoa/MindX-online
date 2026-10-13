// Bài 1: 
export function productInfo(name, price) {
    return `Sản phẩm: ${name}, Giá: ${price.toLocaleString("en-US")} VNĐ`;
}

// Bài 2: 
export function greet(name) {
    return `Xin chào, ${name}!`;
}

// Bài 3:
export function sumUpTo(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

// Bài 4: 
export function square(n) {
    return n * n;
}

// Bài 5: 
export function isEven(n) {
    return n % 2 === 0;
}

// Bài 6: 
export function firstElement(arr) {
    return arr[0];
}

// Bài 7: 
export function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

// Bài 11: 
export function toUpperCase(str) {
    return str.toUpperCase();
}

// Bài 12: 
export function formatCurrency(amount) {
    return `${amount.toLocaleString("en-US")} VNĐ`;
}

// Bài 13: 
export function max(arr) {
    return Math.max(...arr);
}

// Bài 14: 
export function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Bài 15: 
export function repeatString(str, n) {
    return Array(n).fill(str).join(" ");
}

// Bài 16: 
export function sumOdd(arr) {
    return arr
        .filter(n => n % 2 !== 0)
        .reduce((total, n) => total + n, 0);
}

// Bài 17: 
export function sumGreaterThan(arr, n) {
    return arr
        .filter(value => value > n)
        .reduce((total, value) => total + value, 0);
}

// Bài 18: 
export function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
}

// Bài 19: 
export function firstThree(arr) {
    return arr.slice(0, 3);
}

// Bài 20: 
export function containsChar(str, char) {
    return str.includes(char);
}

// Bài 21: 
export function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// Bài 22: 
export function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}

// Bài 23: 
export function filterOdd(arr) {
    return arr.filter(n => n % 2 !== 0);
}

// Bài 24: 
export function greaterThan(arr, n) {
    return arr.filter(value => value > n);
}

// Bài 25: 
export function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error("n phải là số nguyên không âm");
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Bài 26: 
export function separateEvenOdd(arr) {
    return {
        even: arr.filter(n => n % 2 === 0),
        odd: arr.filter(n => n % 2 !== 0)
    };
}

// Bài 27: 
export function sortAsc(arr) {
    return [...arr].sort((a, b) => a - b);
}

// Bài 28: 
export function sumEvenIndex(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i += 2) {
        total += arr[i];
    }

    return total;
}

// Bài 29: 
export function multiplyByTwo(arr) {
    return arr.map(n => n * 2);
}

// Bài 30: 
export function arrayToString(arr) {
    return arr.join("");
}