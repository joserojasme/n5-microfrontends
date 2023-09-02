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
3. Ejecute npm start en cada carpeta de los proyectos
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

### Prerequisites

Node js
