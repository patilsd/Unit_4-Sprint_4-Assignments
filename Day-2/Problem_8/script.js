// 1. Define the constructor function Animal with a property type
function Animal() {
    this.type = "Animal";
  }
  
  // 2. Add a method sound to Animal.prototype
  Animal.prototype.sound = function() {
    console.log("Animal sound");
  };
  
  // 3. Define the constructor function Dog that inherits from Animal
  function Dog() {
    Animal.call(this); // Inherit properties from Animal
    this.type = "Dog"; // Overriding the type property to "Dog"
  }
  
  // 4. Ensure Dog.prototype inherits from Animal.prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Set Dog.prototype's constructor to Dog (since Object.create changes the constructor)
  Dog.prototype.constructor = Dog;
  
  // 5. Override the sound method in Dog.prototype
  Dog.prototype.sound = function() {
    console.log("Bark");
  };
  
  // 6. Create an instance of Dog called myDog
  const myDog = new Dog();
  
  // 7. Call the sound method on myDog
  myDog.sound(); // Output: "Bark"
  