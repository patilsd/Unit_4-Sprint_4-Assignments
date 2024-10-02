// app.js

import { Book, Member, PremiumMember } from './library.js';

// Create book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book5 = new Book("Moby Dick", "Herman Melville");

// Create a regular member
const regularMember = new Member("Alice");

// Create a premium member
const premiumMember = new PremiumMember("Bob");

// Demonstrate borrowing books
console.log("Regular Member Borrowing Books:");
regularMember.borrowBook(book1); // Alice borrows The Hobbit
regularMember.borrowBook(book2); // Alice borrows 1984
regularMember.borrowBook(book3); // Alice borrows To Kill a Mockingbird
regularMember.borrowBook(book4); // Alice cannot borrow more than 3 books

console.log("\nPremium Member Borrowing Books:");
premiumMember.borrowBook(book3); // Bob borrows To Kill a Mockingbird
premiumMember.borrowBook(book4); // Bob borrows The Great Gatsby
premiumMember.borrowBook(book5); // Bob borrows Moby Dick
premiumMember.borrowBook(book1); // Bob cannot borrow more than 5 books

// Show book availability
console.log("\nBook Availability:");
console.log(`${book1.title} is available: ${book1.isAvailable}`);
console.log(`${book2.title} is available: ${book2.isAvailable}`);
console.log(`${book3.title} is available: ${book3.isAvailable}`);
console.log(`${book4.title} is available: ${book4.isAvailable}`);
console.log(`${book5.title} is available: ${book5.isAvailable}`);

// Using bind to create a bound function for borrowing a book
const borrowBookForRegular = regularMember.borrowBook.bind(regularMember);
borrowBookForRegular(book2); // Alice borrows 1984 again
