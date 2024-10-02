// 1. Factory function to create animal objects
function animal(noOfLegs, vegetarian) {
    return {
      noOfLegs: noOfLegs,
      vegetarian: vegetarian,
      eat: function() {
        return "eating...";
      },
      greet: function() {
        return `Hi, I have ${noOfLegs} legs.`;
      }
    };
  }
  
  
  let a1 = animal(4, true);
  console.log(a1.eat()); // "eating..."
  console.log(a1.greet()); // "Hi, I have 4 legs."
  
  // 2. Constructor function to create animal objects
  function AnimalCF(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  
    // Methods
    this.eat = function() {
      return "eating...";
    };
    this.greet = function() {
      return `Hi, I have ${noOfLegs} legs.`;
    };
  }
  

  let animalCF = new AnimalCF(4, true);
  console.log(animalCF.eat()); // "eating..."
  console.log(animalCF.greet()); // "Hi, I have 4 legs."
  
  // 3. ES6 Class to create animal objects
  class AnimalES6 {
    constructor(noOfLegs, vegetarian) {
      this.noOfLegs = noOfLegs;
      this.vegetarian = vegetarian;
    }
  
    // Methods
    eat() {
      return "eating...";
    }
  
    greet() {
      return `Hi, I have ${this.noOfLegs} legs.`;
    }
  }
  
  
  let animalES6 = new AnimalES6(4, true);
  console.log(animalES6.eat()); // "eating..."
  console.log(animalES6.greet()); // "Hi, I have 4 legs."
  
  // 4. Using .call() with AnimalCF constructor
  let animalCall = {};
  AnimalCF.call(animalCall, 4, true);
  console.log(animalCall.eat()); // "eating..."
  console.log(animalCall.greet()); // "Hi, I have 4 legs."
  
  // 5. Using .apply() with AnimalCF constructor
  let animalApply = {};
  AnimalCF.apply(animalApply, [4, true]);
  console.log(animalApply.eat()); // "eating..."
  console.log(animalApply.greet()); // "Hi, I have 4 legs."
  