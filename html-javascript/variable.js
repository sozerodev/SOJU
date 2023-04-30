"use strict";

// 2. variable
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;

const notAnumber = "not a number" / 2;

console.log(infinity); // Infinity
console.log(negativeInfinity); // NaN
console.log(notAnumber); // -Infinity

const bigInt = 123456789012345678901234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// Symbol
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
