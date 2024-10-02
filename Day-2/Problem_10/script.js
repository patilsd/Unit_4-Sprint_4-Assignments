// Car Constructor
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }
  
  // Customer Constructor
  function Customer(name) {
    this.name = name;
    this.rentedCars = [];
  }
  
  // Method to rent a car
  Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
      car.isAvailable = false;
      this.rentedCars.push(car);
      console.log(`${this.name} rented a ${car.make} ${car.model}`);
    } else {
      console.log(`Sorry, the ${car.make} ${car.model} is already rented.`);
    }
  };
  
  // Method to return a car
  Customer.prototype.returnCar = function(car) {
    const index = this.rentedCars.indexOf(car);
    if (index !== -1) {
      this.rentedCars.splice(index, 1);
      console.log(`${this.name} returned the ${car.make} ${car.model}`);
      
      // Simulate delay in return processing
      setTimeout(() => {
        car.isAvailable = true;
        console.log(`${car.make} ${car.model} is now available for rent.`);
      }, 2000);
    } else {
      console.log(`${this.name} does not have this car rented.`);
    }
  };
  
  // PremiumCustomer Constructor (inherits from Customer)
  function PremiumCustomer(name, discountRate = 10) {
    Customer.call(this, name); // Inherit properties from Customer
    this.discountRate = discountRate; // Extra property for premium customers
  }
  
  // Inherit methods from Customer
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  
  // Function to calculate rental prices
  function calculateRentalPrice(carType, days, customer) {
    const basePrice = 50; // Base price per day
    let typeMultiplier;
  
    // Different rates for different car types
    switch (carType) {
      case 'SUV':
        typeMultiplier = 1.5;
        break;
      case 'Sedan':
        typeMultiplier = 1.2;
        break;
      default:
        typeMultiplier = 1;
    }
  
    let totalPrice = basePrice * typeMultiplier * days;
  
    // Apply discount for PremiumCustomers
    if (customer instanceof PremiumCustomer) {
      totalPrice = totalPrice * (1 - customer.discountRate / 100);
      console.log(`Discount applied! Final price for ${customer.name}: $${totalPrice}`);
    } else {
      console.log(`Total price for ${customer.name}: $${totalPrice}`);
    }
  
    return totalPrice;
  }
  
  // Maintenance function to handle car maintenance
  function Maintenance(car, delay) {
    console.log(`${car.make} ${car.model} is undergoing maintenance...`);
    
    setTimeout(() => {
      car.isAvailable = true;
      console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
  }
  
  // Demonstration of the functionality
  
  // Create car objects
  const car1 = new Car("Toyota", "Corolla", 2020);
  const car2 = new Car("Ford", "Mustang", 2021);
  const car3 = new Car("Honda", "CR-V", 2022);
  const car4 = new Car("Tesla", "Model S", 2023);
  
  // Create regular and premium customers
  const customer1 = new Customer("Alice");
  const customer2 = new PremiumCustomer("Bob", 15);
  
  // Renting cars
  customer1.rentCar(car1); // Alice rents the Toyota
  customer2.rentCar(car2); // Bob rents the Ford
  
  // Trying to rent an already rented car
  customer1.rentCar(car2); // Should display that the car is already rented
  
  // Calculate rental prices
  calculateRentalPrice("Sedan", 5, customer1); // Regular customer
  calculateRentalPrice("SUV", 3, customer2);   // Premium customer with discount
  
  // Returning cars
  customer1.returnCar(car1); // Alice returns the Toyota
  customer2.returnCar(car2); // Bob returns the Ford
  
  // Maintenance handling
  Maintenance(car3, 3000); // Honda CR-V goes into maintenance for 3 seconds
  
  // Demonstrating call, apply, and bind
  const rentCarForBob = customer1.rentCar.bind(customer2, car3); // Bind Bob to rent car3
  rentCarForBob(); // Bob rents the Honda CR-V after maintenance
  