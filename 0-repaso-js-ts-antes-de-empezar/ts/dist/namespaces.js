// Ya no existen los namespaces -> se actualizan a módulos
var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User('Kevin');
    console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
var myOtherUser = new DatabaseEntity.User('Kevin 2');
console.log(myOtherUser);
//escribiendo ref sale la primera opción de  autocompletado
// /// <reference path="" />
//Es como se hiciera un import
/// <reference path="namespaces.ts" />
var myOtherUserT = new DatabaseEntity.User('CFacilito');
console.log(myOtherUserT);
