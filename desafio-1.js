let number = 55;  // número a ser verificado

if (isFibonacci(number)) {
    console.log(`O número ${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}

function isFibonacci(number) {
    if (number < 0) return false; // a sequência de Fibonacci não engloba números abaixo de 0.

    let a = 0, b = 1;

    while (a <= number) {
        if (a === number) {
            return true;
        }

        let nextNumber = a + b;
        a = b;
        b = nextNumber;
    }

    return false;
}