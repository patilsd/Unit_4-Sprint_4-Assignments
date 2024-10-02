// library.js

// Constructor function for Book
function Book(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
  
  // Constructor function for Member
  function Member(name, borrowedBooks = []) {
    this.name = name;
    this.borrowedBooks = borrowedBooks;
  }
  
  // Method for Member to borrow a book
  Member.prototype.borrowBook = function(book) {
    if (book.isAvailable) {
      if (this.borrowedBooks.length < 3) {
        book.isAvailable = false; // Mark book as not available
        this.borrowedBooks.push(book.title); // Add book title to borrowedBooks
        console.log(`${this.name} borrowed "${book.title}".`);
      } else {
        console.log(`${this.name} cannot borrow more than 3 books.`);
      }
    } else {
      console.log(`Sorry, "${book.title}" is already borrowed.`);
    }
  };
  
  // Constructor function for PremiumMember
  function PremiumMember(name, borrowedBooks = []) {
    Member.call(this, name, borrowedBooks); // Call the Member constructor
    this.specialCollectionAccess = true; // Premium members have special access
  }
  
  // Inherit from Member
  PremiumMember.prototype = Object.create(Member.prototype);
  PremiumMember.prototype.constructor = PremiumMember;
  
  // Override borrowBook method for PremiumMember
  PremiumMember.prototype.borrowBook = function(book) {
    if (book.isAvailable) {
      if (this.borrowedBooks.length < 5) { // Premium members can borrow up to 5 books
        book.isAvailable = false; // Mark book as not available
        this.borrowedBooks.push(book.title); // Add book title to borrowedBooks
        console.log(`${this.name} borrowed "${book.title}".`);
      } else {
        console.log(`${this.name} cannot borrow more than 5 books.`);
      }
    } else {
      console.log(`Sorry, "${book.title}" is already borrowed.`);
    }
  };
  
  // Export the constructors
  export { Book, Member, PremiumMember };
  