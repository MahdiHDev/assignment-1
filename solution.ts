const formatValue = (
    value: string | boolean | number
): string | boolean | number => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "boolean") {
        return !value;
    }
    return value;
};

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
