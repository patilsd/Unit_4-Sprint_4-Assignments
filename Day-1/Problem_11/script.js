// Car class using ES6 syntax
class Car {
    constructor(name, accelerationPower, brakingPower, maxFuel) {
      this.name = name;
      this.accelerationPower = accelerationPower; // meters per second squared
      this.brakingPower = brakingPower; // meters per second squared
      this.speed = 0; // Current speed in meters per second
      this.fuel = maxFuel; // Maximum fuel capacity
      this.maxFuel = maxFuel; // Store the maximum fuel capacity for refueling
    }
  
    // Method to accelerate the car
    accelerate() {
      if (this.fuel > 0) {
        this.speed += this.accelerationPower;
        this.fuel -= 1; // Consuming 1 unit of fuel per acceleration
        console.log(`Accelerating... Current speed: ${this.speed} m/s. Fuel left: ${this.fuel}`);
      } else {
        console.log("Out of fuel! Refuel the car to continue.");
      }
    }
  
    // Method to apply brakes
    brake() {
      this.speed -= this.brakingPower;
      if (this.speed < 0) {
        this.speed = 0; // Ensuring speed doesn't drop below zero
      }
      console.log(`Brakes applied. Current speed: ${this.speed} m/s.`);
    }
  
    // Method to check the car's current speed
    checkSpeed() {
      console.log(`Current speed: ${this.speed} m/s`);
      return this.speed;
    }
  
    // Method to refuel the car to its maximum capacity
    refuel() {
      this.fuel = this.maxFuel;
      console.log("Refueled to maximum capacity.");
    }
  
    // Method to simulate a driving session
    drive(accelerations, brakes) {
      console.log("Starting the driving session...");
  
      for (let i = 0; i < accelerations; i++) {
        this.accelerate();
        if (this.fuel === 0) {
          console.log("Stopping the session due to lack of fuel.");
          return;
        }
      }
  
      for (let i = 0; i < brakes; i++) {
        this.brake();
      }
  
      console.log("Driving session ended.");
    }
  }
 
  
  // Create a new Car object
  let myCar = new Car("Ferrari", 5, 3, 10); // accelerationPower: 5, brakingPower: 3, maxFuel: 10
  
  // Accelerate the car 3 times
  myCar.accelerate(); // Accelerating... Current speed: 5 m/s. Fuel left: 9
  myCar.accelerate(); // Accelerating... Current speed: 10 m/s. Fuel left: 8
  myCar.accelerate(); // Accelerating... Current speed: 15 m/s. Fuel left: 7
  
  // Apply the brakes 2 times
  myCar.brake(); // Brakes applied. Current speed: 12 m/s.
  myCar.brake(); // Brakes applied. Current speed: 9 m/s.
  
  // Check the car's current speed
  myCar.checkSpeed(); // Current speed: 9 m/s
  
  // Refuel the car
  myCar.refuel(); // Refueled to maximum capacity.
  
  // Simulate a driving session with 5 accelerations and 3 brake applications
  myCar.drive(5, 3);
  
  // Check the car's current speed again after the driving session
  myCar.checkSpeed();
  