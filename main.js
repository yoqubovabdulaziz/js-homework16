// Class

// 1.

// class Triangle {
//   #leftSide;
//   #rightSide;
//   #width;
//   constructor(leftSide, rightSide, width) {
//     this.#leftSide = leftSide;
//     this.#rightSide = rightSide;
//     this.#width = width;
//   }
//   getLeftSide() {
//     return this.#leftSide;
//   }
//   getRightSide() {
//     return this.#rightSide;
//   }
//   getWidth() {
//     return this.#width;
//   }
//   setSides(leftSide, rightSide, width) {
//     (this.#leftSide = leftSide),
//       (this.#rightSide = rightSide),
//       (this.#width = width);
//   }
// }

// let res = new Triangle(4, 3, 5);

// res.setSides(1, 2, 3);

// console.log(res.getLeftSide());

// 2.

// class Employee {
//   #id;
//   #firstName;
//   #lastName;
//   #salary;

//   constructor(id, firstName, lastName, salary) {
//     this.#id = id;
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#salary = salary;
//   }
//   getId() {
//     return this.#id;
//   }
//   getFirstName() {
//     return this.#firstName;
//   }
//   getLastName() {
//     return this.#lastName;
//   }
//   getSalary() {
//     return this.#salary;
//   }
//   setId(id) {
//     this.#id = id;
//   }
//   setFirstName(fName) {
//     this.#firstName = fName;
//   }
//   setLastName(lName) {
//     this.#lastName = lName;
//   }
//   setSalary(s) {
//     this.#salary = s;
//   }

//   getFullName() {
//     return `${this.#firstName} ${this.#lastName}`;
//   }
//   getAnnualSalary() {
//     return this.#salary * 12;
//   }
//   raiseSalary(percent) {
//     return this.#salary * (1 + percent / 100);
//   }
// }

// let res = new Employee(4, "Azizbek", "Xotamaliyev", 5000);

// console.log(res.raiseSalary(10));

// 3.

// class CustomDate {
//   #day;
//   #month;
//   #year;

//   constructor(day, month, year) {
//     this.#day = day;
//     this.#month = month;
//     this.#year = year;
//   }
//   getDay() {
//     return this.#day;
//   }
//   getMonth() {
//     return this.#month;
//   }
//   getYear() {
//     return this.#year;
//   }
//   setDay(d) {
//     this.#day = d;
//   }
//   setMonth(m) {
//     this.#month = m;
//   }
//   setYear(y) {
//     this.#year = y;
//   }

//   getISOdate() {
//     let res;
//     if ((this.#month + "").length == 1) {
//       this.#month = "0" + this.#month;
//     }
//     if ((this.#day + "").length == 1) {
//       this.#day = "0" + this.#day;
//     }
//     res = `${this.#day}-${this.#month}-${this.#year}`;
//     return res;
//   }
// }

// let res = new CustomDate(4, 7, 1999);

// console.log(res.getISOdate());

// 4.

// class Time {
//   #hour;
//   #minute;
//   #second;

//   constructor(hour, minute, second) {
//     this.#hour = hour;
//     this.#minute = minute;
//     this.#second = second;
//   }
//   getHour() {
//     return this.#hour;
//   }
//   getMinute() {
//     return this.#minute;
//   }
//   getSecond() {
//     return this.#second;
//   }
//   setHour(h) {
//     this.#hour = h;
//   }
//   setMinute(m) {
//     this.#minute = m;
//   }
//   setSecond(s) {
//     this.#second = s;
//   }

//   nextSecond() {
//     let res;
//     this.#second++;
//     if (this.#second == 60) {
//       this.#second = 0;
//       this.#minute++;
//       if (this.#minute == 60) {
//         this.#minute = 0;
//         this.#hour++;
//         if (this.#hour == 24) {
//           this.#hour = 0;
//         }
//       }
//     }
//     if ((this.#hour + "").length == 1) {
//       this.#hour = "0" + this.#hour;
//     }
//     if ((this.#minute + "").length == 1) {
//       this.#minute = "0" + this.#minute;
//     }
//     if ((this.#second + "").length == 1) {
//       this.#second = "0" + this.#second;
//     }
//     res = `${this.#hour} : ${this.#minute} : ${this.#second}`;
//     return res;
//   }

