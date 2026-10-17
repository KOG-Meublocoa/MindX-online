// Bài 1
export function sumArray(arr) {
    let sum = 0;
    for (let item of arr) sum += item;
    return sum;
}

// Bài 2
export function countOccurrences(arr, value) {
    let count = 0;
    for (let item of arr) {
        if (item === value) count++;
    }
    return count;
}

// Bài 3
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Bài 4
export function flattenArray(arr) {
    return arr.flat();
}

// Bài 5
export function isSymmetric(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
}

// Bài 6
export function findSecondLargest(arr) {
    let sorted = [...new Set(arr)].sort((a, b) => b - a);
    return sorted.length >= 2 ? sorted[1] : undefined;
}

// Bài 7
export function sortProductsByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

// Bài 8
export function findMostExpensiveProduct(products) {
    if (products.length === 0) return undefined;
    return products.reduce((max, item) =>
        item.price > max.price ? item : max
    );
}

// Bài 9
export function groupByType(arr) {
    let result = {};
    for (let item of arr) {
        if (!result[item.type]) result[item.type] = [];
        result[item.type].push(item.name);
    }
    return result;
}

// Bài 10
export function isSubset(arr1, arr2) {
    return arr2.every(item => arr1.includes(item));
}

// Bài 11
export function findMaxKey(obj) {
    let maxKey;
    let max = -Infinity;

    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] > max) {
            max = obj[key];
            maxKey = key;
        }
    }
    return maxKey;
}

// Bài 12
export function mergeObjectsSumValues(obj1, obj2) {
    let result = { ...obj1 };

    for (let key in obj2) {
        result[key] = (result[key] ?? 0) + obj2[key];
    }
    return result;
}

// Bài 13
export function countElements(arr) {
    let result = {};
    for (let item of arr) {
        result[item] = (result[item] || 0) + 1;
    }
    return result;
}

// Bài 14
export function cleanObject(obj) {
    let result = {};
    for (let key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
            result[key] = obj[key];
        }
    }
    return result;
}

// Bài 16
export function sumByGroup(arr, key) {
    let result = {};
    for (let item of arr) {
        let group = item[key];
        result[group] = (result[group] || 0) + item.price;
    }
    return result;
}

// Bài 22
export function findLongestValue(obj) {
    let longest = '';
    for (let key in obj) {
        if (typeof obj[key] === 'string' &&
            obj[key].length > longest.length) {
            longest = obj[key];
        }
    }
    return longest;
}

// Bài 25
export function convertToArray(obj) {
    return Object.entries(obj);
}

// Bài 27
export function sumByKey(arr, key) {
    let sum = 0;
    for (let item of arr) {
        if (typeof item[key] === 'number') sum += item[key];
    }
    return sum;
}

// Bài 29
export function findMinKey(obj) {
    let minKey;
    let min = Infinity;

    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] < min) {
            min = obj[key];
            minKey = key;
        }
    }
    return minKey;
}

// Bài 15
export function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

// Bài 17
export function uniqueValues(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// Bài 18
export function isPermutation(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let a = [...arr1].sort();
    let b = [...arr2].sort();

    return a.every((item, i) => item === b[i]);
}

// Bài 19
export function findLongestString(arr) {
    if (arr.length === 0) return undefined;
    return arr.reduce((a, b) => a.length >= b.length ? a : b);
}

// Bài 20
export function intersection(arr1, arr2) {
    return [...new Set(arr1.filter(item => arr2.includes(item)))];
}

// Bài 21
export function filterByMinValue(arr, minValue) {
    return arr.filter(item => item >= minValue);
}

// Bài 23
export function groupByFirstLetter(arr) {
    let result = {};
    for (let str of arr) {
        let letter = str[0];
        if (!result[letter]) result[letter] = [];
        result[letter].push(str);
    }
    return result;
}

// Bài 24
export function getAdults(people) {
    return people.filter(person => person.age >= 18);
}

// Bài 26
export function sortStringsByLength(arr) {
    return [...arr].sort((a, b) => a.length - b.length);
}

// Bài 28
export function countWords(str) {
    let text = str.trim();
    return text === '' ? 0 : text.split(/\s+/).length;
}

const products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
];

console.log("Bai 1:", sumArray([1, 2, 3, 4]));
console.log("Bai 2:", countOccurrences([1, 2, 2, 3, 2], 2));
console.log("Bai 3:", removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));
console.log("Bai 4:", flattenArray([[1, 2], [3, 4]]));
console.log("Bai 5:", isSymmetric([1, 2, 3, 2, 1]));
console.log("Bai 6:", findSecondLargest([3, 1, 4, 2, 4]));
console.log("Bai 7:", sortProductsByPrice(products));
console.log("Bai 8:", findMostExpensiveProduct(products));
console.log("Bai 9:", groupByType([
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
]));
console.log("Bai 10:", isSubset([1, 2, 3, 4], [2, 4]));
console.log("Bai 11:", findMaxKey({ a: 10, b: 20, c: 15 }));
console.log("Bai 12:", mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 }));
console.log("Bai 13:", countElements(['a', 'b', 'a', 'c', 'b', 'a']));
console.log("Bai 14:", cleanObject({ a: 1, b: null, c: undefined, d: 4 }));
console.log("Bai 15:", hasDuplicate([1, 2, 3, 4, 2]));
console.log("Bai 16:", sumByGroup([
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
], 'type'));
console.log("Bai 17:", uniqueValues([1, 2, 3], [3, 4, 5]));
console.log("Bai 18:", isPermutation([1, 2, 3], [3, 2, 1]));
console.log("Bai 19:", findLongestString(['abc', 'abcd', 'a']));
console.log("Bai 20:", intersection([1, 2, 3], [2, 3, 4]));
console.log("Bai 21:", filterByMinValue([5, 10, 15, 20], 12));
console.log("Bai 22:", findLongestValue({ a: 'cat', b: 'elephant', c: 'dog' }));
console.log("Bai 23:", groupByFirstLetter(['apple', 'banana', 'avocado', 'blueberry']));
console.log("Bai 24:", getAdults([
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 22 }
]));
console.log("Bai 25:", convertToArray({ a: 1, b: 2, c: 3 }));
console.log("Bai 26:", sortStringsByLength(['a', 'ccc', 'bb']));
console.log("Bai 27:", sumByKey([
    { type: 'fruit', price: 10 },
    { type: 'vegetable', price: 20 },
    { type: 'fruit', price: 30 }
], 'price'));
console.log("Bai 28:", countWords('Hello world! Welcome to JavaScript'));
console.log("Bai 29:", findMinKey({ a: 100, b: 20, c: 50 }));