import {
    productInfo, greet, sumUpTo, square, isEven, firstElement, sum,
    toUpperCase, formatCurrency, max, isPrime, repeatString,
    sumOdd, sumGreaterThan, formatDate, firstThree, containsChar,
    mergeArrays, countOccurrences, filterOdd, greaterThan, factorial,
    separateEvenOdd, sortAsc, sumEvenIndex, multiplyByTwo, arrayToString
} from "./utils.js";

console.log("Bài 1:", productInfo("Sách", 20000));
console.log("Bài 2:", greet("An"));
console.log("Bài 3:", sumUpTo(5));
console.log("Bài 4:", square(6));
console.log("Bài 5:", isEven(7));
console.log("Bài 6:", firstElement([1, 2, 3]));
console.log("Bài 7:", sum(1, 2, 3, 4));

// Bỏ qua bài 8, 9, 10 theo yêu cầu

console.log("Bài 11:", toUpperCase("javascript"));
console.log("Bài 12:", formatCurrency(1000000));
console.log("Bài 13:", max([10, 5, 20, 8]));
console.log("Bài 14:", isPrime(7));
console.log("Bài 15:", repeatString("Hello", 3));
console.log("Bài 16:", sumOdd([1, 2, 3, 4]));
console.log("Bài 17:", sumGreaterThan([1, 2, 3, 4], 2));
console.log("Bài 18:", formatDate("2024-11-28"));
console.log("Bài 19:", firstThree([1, 2, 3, 4, 5]));
console.log("Bài 20:", containsChar("javascript", "j"));
console.log("Bài 21:", mergeArrays([1, 2], [3, 4]));
console.log("Bài 22:", countOccurrences([1, 2, 2, 3, 2], 2));
console.log("Bài 23:", filterOdd([1, 2, 3, 4]));
console.log("Bài 24:", greaterThan([1, 2, 3, 4], 2));
console.log("Bài 25:", factorial(5));
console.log("Bài 26:", separateEvenOdd([1, 2, 3, 4]));
console.log("Bài 27:", sortAsc([3, 1, 4, 2]));
console.log("Bài 28:", sumEvenIndex([1, 2, 3, 4]));
console.log("Bài 29:", multiplyByTwo([1, 2, 3]));
console.log("Bài 30:", arrayToString(["a", "b", "c"]));