
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    
    // Limpiar el formulario después de enviarlo
    document.getElementById('formularioContacto').reset();
});
