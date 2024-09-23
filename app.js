// script.js
const cedulaForm = document.getElementById('cedulaForm');
const cedulaInput = document.getElementById('cedula');
const resultadoDiv = document.getElementById('resultado');

cedulaForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const cedula = cedulaInput.value;

    // Función para calcular el dígito verificador
    function calcularDigitoVerificador(cedula) {
        let suma = 0;
        let digito;

        for (let i = 0; i < cedula.length - 1; i++) {
            digito = parseInt(cedula.charAt(i));
            if (i % 2 === 0) {
                suma += digito;
            } else {
                suma += digito * 2;
                if (suma > 9) {
                    suma -= 9;
                }
            }
        }

        const modulo = 10 - (suma % 10);
        const digitoVerificadorCalculado = modulo === 10 ? 0 : modulo;

        return digitoVerificadorCalculado;
    }

    const digitoVerificadorCalculado = calcularDigitoVerificador(cedula);
    const digitoVerificadorIngresado = parseInt(cedula.charAt(cedula.length - 1));

    if (digitoVerificadorCalculado === digitoVerificadorIngresado) {
        resultadoDiv.textContent = 'Cédula válida.';
    } else {
        resultadoDiv.textContent = 'Cédula inválida.';
    }
});