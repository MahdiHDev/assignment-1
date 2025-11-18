const formatValue = (
    value: string | boolean | number
): string | boolean | number => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "boolean") {
        return !value;
    } else if (typeof value === "number") {
        return value * 10;
    } else {
        return "invalid type";
    }
};

const getLength = (value: string | any[]): number => {
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

interface IBook {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (value: IBook): string => {
    return `Title: ${value.title}, Author: ${value.author}, Published: ${
        value.publishedYear
    }, Available: ${value.isAvailable ? "Yes" : "No"}`;
};

const myBook: IBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    isAvailable: true,
};

type Arr = (string | number)[];

const getUniqueValues = (array1: Arr, array2: Arr): Arr => {
    const temp: Arr = []; // [1, 2, 2, 3, 4]
    for (let i of array1) {
        let isFound = false;
        for (let j of temp) {
            if (i === j) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            temp.push(i);
        }
    }
    for (let i of array2) {
        let isFound = false;
        for (let j of temp) {
            if (i === j) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            temp.push(i);
        }
    }
    return temp;
};

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const products = [
    { name: "Pen", price: 10, quantity: 2 },
    { name: "Notebook", price: 25, quantity: 3, discount: 10 },
    { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

const calculateTotalPrice = (products: Product[]) => {
    return products
        .map((product) => {
            const discount = product.discount
                ? (product.price * product.discount) / 100
                : 0;
            const discountedPrice = product.price - discount;

            return discountedPrice * product.quantity;
        })
        .reduce((total, current) => total + current, 0);
};
