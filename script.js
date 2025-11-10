function mostrarPantalla(id) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
}
function irALogin() { mostrarPantalla('pantalla-login'); }
function volverATipo() { mostrarPantalla('pantalla-tipo'); }
function irACliente() { mostrarPantalla('pantalla-cliente'); }
function volverALogin() { mostrarPantalla('pantalla-login'); }
function cambiarColor(boton) {  boton.classList.toggle("activo");}
function nuevoPedido() {mostrarPantalla('pantalla-nuevo-pedido');}
function irANuevoPedido() { mostrarPantalla('pantalla-nuevo-pedido'); }
function volverACliente() { mostrarPantalla('pantalla-cliente'); }
function confirmarPedido() {
    // Capturamos los valores
    const producto = document.getElementById("producto").value.trim();
    const cantidad = document.getElementById("cantidad").value.trim();
    const fecha = document.getElementById("fecha").value;

    // Validamos que los campos obligatorios no estén vacíos
    if (producto === "" || cantidad === "" || fecha === "") {
        alert("Por favor completa todos los campos obligatorios antes de enviar el pedido.");
        return;
    }

    // Mostramos el mensaje de confirmación
    alert("✅ Pedido registrado correctamente.\n\nProducto: " + producto + "\nCantidad: " + cantidad + "\nFecha de registro: " + fecha);

    // Limpia los campos del formulario
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("observaciones").value = "";

    // Regresa automáticamente al menú de cliente
    mostrarPantalla('pantalla-cliente');
}