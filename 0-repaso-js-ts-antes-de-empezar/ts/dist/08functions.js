var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var sayHi = function (name) {
    console.log("Hola ".concat(name));
};
sayHi('estudiante');
function sayGoodbye(name) {
    console.log("y ".concat(name, " se march\u00F3"));
}
sayGoodbye('estudiante');
//si no se especifica el tipo de una función, se infiere el tipo, si no hay return será void
function show() {
    console.log('hola');
}
function showO() {
    console.log('hola');
    return 1;
}
//Se pueden especificar los tipos de los datos que se envían a la función
function showT(name) {
    // name. sugiere métodos para tipo string
    console.log('hola');
    return 1;
}
function showTh(name) {
    // name. sugiere métodos para tipo array de strings
    console.log('hola');
    return 1;
}
// Destructuring
var responseDestructuring = {
    id: 1,
    name: 'Kevin',
    charge: 'Dev',
    number: 4,
};
var responseDestructuringDos = {
    id: 2,
    name: 'Amaia',
    charge: 'UI',
    number: 80,
};
//Destructuring con spread + interface
function showF(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    console.log('El name es: ', name);
    console.log('otros datos: ', other);
    return 1;
}
showF(responseDestructuringDos);
