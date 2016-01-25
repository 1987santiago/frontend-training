1 - Generate from the following object a constructor function

```javascript
function Person(conf) {
    this._name = conf.name;
    this._steps = 0;
}

Person.prototype.getName = function() {
    return this._name;
};

Person.prototype.getSteps = function() {
    return this._steps;
};

Person.prototype.walk = function () {
    this._steps += 1;
};

var person = {
    _name: "Juan",

    getName: function() {
        return this._name;
    },

    getSteps: function() {

        return this.walk.steps;
    },

    walk: (function () {

        function walk() {

            walk.steps++;
        }

        walk.steps = 0;

        return walk;
    })();
};
```

2 - Implement a function `construct` with the following signature:

`construct(Constructor: Function, args: Array): Object`

It must reproduce exactly the behaviour of the operator `new`.

**Example**

```javascript
function Person(name) {

    this._name = name;
}

Person.prototype.sayHello = function() {

    console.log("Hi, I'm " + this._name);
}

function construct(Constructor, args) {

    var instance = Object.create(Constructor.prototype);

    var result = Constructor.apply(instance, args);

    if (result !== null && typeof result === 'object') {
        return result;
    } else {
        return instance;
    }

}

var person1 = new Person("juan");
var person2 = construct(Person, [ "pepe" ]);

console.log(person1 instanceof Person); // true
console.log(person1._name); // "juan"
console.log(person2 instanceof Person); // true
console.log(person2._name); // "pepe"
```
