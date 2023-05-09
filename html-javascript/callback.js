"use strict";

// Javascript is synchronous. 자바스크립트는 동기적이다.
// 호이스팅 된 이후 코드가 나타나는 순서에 따라 실행된다.
// hoisting: var, funciton declaration이 있다.

// synchronous callback -----------------------------------------
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

// asynchronous callback -----------------------------------------
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

// 콜백지옥...! 예제
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {}, 2000);
  }

  getRoles(user, onSuccess, onError) {}
}
