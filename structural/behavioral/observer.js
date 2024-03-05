class Subject {
    constructor() {
        this.observers = [];
    }

    subscribeObserver(observer) {
        this.observers.push(observer);
    }

    unsubscribeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers[index].notify(index);
        }
    }

    notifyAllObservers() {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].notify(i);
        }
    }
}

class Observer {
    notify(index) {
        console.log(`Observer ${index} is notified! `);
    }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);

subject.notifyAllObservers();