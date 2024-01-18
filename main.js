// Class 1

// class Triangle {
//   constructor() {
//     this.leftSide = 0;
//     this.rightSide = 0;
//     this.width = 0;
//   }

//   getLeftSide() {
//     return this.leftSide;
//   }

//   getRightSide() {
//     return this.rightSide;
//   }

//   getWidth() {
//     return this.width;
//   }

//   setSides(a, b, c) {
//     if (this.isValidTriangle(a, b, c)) {
//       this.leftSide = a;
//       this.rightSide = b;
//       this.width = c;
//     } else {
//       console.error(
//         "error"
//       );
//     }
//   }

//   isValidTriangle(a, b, c) {
//     return a + b > c && b + c > a && a + c > b;
//   }
// }

// // Test
// const myTriangle = new Triangle();
// myTriangle.setSides(3, 4, 5);

// console.log("Left Side:", myTriangle.getLeftSide());
// console.log("Right Side:", myTriangle.getRightSide());
// console.log("Width:", myTriangle.getWidth());

// Class 2

// class Employee {
//   constructor(id, firstName, lastName, salary) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
//   }

//   getId() {
//     return this.id;
//   }

//   getFirstName() {
//     return this.firstName;
//   }

//   getLastName() {
//     return this.lastName;
//   }

//   getSalary() {
//     return this.salary;
//   }

//   setId(id) {
//     this.id = id;
//   }

//   setFirstName(firstName) {
//     this.firstName = firstName;
//   }

//   setLastName(lastName) {
//     this.lastName = lastName;
//   }

//   setSalary(salary) {
//     this.salary = salary;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getAnnualSalary() {
//     return this.salary * 12;
//   }

//   raiseSalary(percent) {
//     this.salary *= 1 + percent / 100;
//   }
// }

// // Test
// const employee = new Employee(1, "Abdulaziz", "Yoqubov", 50000);

// console.log("Full Name:", employee.getFullName());
// console.log("Annual Salary:", employee.getAnnualSalary());

// employee.raiseSalary(10);
// console.log("Raised Salary:", employee.getSalary());

// Class 3

// class CustomDate {
//   constructor(day, month, year) {
//     this.day = day;
//     this.month = month;
//     this.year = year;
//   }

//   getDay() {
//     return this.day;
//   }

//   getMonth() {
//     return this.month;
//   }

//   getYear() {
//     return this.year;
//   }

//   setDay(day) {
//     this.day = day;
//   }

//   setMonth(month) {
//     this.month = month;
//   }

//   setYear(year) {
//     this.year = year;
//   }

//   getISOdate() {
//     const formattedDay = this.day < 10 ? `0${this.day}` : this.day;
//     const formattedMonth = this.month < 10 ? `0${this.month}` : this.month;
//     return `${formattedDay}-${formattedMonth}-${this.year}`;
//   }
// }

// // Test
// const customDate = new CustomDate(12, 5, 2023);

// console.log("ISO Date:", customDate.getISOdate());

// Class 4

// class Time {
//   constructor(hour, minute, second) {
//     this.hour = hour;
//     this.minute = minute;
//     this.second = second;
//   }

//   getHour() {
//     return this.hour;
//   }

//   getMinute() {
//     return this.minute;
//   }

//   getSecond() {
//     return this.second;
//   }

//   setHour(hour) {
//     this.hour = hour;
//   }

//   setMinute(minute) {
//     this.minute = minute;
//   }

//   setSecond(second) {
//     this.second = second;
//   }

//   nextSecond() {
//     this.second++;
//     if (this.second === 60) {
//       this.second = 0;
//       this.nextMinute();
//     }
//   }

//   previousSecond() {
//     this.second--;
//     if (this.second === -1) {
//       this.second = 59;
//       this.previousMinute();
//     }
//   }

//   nextMinute() {
//     this.minute++;
//     if (this.minute === 60) {
//       this.minute = 0;
//       this.nextHour();
//     }
//   }

//   previousMinute() {
//     this.minute--;
//     if (this.minute === -1) {
//       this.minute = 59;
//       this.previousHour();
//     }
//   }

//   nextHour() {
//     this.hour = (this.hour + 1) % 24;
//   }

