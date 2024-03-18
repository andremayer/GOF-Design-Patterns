class VendingMachine {
    constructor() {
        this.state = new NoSelectionState(this);
        this.itemSelected = false;
        this.selectedItemNumber = null;
        this.itemPrice = 0;
        this.items = {
            1: { name: "Soda", price: 1.5 },
            2: { name: "Chips", price: 2 },
            3: { name: "Candy", price: 1 }
        };
    }

    setState(state) {
        this.state = state;
    }

    selectItem(itemNumber) {
        if (this.items[itemNumber]) {
            console.log(`Item ${itemNumber} selected: ${this.items[itemNumber].name}. Please insert coins.`);
            this.selectedItemNumber = itemNumber;
            this.itemSelected = true;
            this.itemPrice = this.items[itemNumber].price;
            this.state.selectItem();
        } else {
            console.log(`Invalid item number: ${itemNumber}`);
        }
    }

    insertCoin(coin) {
        console.log(`Coin inserted: ${coin}`);
        this.state.insertCoin(coin);
    }

    dispenseItem() {
        console.log("Item dispensed.");
        this.state.dispenseItem();
    }

    cancelTransaction() {
        console.log("Transaction canceled.");
        this.state.cancelTransaction();
    }

    listItems() {
        console.log("Available items:");
        Object.keys(this.items).forEach(itemNumber => {
            console.log(`Item ${itemNumber}: ${this.items[itemNumber].name} - Price: ${this.items[itemNumber].price}`);
        });
    }
}

class State {
    constructor(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    selectItem() { }
    insertCoin() { }
    dispenseItem() { }
    cancelTransaction() { }
}

class NoSelectionState extends State {
    selectItem() {
        console.log("Item selected. Please insert coins.");
        this.vendingMachine.setState(new HasSelectionState(this.vendingMachine));
    }
}

class HasSelectionState extends State {
    insertCoin(coin) {
        console.log(`Coin inserted: ${coin}`);
        this.vendingMachine.setState(new SoldState(this.vendingMachine));
    }

    cancelTransaction() {
        console.log("Transaction canceled.");
        this.vendingMachine.setState(new NoSelectionState(this.vendingMachine));
    }
}

class SoldState extends State {
    dispenseItem() {
        console.log("Item dispensed.");
        this.vendingMachine.setState(new NoSelectionState(this.vendingMachine));
    }
}

const vendingMachine = new VendingMachine();

vendingMachine.listItems();

vendingMachine.selectItem(2);
vendingMachine.insertCoin(1);
vendingMachine.insertCoin(1);
vendingMachine.dispenseItem();

vendingMachine.selectItem(4);
