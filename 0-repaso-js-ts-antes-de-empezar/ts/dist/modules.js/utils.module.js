"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateID = exports.PI = void 0;
//El nombre de utils.module es una convención no escrita
//Para poder exportar hay que añadir la palabra reservada "export"
exports.PI = 3.14;
var generateID = function () { return Math.floor(Math.random() * 100); };
exports.generateID = generateID;
