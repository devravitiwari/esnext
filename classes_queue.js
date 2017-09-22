class Queue extends Array {
    enque(...item) {
        return super.push(...item);
    }

    dequeue() {
        return super.shift();
    }
}

let q = new Queue();

q.enque(2, 3, 5, 7, 11, 13, 17);
console.log(q);

[1, 2, 3, 4].forEach(x => q.dequeue());
console.log(q);
