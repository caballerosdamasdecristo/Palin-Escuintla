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
        event.preventDefault();
        return false;
    }
    if (!nombrePattern.test(primerApellido)) {
        alert('Caracteres inválidos en Primer Apellido');
        event.preventDefault();
        return false;
    }
    if (segundoApellido && !nombrePattern.test(segundoApellido)) {
        alert('Caracteres inválidos en Segundo Apellido');
        event.preventDefault();
        return false;
    }
    if (apellidoCasada && !nombrePattern.test(apellidoCasada)) {
        alert('Caracteres inválidos en Apellido de Casada');
        event.preventDefault();
        return false;
    }
    if (!numeroPattern.test(telefono)) {
        alert('Caracteres inválidos en Teléfono');
        event.preventDefault();
        return false;
    }
    if (document.getElementById('dpiM').style.display !== 'none' && !numeroPattern.test(dpi)) {
        alert('Caracteres inválidos en DPI');
        event.preventDefault();
        return false;
    }
    if (hombroCarga === "") {
        alert('Por favor, seleccione una opción válida para Hombro que Carga');
        event.preventDefault();
        return false;
    }
    if (anioIngreso === "") {
        alert('Por favor, seleccione una opción válida para Año de ingreso');
        event.preventDefault();
        return false;
    }
    if (!numeroPattern.test(edad) || edad.length !== 2) {
        alert('Edad inválida. Debe ser un número de 2 dígitos.');
        event.preventDefault();
        return false;
    }

    return true;
}

function mostrarCampoDPI() {
    const dpiSelect = document.getElementById('dpiMSelect');
    const dpiInput = document.getElementById('dpiM');
    if (dpiSelect.value === 'ingresar') {
        dpiInput.style.display = 'block';
    } else {
        dpiInput.style.display = 'none';
    }
}

function mostrarApellidoCasada() {
    const generoSelect = document.getElementById('genero');
    const apellidoCasadaLabel = document.getElementById('apellidoCasadaLabel');
    const apellidoCasadaInput = document.getElementById('apellidoCasada');
    if (generoSelect.value === 'femenino') {
        apellidoCasadaLabel.style.display = 'block';
        apellidoCasadaInput.style.display = 'block';
    } else {
        apellidoCasadaLabel.style.display = 'none';
        apellidoCasadaInput.style.display = 'none';
    }
}

function cargarMunicipios() {
    const departamentos = {
        "Guatemala": ["Guatemala", "Santa Catarina Pinula", "San José Pinula", "San José del Golfo", "Palencia", "Chinautla", "San Pedro Ayampuc", "Mixco", "San Pedro Sacatepéquez", "San Juan Sacatepéquez", "San Raymundo", "Chuarrancho", "Fraijanes", "Amatitlán", "Villa Nueva", "Villa Canales", "Petapa"],
        "El Progreso": ["Guastatoya", "Morazán", "San Agustín Acasaguastlán", "San Cristóbal Acasaguastlán", "El Jícaro", "Sansare", "Sanarate", "San Antonio La Paz"]
    };

    const departamentoSelect = document.getElementById('departamento');
    const municipioSelect = document.getElementById('municipio');
    const selectedDepartamento = departamentoSelect.value;

    municipioSelect.innerHTML = '<option value="">Seleccione un municipio</option>';

    if (selectedDepartamento) {
        const municipios = departamentos[selectedDepartamento];
        municipios.forEach(municipio => {
            const option = document.createElement('option');
            option.value = municipio;
            option.textContent = municipio;
            municipioSelect.appendChild(option);
        });
    }
}

function calcularEdad() {
    const dia = document.getElementById('diaNacimiento').value;
    const mes = document.getElementById('mesNacimiento').value;
    const anio = document.getElementById('anioNacimiento').value;
    const fechaNac = new Date(anio, mes - 1, dia);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mesDiferencia = hoy.getMonth() - fechaNac.getMonth();
    if (mesDiferencia < 0 || (mesDiferencia === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    document.getElementById('edadM').value = edad;
}

window.onload = function() {
    cargarAnios();
    document.getElementById('dpiMSelect').addEventListener('change', mostrarCampoDPI);
    document.getElementById('genero').addEventListener('change', mostrarApellidoCasada);
    document.getElementById('departamento').addEventListener('change', cargarMunicipios);
    document.getElementById('diaNacimiento').addEventListener('input', calcularEdad);
    document.getElementById('mesNacimiento').addEventListener('input', calcularEdad);
    document.getElementById('anioNacimiento').addEventListener('input', calcularEdad);
};
