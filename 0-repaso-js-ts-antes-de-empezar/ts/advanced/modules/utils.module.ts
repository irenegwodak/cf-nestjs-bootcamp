//El nombre de utils.module es una convención no escrita
//Para poder exportar hay que añadir la palabra reservada "export"
export const PI = 3.14;

export interface User {
  id: string;
  name: string;
}

export const generateID = () => Math.floor(Math.random() * 100);
