# Instalar typescript
`npm install -g typescript` <--Global

`npm install typescript --save-dev` <-- Proyecto

# Configurar entorno de trabajo

Dos formas: 
  - creando un package.json (npm init -y)
  - creando un tsconfig.json (tsc -init)

## package.json

> Es necesario empezar con un index.ts

- #### Manual: 
  
    `tsc nombre-del-archivos.ts` <-- Crea un nuevo archivo en js plano
    `node nombre-del-archivo.js` <-- Ejecuta un archivo de js

- #### Automático:
  
    `npm init -y`  <-- crea un package.json
    
    en package.json/scripts añadir:

    ~~~
    "start": "tsc index.ts && node index.js",
    ~~~
    
Cada vez que se escribe en consola `npm run start` se crea de nuevo el .js

- #### Digievolución
   Script para crear el archivo .js en una carpeta nueva paralela a la que ya tenemos
   Sirve para tener los archivos modificables en una carpeta `(basics)` y los compilados en otra `(dist)`.

    ~~~
    "start:types": "tsc basics/types.ts --outdir dist/ && node dist/types.js",
    ~~~


Javascript interpresado
Typescript compilado -> tiene que estar correcto para compilarlo, evitando errores que con JS no se ven hasta que se ejecuta.

---
## tsconfig.json

`tsc -init`

Modificar archivo tsconfig.json.

Editar y/o descomentar:

- Sección "Language and Environment":
  - Confirmar: "target": "ES2016", 
  > Para elegir el entorno para ser compatible con los distintos navegadores
  
- Sección "Modules"
  - "rootDir": "./src",
  > Para indicar la carpeta de los archivos base
  - Crear carpeta /src en raíz y ubicar ahí los archivos base

- Seccción "Emit":
  - "outDir": "./dist",
  > Para indicar la carpeta de transpilación
  - "noEmitOnError": true,
  > Emite error y no deja transpilar
  - "removeComments": true,
  > Mr Obvious
  - "sourceMap": true,
  > Crea un archivo de mapeo en js

  Con el comando `tsc` en terminal se transpilarán los archivos en /src a /dist.

~~~
  ### Esto no me funciona  ###


  Entrar en Debugger: 
  - Crear un launch.json con Node.js
  - Agregar:
    - "preLaunchTask": "tsc: build - tsconfig.json",
  - Quedando tal que así:
  ```
  "program": "${workspaceFolder}/src/index.ts",
  "preLaunchTask": "tsc: build - tsconfig.json",
  "outFiles": [
    "${workspaceFolder}/**/*.js"
  ]
  ```
~~~
  
  > Me funciona así:

  - Dejar el preLaunchTask sin el `- tsconfig.json`
  - "preLaunchTask": "tsc: build",
  - Ejecutar el debug: F5
  - Msg error: `No se encuentra la tarea tsc - build`
  - Click en `Configurar tarea`
  - Escoger: `ts: compilación: tsconfig.json`
  - Se crea un tasks.json
  - Cambiar: 
  - "label": "tsc: compilación: tsconfig.json"
  - por:
  - "label": "tsc: build"
  - "program" puede ser:
    - `"program": "${workspaceFolder}/src/index.ts",`
    - o
    - `"program": "${file}",`

Código final de:

```JSON 
launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Iniciar el programa",
      "skipFiles": ["<node_internals>/**"],
      "program": "${file}",
      "preLaunchTask": "tsc: build",
      "outFiles": ["${workspaceFolder}/**/*.js"]
    }
  ]
}

```
```JSON 
tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "typescript",
      "tsconfig": "tsconfig.json",
      "problemMatcher": ["$tsc"],
      "group": "build",
      "label": "tsc: build"
    }
  ]
}

```