# N5

Este es un repositorio que contiene una aplicación en react js utilizando microfrontends con single-spa, a continuación se explica la finalidad de cada carpeta y en que puerto corre:

1. n5-app-root: corre en el puerto 9080 y es el proyecto host del proyecto
2. n5-container-mfe: corre en el puerto 9083 y es el proyecto que contenedor, donde se encuentra el api, el i18n, los botones de la página de inicio desde donde se redirige a los microfrontends de rick and morty y harry potter
3. n5-harrypotter-mfe: corre en el puerto 9082 y es el proyecto independiente que muestra la lista de personajes de harrypotter
4. n5-rickandmorty-mfe: corre en el puerto 9081 y es el proyecto independiente que muestra la lista de personajes de rickandmorty

video funcionalidad disponible en: https://youtu.be/RbWm2cMb99g

## Getting Started

1. Ejecute "git init" en cada caperta de los proyectos
2. Ejecute "npm install" en cada carpeta de los proyectos
3. Ejecute "npm start" en cada carpeta de los proyectos
4. Visite http://localhost:9080/

## Built With

- [ReactJS](https://es.reactjs.org/) - La librearía JS Utilizada
- [Single-spa](https://single-spa.js.org/docs/ecosystem-react/)
- [Styled-components](https://styled-components.com/)
- [Axios](https://axios-http.com/docs/intro) 
- [Npm](www.npmjs.com) Gestión de dependencias
- [ESlint](https://eslint.org/) y prettier Análisis y estructura de código
- [Npm](www.npmjs.com) Gestión de dependencias
- [WebPack](https://webpack.js.org/) Empaquetador de módulos

## Preguntas

### What is accessibility? How do you achieve it?

La accesibilidad es hacer que nuestras apps o sitios web sean fácil de usar para cualquier tipo de persona, personas con o sin discapacidades por ejemplo. Para lograr esto podemos apoyarnos de HTML5. Anteriormente HTML tenía etiquetas un poco limitadas que no permitian que el sitio web tuviera buena semántica, con la salidad de HTML5 tenemos etiquetas como video, header, section, nav, entre otras, que permiten esa semántica. Luego de ahí podemos pensar en otras cosas como la interación desde teclado, lectores de pantalla y diseño responsive, etc.


### What is the difference between session storage, local storage, and cookies?

Entre session storage y localstorage solamente es que el session storage se borra cuando la pestaña del navegador se cierra y local storage no se borra en ese caso

La diferencia de las anterior con las cookies es que las cookies almacena la info como pequeños archivos de texto y no se borra esa info. al cerrar la pestaña pero si tiene una fecha de caducidad

### Explain the javascript event loop (also may explain how promises or async await work in js these are basically all the same question/answer)

Event loop es la manera como javascript maneja el asincronismo. Sabemos que JS solamente tiene un hilo de ejecución, entonces lo que hace es que cada que necesita ejecutar un proceso lo lleva al event loop como en una especie de cola y lo va ejecutando, una vez termina su ejecución, vuelve y lo mete al hilo principal.

callbacks, promesas y async await son la manera que podemos manejar ese asincronismo desde el código, ahora con ecmascript tenemos async await que vino a solucionar sobre todo el callback hell y el promise hell, haciendo que nuestro código sea más limpio pero con el mismo objetivo

● If you are getting too many API calls being made from your hooks, what
can you do to prevent this?
● How do you manage the global state? And why in that way?
● What is progressive rendering?
