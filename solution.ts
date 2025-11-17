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

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

const getLength = <T>(value: T): number => {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        throw new Error("Invalid type");
    }
};

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
