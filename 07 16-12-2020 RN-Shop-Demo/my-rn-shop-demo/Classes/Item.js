
export default class Item {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    show() {
        console.log(`my is is ${this.id} and my name is ${this.name} and my price is ${this.price}`)
    }
}