//   previousSecond() {
//     let res;
//     this.#second--;
//     if (this.#second == -1) {
//       this.#second = 59;
//       this.#minute--;
//       if (this.#minute == -1) {
//         this.#minute = 59;
//         this.#hour--;
//         if (this.#hour == -1) {
//           this.#hour = 23;
//         }
//       }
//     }
//     if ((this.#hour + "").length == 1) {
//       this.#hour = "0" + this.#hour;
//     }
//     if ((this.#minute + "").length == 1) {
//       this.#minute = "0" + this.#minute;
//     }
//     if ((this.#second + "").length == 1) {
//       this.#second = "0" + this.#second;
//     }
//     res = `${this.#hour} : ${this.#minute} : ${this.#second}`;
//     return res;
//   }
// }

// let res = new Time(0, 1, 0);

// console.log(res.previousSecond());

// Inheritance

// 5.

// class Shape {
//   #color;
//   #filled;

//   constructor(color, filled) {
//     this.#color = color;
//     this.#filled = filled;
//   }
//   getColor() {
//     return this.#color;
//   }
//   setColor(c) {
//     return (this.#color = c);
//   }
//   isFilled() {
//     return this.#filled;
//   }
//   setFilled(f) {
//     this.#filled = f;
//   }
// }

// class Circle extends Shape {
//   #radius;
//   constructor(color, filled, radius) {
//     super(color, filled);
//     this.#radius = radius;
//   }
//   getRadius() {
//     return this.#radius;
//   }
//   setRadius(r) {
//     return (this.#radius = r);
//   }
//   getArea() {
//     return Math.PI * this.#radius ** 2;
//   }
//   getPerimeter() {
//     return 2 * Math.PI * this.#radius;
//   }
// }

// let cir = new Circle("green", true, 2);

// class Rectangle extends Shape {
//   #width;
//   #height;

//   constructor(color, filled, width, height) {
//     super(color, filled);
//     this.#width = width;
//     this.#height = height;
//   }
//   getWidth() {
//     return this.#width;
//   }
//   setWidth(w) {
//     return (this.#width = w);
//   }
//   getHeight() {
//     return this.#height;
//   }
//   setHeight(h) {
//     return (this.#height = h);
//   }
//   getArea() {
//     return this.#width * this.#height;
//   }
//   getPerimeter() {
//     return 2 * (this.#width + this.#height);
//   }
// }

// let rec = new Rectangle("green", true, 2, 5);

// console.log(rec.getPerimeter());

// 6.

// class Person {
//   #name;
//   #address;

//   constructor(name, address) {
//     this.#name = name;
//     this.#address = address;
//   }
//   getName() {
//     return this.#name;
//   }
//   setName(n) {
//     return (this.#name = n);
//   }
//   getAddress() {
//     return this.#address;
//   }
//   setAddress(a) {
//     this.#address = a;
//   }
// }

// class Student extends Person {
//   #faculty;
//   #year;
//   #university;

//   constructor(name, address, faculty, year, university) {
//     super(name, address);
//     this.#faculty = faculty;
//     this.#year = year;
//     this.#university = university;
//   }
//   getFaculty() {
//     return this.#faculty;
//   }
//   getYear() {
//     return this.#year;
//   }
//   getUniversity() {
//     return this.#university;
//   }
//   setFaculty(f) {
//     return (this.#faculty = f);
//   }
//   setYear(y) {
//     return (this.#year = y);
//   }
//   setUniversity(u) {
//     return (this.#university = u);
//   }
// }

// let stu = new Student("Azizbek", "Toshkent", "Engineering", 2024, "TDTU");

// class Employee extends Person {
//   #salary;
//   #work;
//   constructor(name, address, salary, work) {
//     super(name, address);
//     this.#salary = salary;
//     this.#work = work;
//   }
//   getSalary() {
//     return this.#salary;
//   }
//   getWork() {
//     return this.#work;
//   }
//   setSalary(s) {
//     return (this.#salary = s);
//   }
//   setWork(w) {
//     return (this.#work = w);
//   }
// }

