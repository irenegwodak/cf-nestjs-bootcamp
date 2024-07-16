API (Application Programming Interface) - **Interfaz** de programación que permite la comunicación entre aplicaciones.
REST - Estilo de **arquitectura** para el diseño de aplicaciones distribuidas.
RESTful - Adjetivo que describe servicios que **implementan** REST.
API REST o RESTful: API que sigue los principios de REST.

JSON (Javascript Object Notation) - Estándar para compartir info.
Extensión de navegador -> JSON formatter

- Métodos HTTP:
  - GET
  - POST
  - PUT
  - DELETE


Cliente - Controller - Service

Flujo
Cliente - navegador solicita al servidor info
Controller - entrada a nuestro servidor, recibe la petición del cliente y busca los servicios a los que solicitar la info
Service - Reciben la petición del controller y devuelven la info
Controller - Recibe toda la info de los distintos servicios, los junta y los manda al cliente.