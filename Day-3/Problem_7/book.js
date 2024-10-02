// books.js

// Constructor function for Book
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  // Method to get a summary of the book
  Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  };
  
  // Create an array of Book instances
  const books = [
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1949),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new Book("Moby Dick", "Herman Melville", 1851),
  ];
  
  // Export the books array
  export default books;
  