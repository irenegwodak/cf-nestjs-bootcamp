## USO DE MÓDULOS
Se suelen importar los módulos completos, se importan como objetos por lo tanto se mandan a llamar con la notación del punto.

Se podría importar solo una función, pero por convención se importa completo.
Ejemplo: const {add} = require('./modules/math');

# NODE - CORE
> const http = require('http');
> const server = http.createServer((request, response) => {});

# DEPENDENCIES

> const lodash = require('lodash');
> lodash.join(items, symbol);

# LOCAL
> const math = require('./modules/math');
> const ADD = math.add(5, 5);


Como se puede observar no hay distinción entre los de core y las dependencias instaladas, el sistema primero busca si está disponible en el entorno (las dependencias) y después en node.