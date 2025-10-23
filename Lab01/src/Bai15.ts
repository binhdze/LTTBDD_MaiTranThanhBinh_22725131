import { Book } from "./Bai6";
import { User } from "./Bai7";

export class Library {
    books: Book[] = [];
    users: User[] = [];
    addBook(book: Book) { this.books.push(book); }
    addUser(user: User) { this.users.push(user); }
}