"use strict";
// object-oriented programmming
// class: template
// object: instance of class
// Jaascript classes
// - introduced in Es6
// - syntactical sugar over prototype-based inheritance

// class가 없던 시절의 js에서는 바로 object를 만들 수 잇었음. function을 이용해 template을 만들었음

// 1. class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}:  hello`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// 생성자를 쓰지 않고 필드를 정의할 수 있음
// 그냥 쓰면 외부 접근이 가능하고 앞에 # 를 사용하면 private이 됨
// 최신문법이라 사파리에서도 안되는 경우가 있으니 사용하려면 babel을 써야 함
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

// 4. static properties and methods
// object에 상관없이 클래스 자체에 값을 할당하는 것
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // 필요한 함수만 재정의 가능 (overriding)

  draw() {
    super.draw(); // 공통적으로 정의한 draw도 부르고 싶다면?
    console.log("삼각형 그리기~");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