//   previousHour() {
//     this.hour = (this.hour - 1 + 24) % 24;
//   }
// }

// // Test
// const time = new Time(6, 20, 10);

// console.log(
//   "Current Time:",
//   `${time.getHour()}:${time.getMinute()}:${time.getSecond()}`
// );

// time.nextSecond();
// console.log(
//   "Next Second:",
//   `${time.getHour()}:${time.getMinute()}:${time.getSecond()}`
// );

// time.previousSecond();
// console.log(
//   "Previous Second:",
//   `${time.getHour()}:${time.getMinute()}:${time.getSecond()}`
// );

// Inheritance 1

// class Shape {
//   constructor(color, filled) {
//     this.color = color;
//     this.filled = filled;
//   }

//   getColor() {
//     return this.color;
//   }

//   setColor(color) {
//     this.color = color;
//   }

//   isFilled() {
//     return this.filled;
//   }

//   setFilled(filled) {
//     this.filled = filled;
//   }
// }

// class Circle extends Shape {
//   constructor(color, filled, radius) {
//     super(color, filled);
//     this.radius = radius;
//   }

//   getRadius() {
//     return this.radius;
//   }

//   setRadius(radius) {
//     this.radius = radius;
//   }

//   getArea() {
//     return Math.PI * this.radius * this.radius;
//   }

//   getPerimeter() {
//     return 2 * Math.PI * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   constructor(color, filled, width, height) {
//     super(color, filled);
//     this.width = width;
//     this.height = height;
//   }

//   getWidth() {
//     return this.width;
//   }

//   setWidth(width) {
//     this.width = width;
//   }

//   getHeight() {
//     return this.height;
//   }

//   setHeight(height) {
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   getPerimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// // Test
// const circle = new Circle("red", true, 5);
// console.log("Circle Area:", circle.getArea());
// console.log("Circle Perimeter:", circle.getPerimeter());

// const rectangle = new Rectangle("blue", false, 4, 6);
// console.log("Rectangle Area:", rectangle.getArea());
// console.log("Rectangle Perimeter:", rectangle.getPerimeter());

// Inheritance 2

// class Person {
//   constructor(name, address) {
//     this.name = name;
//     this.address = address;
//   }

//   getName() {
//     return this.name;
//   }

//   setName(name) {
//     this.name = name;
//   }

//   getAddress() {
//     return this.address;
//   }

//   setAddress(address) {
//     this.address = address;
//   }
// }

// class Student extends Person {
//   constructor(name, address, faculty, year, university) {
//     super(name, address);
//     this.faculty = faculty;
//     this.year = year;
//     this.university = university;
//   }

//   getFaculty() {
//     return this.faculty;
//   }

//   getYear() {
//     return this.year;
//   }

//   getUniversity() {
//     return this.university;
//   }

//   setFaculty(faculty) {
//     this.faculty = faculty;
//   }

//   setYear(year) {
//     this.year = year;
//   }

//   setUniversity(university) {
//     this.university = university;
//   }
// }

// class Employee extends Person {
//   constructor(name, address, salary, work) {
//     super(name, address);
//     this.salary = salary;
//     this.work = work;
//   }

//   getSalary() {
//     return this.salary;
//   }

//   getWork() {
//     return this.work;
//   }

//   setSalary(salary) {
//     this.salary = salary;
//   }

//   setWork(work) {
//     this.work = work;
//   }
// }

// // Test
// const student = new Student(
//   "Abdualziz Yoqubov",
//   "123 Main St",
//   "Engineering",
//   2,
//   "MDIST University"
// );
// console.log("Student Name:", student.getName());
// console.log("Student Faculty:", student.getFaculty());
// console.log("Student Year:", student.getYear());
// console.log("Student University:", student.getUniversity());

// const employee = new Employee(
//   "Abdulaziz Yoqubov",
//   "456 Oak St",
//   50000,
//   "Software Developer"
// );
// console.log("Employee Name:", employee.getName());
// console.log("Employee Salary:", employee.getSalary());
// console.log("Employee Work:", employee.getWork());

// Inheritance 3

