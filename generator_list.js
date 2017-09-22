function List() {
    this.store = [];
}

List.prototype.add = function (...item) {
    this.store.push(...item);
    return this;
}


List.prototype[Symbol.iterator] = function* generator() { // note the 'function*'
    for (let item of this.store) {
        yield item; // yield returns the value and pauses code
    }
}



let vowels = new List().add('a').add('e', 'i', 'o', 'u');


for (let char of vowels) {
    console.log(char);
}
