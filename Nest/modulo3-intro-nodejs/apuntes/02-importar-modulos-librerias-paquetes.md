Se pueden importar tres tipos de módulos-librerías-paquetes:

## MÓDULOS NODE - CORE MODULES
> const http = require('http');

## MÓDULOS INSTALADOS - DEPENDENCIES IN PACKAGE.JSON - LIBRERIAS/BIBLIOTECAS
Después de instalar las dependencias, se importa llamando al nombre:
> const lodash = require('lodash');

## MÓDULOS LOCALES - CREADOS EN ARCHIVOS LOCALES AL PROYECTO
Después de crear el archivo, se importa señalando la dirección del archivo, no es necesaria la extensión:
> const math = require('./modules/math');


