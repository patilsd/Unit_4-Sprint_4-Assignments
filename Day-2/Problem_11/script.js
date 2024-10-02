// Base Product constructor function
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Method to display product information (shared by all products)
  Product.prototype.displayInfo = function() {
    console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
  };
  
  // Electronics constructor function inheriting from Product
  function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.brand = brand;
    this.model = model;
  }
  
  // Inherit methods from Product
  Electronics.prototype = Object.create(Product.prototype);
  Electronics.prototype.constructor = Electronics;
  
  // Methods specific to Electronics
  Electronics.prototype.powerOn = function() {
    console.log(`${this.brand} ${this.model} is now powered on.`);
  };
  
  Electronics.prototype.powerOff = function() {
    console.log(`${this.brand} ${this.model} is now powered off.`);
  };
  
  // Clothing constructor function inheriting from Product
  function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.size = size;
    this.material = material;
  }
  
  // Inherit methods from Product
  Clothing.prototype = Object.create(Product.prototype);
  Clothing.prototype.constructor = Clothing;
  
  // Method specific to Clothing
  Clothing.prototype.tryOn = function() {
    console.log(`Trying on a ${this.size} size ${this.material} ${this.name}.`);
  };
  
  // Books constructor function inheriting from Product
  function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); // Inherit properties from Product
    this.author = author;
    this.genre = genre;
  }
  
  // Inherit methods from Product
  Book.prototype = Object.create(Product.prototype);
  Book.prototype.constructor = Book;
  
  // Method specific to Books
  Book.prototype.read = function() {
    console.log(`Reading '${this.name}' by ${this.author}, Genre: ${this.genre}.`);
  };
  
  // Demonstration of the functionality
  
  // Create instances of various product types
  const phone = new Electronics("Smartphone", 699, 10, "Apple", "iPhone 14");
  const tshirt = new Clothing("T-shirt", 29.99, 50, "M", "Cotton");
  const novel = new Book("The Great Gatsby", 15.99, 100, "F. Scott Fitzgerald", "Fiction");
  
  // Display product information
  phone.displayInfo(); // Product: Smartphone, Price: $699, Quantity: 10
  tshirt.displayInfo(); // Product: T-shirt, Price: $29.99, Quantity: 50
  novel.displayInfo(); // Product: The Great Gatsby, Price: $15.99, Quantity: 100
  
  // Electronics-specific actions
  phone.powerOn(); // Apple iPhone 14 is now powered on.
  phone.powerOff(); // Apple iPhone 14 is now powered off.
  
  // Clothing-specific action
  tshirt.tryOn(); // Trying on a M size Cotton T-shirt.
  
  // Book-specific action
  novel.read(); // Reading 'The Great Gatsby' by F. Scott Fitzgerald, Genre: Fiction.
  