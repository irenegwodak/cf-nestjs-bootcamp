comprobar versión npm:
> node -v

instalar/actualizar npm (de forma global): (de forma local revisar comando)
> npm install -g npm
> npm update -g npm

iniciar proyecto:
> npm init
rellenar datos
se crea el archivo package.json

modificar-añadir scripts:
para ejecutar + rápido el programa ("npm run dev" en lugar de "node nombre-de-archivo"):
> "dev": "node index.js"

instalar dependencias:
> npm install lodash --save
Se genera la línea correspondiente en "dependencies" o "dev-dependencies" en package.json

En caso de que no estén instaladas pero sí en el package.json:
> npm install
o
> npm i