document.addEventListener('DOMContentLoaded', function () {
    cargarUbigeo(); // Cargar ubigeo al cargar la página

    // Evento de clic en la tabla
    document.getElementById('tablaUbigeo').addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            // Botón enviar clicado
            const fila = event.target.closest('tr');
            enviarUbigeo(fila);
        }
    });

    // Evento de doble clic en la tabla
    document.getElementById('tablaUbigeo').addEventListener('dblclick', function (event) {
        if (event.target.tagName !== 'BUTTON') {
            // Cualquier parte de la fila clicada (excepto el botón)
            const fila = event.target.closest('tr');
            alertarUbigeo(fila);
        }
    });

    // Evento de búsqueda de ubigeo
    document.getElementById('ubigeoBusqueda').addEventListener('input', function () {
        filtrarUbigeo();
    });
});


function cargarUbigeo() {
    const tablaUbigeo = document.getElementById('tablaUbigeo').getElementsByTagName('tbody')[0];

    // Ejemplo de datos de ubigeo 
    const ubigeoDatos = [
        { departamento: 'Lima', provincia: 'Lima', distrito: 'Miraflores' },
        { departamento: 'Arequipa', provincia: 'Arequipa', distrito: 'Cayma' },
        { departamento: 'Cusco', provincia: 'Cusco', distrito: 'Cusco' },
    ];

    ubigeoDatos.forEach(ubigeo => {
        const fila = tablaUbigeo.insertRow();
        fila.innerHTML = `
            <td>${ubigeo.departamento}</td>
            <td>${ubigeo.provincia}</td>
            <td>${ubigeo.distrito}</td>
            <td><button>Enviar</button></td>
        `;
    });
}

function enviarUbigeo(fila) {
    // Implementa la lógica para enviar el ubigeo según la fila seleccionada
    const departamento = fila.cells[0].textContent;
    const provincia = fila.cells[1].textContent;
    const distrito = fila.cells[2].textContent;

    alert(`Ubigeo enviado: Departamento: ${departamento}, Provincia: ${provincia}, Distrito: ${distrito}`);

    const ubigeoSeleccionado = {
        departamento,
        provincia,
        distrito
    };
    localStorage.setItem('ubigeoSeleccionado', JSON.stringify(ubigeoSeleccionado));

    window.location.href = 'cliente.html';
}

function alertarUbigeo(fila) {
    // Implementa la lógica para alertar sobre el ubigeo según la fila seleccionada
    const departamento = fila.cells[0].textContent;
    const provincia = fila.cells[1].textContent;
    const distrito = fila.cells[2].textContent;

    alert(`Ubigeo seleccionado: Departamento: ${departamento}, Provincia: ${provincia}, Distrito: ${distrito}`);
}

function filtrarUbigeo() {
    const departamentoFiltro = document.getElementById('departamentoBusqueda').value.toLowerCase();
    const provinciaFiltro = document.getElementById('provinciaBusqueda').value.toLowerCase();
    const distritoFiltro = document.getElementById('distritoBusqueda').value.toLowerCase();

    const tablaUbigeo = document.getElementById('tablaUbigeo').getElementsByTagName('tbody')[0];
    const filas = tablaUbigeo.getElementsByTagName('tr');

    for (const fila of filas) {
        const departamento = fila.cells[0].textContent.toLowerCase();
        const provincia = fila.cells[1].textContent.toLowerCase();
        const distrito = fila.cells[2].textContent.toLowerCase();

        const cumpleDepartamento = departamento.includes(departamentoFiltro);
        const cumpleProvincia = provincia.includes(provinciaFiltro);
        const cumpleDistrito = distrito.includes(distritoFiltro);

        // Oculta o muestra la fila según los filtros
        fila.style.display = cumpleDepartamento && cumpleProvincia && cumpleDistrito ? '' : 'none';
    }
}


