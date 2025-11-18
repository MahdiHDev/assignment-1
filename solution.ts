const formatValue = (
    value: string | boolean | number
): string | boolean | number => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "boolean") {
        return !value;
    } else {
        return value * 10;
    }
};

const getLength = <T>(value: T): number => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        throw new Error("Invalid type");
    }
};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

type Book = {
    title: string;
    rating: number;
};

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];

const filterByRating = (books: Book[]): Book[] =>
    books.filter((book) => book.rating >= 4);

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const users = [
    { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
    { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
    { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

const filterActiveUsers = (users: User[]): User[] =>
    users.filter((user) => user.isActive);

console.log(filterActiveUsers(users));
