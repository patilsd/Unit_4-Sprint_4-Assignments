// Book class using ES6 syntax
class Book {
    constructor(title, author, year, genre) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.genre = genre;
    }
  
    // Method to return book's information as a string
    getInfo() {
      return `${this.title} by ${this.author}, published in ${this.year} (${this.genre})`;
    }
  }
  
  // Factory function to create a new book
  function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
  }
  
  // Library class to manage the book collection
  class Library {
    constructor() {
      this.books = [];
    }
  
    // Method to add a book to the collection
    addBook(book) {
      this.books.push(book);
    }
  
    // Method to filter books published after a given year
    filterBooksByYear(year) {
      return this.books.filter(book => book.year > year);
    }
  
    // Method to return an array of all book titles
    getAllBookTitles() {
      return this.books.map(book => book.title);
    }
  
    // Method to calculate the total number of books
    getTotalBooks() {
      return this.books.reduce((total, book) => total + 1, 0);
    }
  
    // Method to calculate the average publication year of all books
    getAveragePublicationYear() {
      const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
      return this.books.length > 0 ? totalYears / this.books.length : 0;
    }
  }
  

  
  // Create a new library
  let myLibrary = new Library();
  
  // Add some books using the factory function
  myLibrary.addBook(createBook("1984", "George Orwell", 1949, "Dystopian"));
  myLibrary.addBook(createBook("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction"));
  myLibrary.addBook(createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic"));
  myLibrary.addBook(createBook("Sapiens", "Yuval Noah Harari", 2014, "Non-fiction"));
  
  // Get information about the books
  console.log("All book titles:", myLibrary.getAllBookTitles()); // ["1984", "To Kill a Mockingbird", "The Great Gatsby", "Sapiens"]
  
  // Filter books published after a specific year
  console.log("Books published after 1950:", myLibrary.filterBooksByYear(1950).map(book => book.getInfo()));
  
  // Calculate total number of books
  console.log("Total number of books:", myLibrary.getTotalBooks()); // 4
  
  // Calculate the average publication year
  console.log("Average publication year:", myLibrary.getAveragePublicationYear()); // Average of years
  