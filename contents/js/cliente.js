document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    //Recolección de datos
    var nombres = document.getElementById("nombres").value;
    var apellidoPaterno = document.getElementById("apellidoPaterno").value;
    var apellidoMaterno = document.getElementById("apellidoMaterno").value;

    var tipoDocumento = document.querySelector('input[name="tipoDocumento"]:checked');
    var tipoDocumentoValue = tipoDocumento ? tipoDocumento.value : '';

    var documentoInputValue = '';
    if (tipoDocumentoValue === 'DNI') {
        documentoInputValue = document.getElementById("dniInput").value;
    } else if (tipoDocumentoValue === 'PASAPORTE') {
        documentoInputValue = document.getElementById("pasaporteInput").value;
    } else if (tipoDocumentoValue === 'CARNE DE EXTRANJERÍA') {
        documentoInputValue = document.getElementById("carneExtranjeriaInput").value;
    }

    var nivelEducacion = document.getElementById("nivelEducacion").value;
    var idioma = document.getElementById("idioma").value;

    var empresa1 = document.getElementById("empresa1").value;
    var cargo1 = document.getElementById("cargo1").value;
    var fechaInicio1 = document.getElementById("fechaInicio1").value;
    var fechaFin1 = document.getElementById("fechaFin1").value;

    var empresa2 = document.getElementById("empresa2").value;
    var cargo2 = document.getElementById("cargo2").value;
    var fechaInicio2 = document.getElementById("fechaInicio2").value;
    var fechaFin2 = document.getElementById("fechaFin2").value;

    var empresa3 = document.getElementById("empresa3").value;
    var cargo3 = document.getElementById("cargo3").value;
    var fechaInicio3 = document.getElementById("fechaInicio3").value;
    var fechaFin3 = document.getElementById("fechaFin3").value;

    var mensajeExito = document.getElementById("mensajeExito");
    mensajeExito.style.display = "block";

    var btnCancelar = document.getElementById("btnCancelar");

    //Validación de longitud de campos
    if (empresa1.length > 50 || cargo1.length > 40 || empresa2.length > 50 || cargo2.length > 40 || 
        empresa3.length > 50 || cargo3.length > 40) {
        alert("La longitud de algunos campos es mayor a la permitida.");
        return;
    }


    //alertas
    alert(
        "Nombres: " + nombres + "\n" +
        "Apellido Paterno: " + apellidoPaterno + "\n" +
        "Apellido Materno: " + apellidoMaterno + "\n" +
        "Tipo de Documento: " + tipoDocumentoValue + "\n" +
        "Número de Documento: " + documentoInputValue + "\n" +
        "Nivel de Educación: " + nivelEducacion + "\n" +
        "Idioma: " + idioma + "\n" +
        "1er Trabajo: " + empresa1 + ", Cargo: " + cargo1 + ", Fecha de Inicio: " + fechaInicio1 + ", Fecha de Término: " + fechaFin1 + "\n" +
        "2do Trabajo: " + empresa2 + ", Cargo: " + cargo2 + ", Fecha de Inicio: " + fechaInicio2 + ", Fecha de Término: " + fechaFin2 + "\n" +
        "3er Trabajo: " + empresa3 + ", Cargo: " + cargo3 + ", Fecha de Inicio: " + fechaInicio3 + ", Fecha de Término: " + fechaFin3
    );

    setTimeout(function () {
        mensajeExito.style.display = "none";
        window.location.href = "cliente.html";
    }, 3000);
});


// Mostrar u ocultar cuadro de texto según la opción seleccionada
document.querySelectorAll('input[name="tipoDocumento"]').forEach(function (radio) {
    radio.addEventListener("change", function () {
        document.getElementById("cuadroTextoDNI").style.display = (this.value === 'DNI') ? 'block' : 'none';
        document.getElementById("cuadroTextoPasaporte").style.display = (this.value === 'PASAPORTE') ? 'block' : 'none';
        document.getElementById("cuadroTextoCarneExtranjeria").style.display = (this.value === 'CARNE DE EXTRANJERÍA') ? 'block' : 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Recupera la información de localStorage
    const ubigeoSeleccionadoStr = localStorage.getItem('ubigeoSeleccionado');
    if (ubigeoSeleccionadoStr) {
        const ubigeoSeleccionado = JSON.parse(ubigeoSeleccionadoStr);

        // Muestra la información en la tabla (puedes adaptar esto según tu estructura HTML)
        document.getElementById('ubigeoTabla').innerHTML = `
            <tr>
                <td>${ubigeoSeleccionado.departamento}</td>
                <td>${ubigeoSeleccionado.provincia}</td>
                <td>${ubigeoSeleccionado.distrito}</td>
            </tr>
        `;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Recupera la información de sessionStorage
    const ubigeoSeleccionadoStr = localStorage.getItem('ubigeoSeleccionado');
    if (ubigeoSeleccionadoStr) {
        const ubigeoSeleccionado = JSON.parse(ubigeoSeleccionadoStr);

        // Muestra la información en la tabla (puedes adaptar esto según tu estructura HTML)
        document.getElementById('ubigeoTabla').innerHTML = `
            <tr>
                <td>${ubigeoSeleccionado.departamento}</td>
                <td>${ubigeoSeleccionado.provincia}</td>
                <td>${ubigeoSeleccionado.distrito}</td>
            </tr>
        `;
    }

    // Limpiar sessionStorage al cargar la página
    localStorage.removeItem('ubigeoSeleccionado');
});

// Términos y condiciones
document.getElementById("aceptarTerminos").addEventListener("change", function () {
  var botonAceptar = document.querySelector('button[type="submit"]');
  botonAceptar.disabled = !this.checked;
});

btnCancelar.addEventListener("click", function () {
    // Redirigir a cliente.html
    window.location.href = "cliente.html";
});