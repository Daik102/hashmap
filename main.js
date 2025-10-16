#!/usr/bin/env node

import { hashMap, hashSet } from "./hashmap.js";

const test = hashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('apple', 'green');
test.set('dog', 'white');
test.set('moon', 'silver');
test.set('grape', 'yellow green');
test.set('ice cream', 'dark brown');
test.set('uniform', 'navy');

const getOne = test.get('banana');
const hasOne = test.has('peach');
const removeOne = test.remove('uniform');
const lengthOne = test.length();
// const clearOne = test.clear();
const keysOne = test.keys();
const valuesOne = test.values();
const entriesOne = test.entries();

// console.log(getOne);
// console.log(hasOne);
// console.log(removeOne);
// console.log(lengthOne);
// console.log(keysOne);
// console.log(valuesOne);
console.log(entriesOne);


const testTwo = hashSet();

testTwo.set('apple');
testTwo.set('banana');
testTwo.set('carrot');
testTwo.set('dog');
testTwo.set('elephant');
testTwo.set('frog');
testTwo.set('grape');
testTwo.set('hat');
testTwo.set('ice cream');
testTwo.set('jacket');
testTwo.set('kite');
testTwo.set('lion');
testTwo.set('apple');
testTwo.set('moon');
testTwo.set('uniform');

const hasTwo = testTwo.has('peach');
const removeTwo = testTwo.remove('uniform');
const lengthTwo = testTwo.length();
// const clearTwo = testTwo.clear();
const keysTwo = testTwo.keys();

// console.log(hasTwo);
// console.log(removeTwo);
// console.log(lengthTwo);
// console.log(clearTwo);
console.log(keysTwo);
