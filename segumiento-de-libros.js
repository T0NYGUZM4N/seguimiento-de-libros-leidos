let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log("Libro agregado: " + titulo);
}

agregarLibro("El señor de los anillos")
agregarLibro("100 años de soledad")

function mostrarLibrosLeidos() {
    console.log("Mostrando libros leidos: " + librosLeidos.join(", "));
}

librosLeidos.push("El principito");
librosLeidos.push("El alquimista");
librosLeidos.push("Harry Potter");
librosLeidos.push("los miserables");
librosLeidos.push("El niño con el pijama de rayas");


mostrarLibrosLeidos();