let session = {
    title: 'ESNext',
    durationInMin: 30,
    [Symbol('Symbol.speaker')]: 'Ravi Tiwari'
};


console.log(Object.keys(session));

console.log(Reflect.ownKeys(session));



let talk = Object.create(session, { venue: { value: 'ToTheNew' } });

console.log(Object.keys(talk)); // logs empty list - venue is not enumerable property

console.log(Reflect.ownKeys(talk));