// class Animal {
//   constructor(name, speed, weight) {
//     this.name = name;
//     this.speed = speed;
//     this.weight = weight;
//   }
// }

// class Mammal extends Animal {
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight);
//     this.legs = legs;
//   }

//   getLegs() {
//     return this.legs;
//   }

//   setLegs(legs) {
//     this.legs = legs;
//   }
// }

// class Cat extends Mammal {
//   getSound() {
//     return "Meow";
//   }
// }

// class Dog extends Mammal {
//   getSound() {
//     return "Woof";
//   }
// }

// class Fish extends Animal {
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight);
//     this.size = size;
//   }

//   getSize() {
//     return this.size;
//   }

//   setSize(size) {
//     this.size = size;
//   }
// }

// class Whale extends Fish {
//   getSound() {
//     return "Poof";
//   }
// }

// class Shark extends Fish {
//   getSound() {
//     return "Sheef";
//   }
// }

// // Test
// const cat = new Cat("Fluffy", 10, 5, 4);
// console.log("Cat Name:", cat.name);
// console.log("Cat Legs:", cat.getLegs());
// console.log("Cat Sound:", cat.getSound());

// const shark = new Shark("Jaws", 25, 300, "Large");
// console.log("Shark Name:", shark.name);
// console.log("Shark Size:", shark.getSize());
// console.log("Shark Sound:", shark.getSound());

// Static keyword 1

// class CustomMethods {
//   static customKeys(obj) {
//     return Object.keys(obj);
//   }

//   static customValues(obj) {
//     return Object.values(obj);
//   }

//   static customEntries(obj) {
//     return Object.entries(obj);
//   }
// }

// class NumberCustomMethods {
//   static customIsInteger(value) {
//     return Number.isInteger(value);
//   }
// }

// class ArrayCustomMethods {
//   static customIsArray(value) {
//     return Array.isArray(value);
//   }
// }

// // Test
// const obj = { a: 1, b: 2, c: 3 };

// console.log("Keys:", CustomMethods.customKeys(obj));
// console.log("Values:", CustomMethods.customValues(obj));
// console.log("Entries:", CustomMethods.customEntries(obj));

// const integerNumber = 42;
// const floatingPointNumber = 3.14;

// console.log(
//   `${integerNumber} is integer:`,
//   NumberCustomMethods.customIsInteger(integerNumber)
// );
// console.log(
//   `${floatingPointNumber} is integer:`,
//   NumberCustomMethods.customIsInteger(floatingPointNumber)
// );

// const array = [1, 2, 3];

// console.log(`${array} is array:`, ArrayCustomMethods.customIsArray(array));

// Static keyword 2

// class EnhancedArray extends Array {
//   static isNumberArray(arr) {
//     return arr.every((element) => typeof element === "number");
//   }

//   static sum(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0);
//   }

//   static max(arr) {
//     return Math.max(...arr);
//   }

//   static min(arr) {
//     return Math.min(...arr);
//   }
// }

// // Test
// const numericArray = [1, 2, 3, 4, 5];
// const mixedArray = [1, "two", 3, "four", 5];

// console.log("isNumberArray:", EnhancedArray.isNumberArray(numericArray));
// console.log("isNumberArray:", EnhancedArray.isNumberArray(mixedArray));

// console.log("Sum:", EnhancedArray.sum(numericArray));
// console.log("Max:", EnhancedArray.max(numericArray));
// console.log("Min:", EnhancedArray.min(numericArray));

// Polymorphism and inheritance 1

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
//     investments
//   ) {
//     super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
//     this.companyPrice = companyPrice;
//     this.companiesNumber = companiesNumber;
//     this.investments = investments;
//   }

//   getWealth() {
//     return (
//       super.getWealth() +
//       this.companyPrice * this.companiesNumber +
//       this.investments
//     );
//   }
// }

// // Test
// const ordinaryPerson = new Person(200000, 1, 30000, 2, 50000);
// console.log("Ordinary Person Wealth:", ordinaryPerson.getWealth());

// const richPerson = new RichPerson(
//   500000,
//   3,
//   100000,
//   5,
//   200000,
//   1000000,
//   2,
//   500000
// );
// console.log("Rich Person Wealth:", richPerson.getWealth());
