class Product {
    // методы класса
    constructor(name, price, quntity, description) {
        this.name = name
        this.price = price
        this.quntity = quntity
        this.description = description
    }


}

function filter(arr, str) {
    const strArr = str.split('&');
    const props = strArr.map(item => ({
        ops: item.split(/(-|>=?|<=?|=)/).filter((v) => v && /[^-]/.test(v))
    }));

    const newArr = arr.filter(value => {
        for (let prop of props) {
            switch (prop.ops[1]) {
                case 'contains':
                    if (!value[prop.ops[0]].includes(prop.ops[2])) {
                        return false
                    }
                    continue
                case 'starts':

                    if (!value[prop.ops[0]].startsWith(prop.ops[2])) {
                        return false
                    }
                    continue
                case '=':
                    if (!(value[prop.ops[0]] == prop.ops[2])) {
                        return false
                    }
                    continue
                case '>':
                    if (!(value[prop.ops[0]] > (prop.ops[2]))) {
                        return false
                    }
                    continue
                case '<':
                    if (!(value[prop.ops[0]] < (prop.ops[2]))) {
                        return false
                    }
                    continue
                case '>=':
                    if (!(value.ops[prop[0]] >= (prop.ops[2]))) {
                        return false
                    }
                    continue
                case '<=':
                    if (!(value.ops[prop[0]] <= (prop.ops[2]))) {
                        return false
                    }
                    continue
            }


        }
        return true;
    })
    return newArr;
}

let hi = [
    new Product("dfd", 4, 5, "asdf"),
    new Product("newpro", 4, 6, "abc"),
    new Product("Chocopie", 30, 5, "pie"),
    new Product("fdigi", 10, 5, "nice"),
    new Product("Coffe", 50, 10, "Good")
]
console.log(filter(hi, "name-starts-fd&quntity-=5"))
