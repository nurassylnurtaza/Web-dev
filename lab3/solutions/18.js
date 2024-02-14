function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const sqrtNum = Math.floor(Math.sqrt(num));
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimesInRange(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            alert(i);
        }
    }
}

let n = 100;
printPrimesInRange(n);
