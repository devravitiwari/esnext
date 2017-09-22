let sym = Symbol('A symbol description'); // description is optional
console.log(sym) // logs Symbol(A symbol description)
typeof sym // logs "symbol"


let sym1 = new Symbol(); // throws TypeError 


// Symbols as enums
let accountType = {
    SAVING: Symbol('Savings Account'),
    CURRENT: Symbol('Current Account'),
    INVESTMENT: Symbol('Investment Account'),
    DEMAT: Symbol('Demat Account')
};

class Customer {
    constructor(name) {
        this.name = name;
    }

    setAccountType(accountType) {
        if (this.accountType) {
            throw new Error(`Account has been set for this customer. 
                            To change account use "changeAccountTypeTo()"`);
        }
        this.accountType = accountType;
    }

    changeAccountTypeTo(accountType) {
        if (!this.accountType) {
            throw new Error(`Account is not set for this customer. 
                            To set account use "setAccountType"`);
        }
        this.accountType = accountType;
    }
}

// set account of customer
let customerX = new Customer('Mr X');
customerX.setAccountType(accountType.CURRENT);
customerX.changeAccountTypeTo(accountType.SAVING);
