"use strict";

// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);

console.log("test's \n\tbook");

// logical operator: ||(or), &&(and), !(not)

console.log("정답확인 ----------------");
console.log(0 == false); // true
console.log(0 === false); // false

console.log("" == false); // true
console.log("" === false); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log("-----------------------");

// print(); // 에러 발생. 호이스팅이 불가능하기 때문.
// anonymous function
const print = function () {
  console.log("print");
};
print();

hoistingAble();
function hoistingAble() {
  console.log("hoisted");
}
