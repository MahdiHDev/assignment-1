# assignment-1

What are some differences between interfaces and types in TypeScript?

Ans: টাইপস্ক্রিপ্টে টাইপ এবং ইন্টারফেসের মধ্যে তেমন কোন পার্থক্য নেই। টাইপ ব্যবহার করলে পরবর্তিতে আর টাইপ এর এট্রিবিউট এক্সটেন্ড করা যায় না অপরদিকে ইন্টারফস ব্যবহার করলে পরবর্তিতে চাহিদা অনুসারে এক্সটেন্ড করা যায়। টাইপ মুলত প্রিমিটিভ টাইপ ডাটার ক্ষেত্রে বেশি ব্যবহৃত হয়।

What is the use of the keyof keyword in TypeScript? Provide an example.

Ans: keyof ব্যবহার করলে আমরা একটি টাইপ কে union type হিসাবে ব্যবহার করতে পারি এতে করে আমাদের বার বার একই রকম union ব্যবহার করতে হয় না আমরা শুধুমাত্র একটা কি-ওয়ার্ড (keyof) ব্যবহার করে আমরা টাইপ ডিফাইন করে ফেলতে পারি যা আমাদের কোড বেইজ কে ক্লিন রাখতে সহায়তা করে।

উদাহরনস্বরুপ আমরা যদি একটি ফাংশন নেওয়ার চেষ্টা করি যা আমাদের একজন ইউজার এর একটি প্রপার্টি গেট করার ফাংশন লিখি তাহলে আমরা নরমাল ইউনিয়ন টাইপ ব্যবহার করি তাহলে এরকমভাবে ফাংশন প্যারামিটার এ টাইপ ডিফাইন করতে হবে

```ts
type User = {
    name: string;
    age: number;
    email: string;
};

function getUserProperty(user: User, key: name | age | email) {
    return user[key];
}

const person: User = {
    name: "Mahdi",
    age: 25,
    email: "mahdi@example.com",
};

console.log(getUserProperty(person, "email"));
console.log(getUserProperty(person, "name"));
```

উপরে আমাকে ম্যানুয়ালি key গুলা টাইপ ডিফাইন করে দেওয়া লাগছে কিন্তু যদি ভ্যালু গুলো সংখ্যায় অনেক বড় হয় তাহলে এভাবে দেওয়া সম্ভব না তাই আমরা এভাবে ফাংশন লিখতে পারি

```ts
function getUserProperty(user: User, key: keyof User) {
    return user[key];
}
```

এভাবে keyof এর সাহায্যে আমরা খুবই সহজে object এর key গুলোকে টাইপ হিসাবে লিখতে পারি
