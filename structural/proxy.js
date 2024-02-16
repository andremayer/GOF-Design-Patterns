const UserRole = {
    USER: 'user',
    ADMIN: 'admin'
};

class BankAccount {
    constructor(name, balance) {
        this._name = name;
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    get name() {
        return this._name;
    }

    deposit(amount) {
        this._balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this._balance}`);
    }

    withdraw(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this._balance}`);
        } else {
            console.log("Insufficient balance");
        }
    }
}

class BankAccountProxy {
    constructor(realSubject, userRole, withdrawalLimit) {
        this.realSubject = realSubject;
        this.userRole = userRole;
        this.withdrawalLimit = withdrawalLimit;
    }

    get balance() {
        return this.realSubject.balance;
    }

    deposit(amount) {
        this.realSubject.deposit(amount);
    }

    withdraw(amount) {
        if (this.userRole === UserRole.ADMIN || amount <= this.withdrawalLimit) {
            this.realSubject.withdraw(amount);
        } else {
            console.log("WithdraW limit exceeded!");
        }
    }
}

const myAccount = new BankAccount("Andre", 1000);

const regularUserBankAccount = new BankAccountProxy(myAccount, UserRole.USER, 500);
regularUserBankAccount.withdraw(600);

const adminBankAccount = new BankAccountProxy(myAccount, UserRole.ADMIN, 0); // 0 = UNLIMITED :)
adminBankAccount.withdraw(600); 