// let emp = new Employee("Azizbek", "Toshkent", 5000, "Web Developer");

// console.log(emp.getWork());

// 7.

// class Animal {
//   constructor(name, speed, weight) {
//     this.name = name;
//     this.speed = speed;
//     this.weight = weight;
//   }
// }

// class Mammal extends Animal {
//   #legs;

//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight);
//     this.#legs = legs;
//   }
//   getLegs() {
//     return this.#legs;
//   }
//   setLegs(l) {
//     return (this.#legs = l);
//   }
// }

// class Fish extends Animal {
//   #size;

//   constructor(name, speed, weight, size) {
//     super(name, speed, weight);
//     this.#size = size;
//   }
//   getSize() {
//     return this.#size;
//   }
//   setSize(s) {
//     return (this.#size = s);
//   }
// }

// class Cat extends Mammal {
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight, legs);
//   }
//   getSound() {
//     return "Meow";
//   }
// }

// class Dog extends Mammal {
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight, legs);
//   }
//   getSound() {
//     return "Woof";
//   }
// }

// class Whale extends Fish {
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight, size);
//   }
//   getSound() {
//     return "Poof";
//   }
// }

// class Shark extends Fish {
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight, size);
//   }
//   getSound() {
//     return "Sheef";
//   }
// }

// Static keyword

// 8.

// let ob = {
//   name: "Azizbek",
//   nickName: "aza"
// }

// class Object {

//   static customKeys(obj) {
//     let res =[]
//     for (const key in obj) {
//       res.push(key);
//     }
//     return res
//   }
//   static customValues(obj) {
//     let res =[]
//     for (const key in obj) {
//       res.push(obj[key]);
//     }
//     return res
//   }
//   static customEntries(obj) {
//     let res =[]
//     for (const key in obj) {
//       let temp =[]
//       temp.push(key);
//       temp.push(obj[key]);
//       res.push(temp)
//     }
//     return res
//   }
// }

// console.log(Object.customEntries(ob));

// let nu = "5";

// class Number {
//   static customIsInteger(num) {
//     if (num % 1 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(Number.customIsInteger(nu));

// let ar = [5, 5, 5, 5, 5];

// class Array {
//   static customIsArray(arr) {
//     return arr.__proto__.constructor.name === "Array"
//   }
// }

// console.log(Array.customIsArray(ar));

// 9.

// let ar = [1, 3, 5, 9, 5];

// class Array {
//   static isNumberArray(arr) {
//     return arr.every((el) => el === +el);
//   }

//   static sum(arr) {
//     return arr.reduce((acc, el) => {
//       return acc + el;
//     }, 0);
//   }

//   static max(arr) {
//     return arr.reduce((acc, el) => {
//       return acc < el ? (acc = el) : acc;
//     }, 0);
//   }

//   static min(arr) {
//     return arr.reduce((acc, el) => {
//       return acc < el ? acc : (acc = el);
//     }, Infinity);
//   }
// }

// console.log(Array.min(ar));

// Polymorphism and inheritance

// 10.

// class Person {
//   constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
//     this.housePrice = housePrice;
//     this.housesNumber = housesNumber;
//     this.carPrice = carPrice;
//     this.carsNumber = carsNumber;
//     this.bankAccount = bankAccount;
//   }
//   getWealth() {
//     return (
//       this.housePrice * this.housesNumber +
//       this.carPrice * this.carsNumber +
//       this.bankAccount
//     );
//   }
// }

// class RichPerson extends Person {
//   constructor(
//     housePrice,
//     housesNumber,
//     carPrice,
//     carsNumber,
//     bankAccount,
//     companyPrice,
//     companiesNumber,
//     investigation
//   ) {
//     super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
//     this.companyPrice = companyPrice;
//     this.companiesNumber = companiesNumber;
//     this.investigation = investigation;
//   }
//   getWealth() {
//     return (
//       super.getWealth() +
//       this.companyPrice * this.companiesNumber +
//       this.investigation
//     );
//   }
// }

// let rich = new RichPerson(2, 2, 2, 2, 2, 2, 2, 2);

// console.log(rich.getWealth());
