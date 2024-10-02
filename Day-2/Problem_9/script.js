// 1. Create the Person constructor function
function Person(name, age) {
    this.name = name; // name of the person
    this.age = age;   // age of the person
  }
  
  // 2. Add introduce method to Person.prototype
  Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  // 3. Create the Employee constructor function that inherits from Person
  function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call Person constructor to inherit properties
    this.jobTitle = jobTitle;     // Add jobTitle specific to Employee
  }
  
  // 4. Inherit Person's prototype methods for Employee
  Employee.prototype = Object.create(Person.prototype);
  
  // Set Employee.prototype's constructor to Employee (since Object.create changes it)
  Employee.prototype.constructor = Employee;
  
  // 5. Add work method to Employee.prototype
  Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  };
  
  // 6. Demonstration
  
  // Create an instance of Person
  const person1 = new Person("Alice", 25);
  person1.introduce(); // Output: "Hi, my name is Alice and I am 25 years old."
  
  // Create an instance of Employee
  const employee1 = new Employee("Bob", 30, "Software Engineer");
  employee1.introduce(); // Output: "Hi, my name is Bob and I am 30 years old."
  employee1.work();      // Output: "Bob is working as a Software Engineer."
  