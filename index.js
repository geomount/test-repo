"use strict";
function sumOfAge(a, b) {
    return a.age + b.age;
}
;
// Example usage
const result = sumOfAge({
    name: "harkirat",
    age: 20
}, {
    name: "raman",
    age: 21
});
console.log(result); // Output: 9
