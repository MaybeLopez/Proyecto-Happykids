

    // Función para manejar el envío del formulario
    document.getElementById("quizForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtener los valores ingresados por el usuario
        var sentimientoParque = document.getElementById("sentimiento-parque").value;
        var situacionIncomodo = document.getElementById("situacion-incomodo").value;
        var primerJuego = document.getElementById("primer-juego").value;

        // Mostrar los resultados en la consola (puedes enviarlos a un servidor o procesarlos como desees)
        console.log("1. Sentimiento en el parque de diversiones:", sentimientoParque);
        console.log("2. Situación que causa incomodidad:", situacionIncomodo);
        console.log("3. Sentimientos al jugar por primera vez:", primerJuego);

        // Aquí puedes agregar código adicional para enviar los datos a un servidor, almacenarlos, etc.
        // Por ahora, simplemente mostramos los resultados en la consola
    });

//Funcion para imprimir pagina completa
function imprimirPagina() {
    window.print();
}
