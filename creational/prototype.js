var personPrototype = {
    sayHi: function() {
        console.log("Hi, my name is " + this.name + ", and I am " + this.age + " years old!");
    },
    sayBye: function() {
        console.log("Bye!");
    }
};

function Person(name, age) {
    name = name || "John Doe";
    age = age || 26;

    function constructorFunction(name, age) {
        this.name = name;
        this.age = age;
    };

    constructorFunction.prototype = personPrototype;

    var instance = new constructorFunction(name, age);
    return instance;
}

var person1 = Person();
var person2 = Person("Ronaldinho Gaucho", 43);

person1.sayHi();
person2.sayHi();