# Propuesta de App Básico para Apps MERN AllBlacks

## Cheatsheet utilizada para redactar éste archivo README.md
[Esta es una buena guía para para aprender a formatear los archivos README.md que se incluyen en los repositories de github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists)

## Propósito de éste App Básico
Servir como punto de partida para desarrollar apps MERN.

## Componentes de éste App Básico
* MongoDB: base de datos que almacena los datos de la aplicación.
* NodeJS:
  - API: hace posible que el acceso a los datos de la base de datos y su manipulación por parte del usuario de la aplicación.
  - Web server: almacena los elementos de la aplicación y los sirve al navegador.
  - Configuraremos el web server para que al iniciar la aplicación proporcione los datos iniciales en formato HTML en lugar de en el formato que React proporciona por defecto (javascript). Hacemos esto con dos objetivos:
    1. Que la carga de datos iniciales sea más rápida (los servimos directamente desde el servidor web en lugar de tener que solicitarlos a la base de datos de Mongo).
    2. Que los datos de la página sean legibles para las search engines (Google). De ésta forma nuestra página web será más fácil de encontrar por los usuarios que realicen búsquedas en Google y por lo tanto mejorará nuestro SEO (search engine optimization).
* React:
  - Construye la parte de la aplicación que ve el usuario (lo que se suele llamar UI, User Interface).
  - Hace posible que el usuario acceda a la API de NodeJS.

## Funcionalidad de éste App Básico
* El usuario puede introducir nombres para un concurso de nombres.


# Para iniciar este app en un equipo local
* Es necesario tener instalado MongoDB y activarlo
* npm install


# A continuación detallamos el proceso que hemos seguido para diseñar éste App Básico
* El propósito de hacer esto es que el desarrollador sepa cómo hacerlo en caso de que desee crear su propio App Básico partiendo de cero en lugar de utilizar el que le proporcionamos para su mayor comodidad.

## Crear un nuevo proyecto node
* npm init

## Instalar Dependencias Iniciales para el App en Producción (el app final que subiremos al servidor remoto definitivo)
* express: simplifica la creación de un web server en NodeJS.
* mongodb: para conectarnos con la base de datos de MongoDB.
* react: para poder utilizar ReactJS en la aplicación.
* react-dom: para poder exportar los componentes de React en los navegadores web.

## Instalar Dependencias Iniciales para el App en Development (el app temporal que utilizamos en nuestro servidor local)
* eslint: es un linter, nos indica si cometemos errores al escribir en Javascript
* babel (cli, loader, eslint, presets: es2015, react, stage-2): es un transpiler, traduce nuestro Javascript version ES6 (también llamado ES2015) en la versión más antigua de Javascript que utilizan actualmente la mayoría de los navegadores (ES5).
* webpack: comprime todos los archivos de la aplicación en un sólo fichero final.
* nodemon: nos permite refrescar la aplicación cuando introducimos cualquier cambio sin necesidad de reiniciar el servidor.

## Crear la estructura inicial de directorios
* src: abreviatura de "source", éste es el directorio en el que almacenaremos los archivos originales de la aplicación durante la fase de development.
* public: en éste directorio almacenaremos los archivos estáticos (imágenes, favicon, etc) y el archivo bundle.js resultante de comprimir los archivos del directorio src cuanto estemos preparados para pasar la aplicación al entorno de producción.
* api: aquí almacenaremos los archivos que definan la API del servidor. Es decir, los archivos que contienen las instrucciones para acceder y manipular los datos de la base de datos.

## Notas importantes sobre cómo se relacionan los diferentes archivos entre sí en NodeJS
* NodeJS previene la creación de variables globales: para acceder a una variable de un archivo desde otro, es necesario exportarla primero e importarla después.
* Hay dos opciones de exportación: export y default export.

## Crear el archivo server.js
* Este archivo va a crear el web server. Es decir, va a crear un servidor NodeJS para servir contenidos en navegadores web.
* Utilizaremos express para crear el web server.
* Express tiene una excelente guia [aqui](https://expressjs.com/).
* Los elementos básicos para crear el web server son:
  - crear una nueva instancia de express.
  - asignarle un port (algo así como el número de teléfono por el que va a llamar al navegador).
  - definir el contenido que va a enviar el servidor en función de la url que introduzca el usuario.

# React

## Empezamos por el archivo que hemos definido en webpack.config.js como entry point
* Importamos react y react-dom.
* Utilizamos react-dom para render el componente React en el div que decidamos.

## A partir de aquí, desarrollamos los child components de React con normalidad
