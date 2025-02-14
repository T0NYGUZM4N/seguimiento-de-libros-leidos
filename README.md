# Gestor de Libros Leídos en JavaScript

Este es un pequeño programa en JavaScript que permite agregar títulos de libros a una lista y mostrarlos en la consola.

## 📌 Descripción

El programa contiene dos funciones principales:

agregarLibro(titulo): Agrega un libro a la lista de libros leídos.

mostrarLibrosLeidos(): Muestra en la consola todos los libros que han sido agregados.

## 🚀 Uso

1️⃣ Incluir el código

let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log("Mostrando libros leídos: " + librosLeidos.join(", "));
}

// Ejemplo de uso
agregarLibro("El principito");
agregarLibro("El alquimista");
mostrarLibrosLeidos();

2️⃣ Ejecutar el código

Guarda el código en un archivo .js y ejecútalo en la consola del navegador o con Node.js:

node nombreDelArchivo.js

## 📌 Salida esperada en consola

Mostrando libros leídos: El principito, El alquimista

## 📌 Mejoras posibles

Agregar una opción para eliminar libros.

Guardar la lista en localStorage para persistencia en el navegador.

Crear una interfaz gráfica con HTML y CSS.

## 📌 Autor

Marco Antonio Guzmán Partida

Desarrollado como parte de la práctica de JavaScript
