// Encapsulation in JavaScript
// Using private fields to encapsulate data within a class
// Private fields are prefixed with #
// and cannot be accessed outside the class

class BankAccount {
    #balance; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);