function decimalToBinary(decimalNumber) {
    if (decimalNumber === 0) {
        return '0';
    }

    let binary = '';
    while (decimalNumber > 0) {
        const remainder = decimalNumber % 2;
        binary = remainder + binary;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    return binary;
}

// Example usage:
const input1 = 7;
console.log(`Input: ${input1}\nOutput: ${decimalToBinary(input1)}`);

const input2 = 10;
console.log(`Input: ${input2}\nOutput: ${decimalToBinary(input2)}`);

const input3 = 33;
console.log(`Input: ${input3}\nOutput: ${decimalToBinary(input3)}`);
