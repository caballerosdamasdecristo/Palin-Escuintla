function cargarAnios() {
    const anioActual = new Date().getFullYear();
    const selectAnios = document.getElementById('anios');

    const opcionSeleccion = document.createElement('option');
    opcionSeleccion.value = "";
    opcionSeleccion.textContent = "Seleccione una opción";
    selectAnios.appendChild(opcionSeleccion);

    for (let anio = 2000; anio <= anioActual; anio++) {
        const opcion = document.createElement('option');
        opcion.value = anio;
        opcion.textContent = anio;
        selectAnios.appendChild(opcion);
    }
}

function limpiarFormulario() {
    document.getElementById('formulario-socio').reset();
}

function validarFormulario(event) {
    const nombrePattern = /^[A-Za-z]+$/;
    const numeroPattern = /^[0-9]+$/;

    const primerNombre = document.getElementById('primerNombreM').value;
    const segundoNombre = document.getElementById('segundoNombreM').value;
    const tercerNombre = document.getElementById('tercerNombreM').value;
    const primerApellido = document.getElementById('primerApellidoM').value;
    const segundoApellido = document.getElementById('segundoApellidoM').value;
    const apellidoCasada = document.getElementById('apellidoCasada').value;
    const departamento = document.getElementById('departamento').value;
    const municipio = document.getElementById('municipio').value;
    const direccion = document.getElementById('direccionM').value;
    const telefono = document.getElementById('telefonoM').value;
    const dpi = document.getElementById('dpiM').value;
    const hombroCarga = document.getElementById('hombroCargaM').value;
    const anioIngreso = document.getElementById('anios').value;
    const edad = document.getElementById('edadM').value;
    const diaNacimiento = document.getElementById('diaNacimiento').value;
    const mesNacimiento = document.getElementById('mesNacimiento').value;
    const anioNacimiento = document.getElementById('anioNacimiento').value;

    if (!nombrePattern.test(primerNombre)) {
        alert('Caracteres inválidos en Primer Nombre');
        event.preventDefault();
        return false;
    }
    if (!nombrePattern.test(segundoNombre)) {
        alert('Caracteres inválidos en Segundo Nombre');
        event.preventDefault();
        return false;
    }
    if (tercerNombre && !nombrePattern.test(tercerNombre)) {
        alert('Caracteres inválidos en Tercer Nombre');
