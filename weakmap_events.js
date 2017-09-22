class Event {
    constructor(name, args) {
        this.name = name;
        this.args = args;
    }
}

let saveCart = new Event('click', { target: 'div#save-cart', data: { items: [] } });
let deleteCart = new Event('click', { target: 'div#delete-cart', data: { items: [] } });

let eventsMap = new Map();
eventsMap.set(saveCart, saveCart);
eventsMap.set('deleteCart', deleteCart);

// map can be iterated over, but a weak-map cannot be
for (let [key, val] of eventsMap) {
    console.log(key, val);
}

saveCart = null;

// logs 'false', the value is not eligible for garbage collection
console.log(eventsMap.has(saveCart));


let eventsWeakMap = new WeakMap();
eventsWeakMap.set(deleteCart, deleteCart);

deleteCart = null;
console.log(eventsWeakMap.has(deleteCart)); // the value is garbage collected on next run


