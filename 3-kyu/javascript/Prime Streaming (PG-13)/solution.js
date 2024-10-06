class Primes {
    static * stream() {
        const primesArray = Primes.primesArray;
        for (let i = 0; i < 20000000; i++) {
            if (primesArray[i])
                yield i;
        }
    }
    static get primesArray() {
        if (!this._primesArray) {
            this._primesArray = this.generatePrimeArray();
        }
        return this._primesArray;
    }
    static generatePrimeArray() {
        const primesArray = [];
        for (let i = 0; i < 20000000; i++) {
            if (Primes.isPrime(i))
                primesArray.push(true);
            else
                primesArray.push(false);
        }
        return primesArray;
    }
    static isPrime(number) {
        if (number <= 1) return false;
        if (number <= 3) return true;
        if (number % 2 === 0 || number % 3 === 0) return false;
        let i = 5;
        while (i * i <= number) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }
}
