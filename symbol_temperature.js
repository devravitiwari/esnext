class Temperature {
    constructor(measure, unit) {
        this.measure = measure;
        this.unit = unit;
    }

    // A well-known symbol used as a key for method name
    [Symbol.toPrimitive](hint) { 
        let rv;
        switch (hint) {
            case 'string': {
                rv = `${this.measure} degrees ${this.unit}`;
                break;
            }
            case 'number':
            case 'default': {
                rv = this.measure;
                break;
            }
        }
        return rv;
    }
}

class CelsiusTemperature extends Temperature {
    constructor(measure) {
        super(measure, 'Celsius');
    }
}

class FahrenheitTemperature extends Temperature {
    constructor(measure) {
        super(measure, 'Fahrenheit');
    }
}

let celsius = new CelsiusTemperature(100);
let fahrenheit = new FahrenheitTemperature(celsius * 9 / 5 + 32);

console.log(`Boiling point of water is ${celsius} (${fahrenheit})`);
