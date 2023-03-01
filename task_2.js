function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b
    };
    this.calculate = function (str) {

        let split = str.split(' '),
            a = BigInt(split[0]),
            op = split[1],
            b = BigInt(split[2])

        if (!this.methods[op]) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
}


export {Calculator}