// Parecido a una interface, un molde para crear una estructura
var Animal = /** @class */ (function () {
    function Animal() {
        this.animalName = 'Generic Animal';
        this.age = 10;
    }
    Animal.prototype.sayHi = function () {
        console.log('Grrr', this.age);
    };
    return Animal;
}());
var myAnimal = new Animal();
myAnimal.animalName;
myAnimal.sayHi();
