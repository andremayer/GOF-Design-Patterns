class Pizza {

    constructor() {
        this.crust = "";
        this.sauce = "";
        this.toppings = [];
    }

    order() {
        console.log(`I Want a Pizza with ${this.crust} crust, ${this.sauce} sauce, and toppings: ${this.toppings.join(", ")}`);
    }
    
}

class PizzaBuilder {

    constructor() {
        this.pizza = new Pizza();
    }

    addCrust(crust) {
        this.pizza.crust = crust;
        return this;
    }

    addSauce(sauce) {
        this.pizza.sauce = sauce;
        return this;
    }

    addTopping(topping) {
        this.pizza.toppings.push(topping);
        return this;
    }

    build() {
        return this.pizza;
    }

}

const pizzaBuilder = new PizzaBuilder();
const pizza = pizzaBuilder
    .addCrust("Thin")
    .addSauce("Garlic")
    .addTopping("Pepperoni")
    .addTopping("Cheese")
    .build();

pizza.order();
