/**
 * Comproba se un número é primo.
 *
 * @param {number} numero - Número que se quere comprobar.
 * @param {boolean} mostrarDivisores - Indica se se deben mostrar os divisores.
 *                                     Por defecto é false.
 * @returns {boolean|null} True se é primo, false se non o é
 *                         ou null se os parámetros non son válidos.
 */
function esPrimo(numero, mostrarDivisores = false) {
    // Validar que numero sexa un número finito.
    if (typeof numero !== "number" || !Number.isFinite(numero)) {
        console.error("Erro: o parámetro numero debe ser un número válido.");
        return null;
    }

    // Validar que mostrarDivisores sexa booleano.
    if (typeof mostrarDivisores !== "boolean") {
        console.error("Erro: mostrarDivisores debe ser true ou false.");
        return null;
    }

    // Os números menores ou iguais a 1 non son primos.
    // Tampouco o son os números decimais.
    if (!Number.isInteger(numero) || numero <= 1) {
        if (mostrarDivisores) {
            console.log(`${numero} non é primo: debe ser un enteiro maior que 1.`);
        }

        return false;
    }

    // Gardar os divisores distintos de 1 e do propio número.
    const divisores = [];

    // Comprobar os posibles divisores mediante un bucle.
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            divisores.push(divisor);
        }
    }

    // Mostrar os divisores se o parámetro é true.
    if (mostrarDivisores) {
        if (divisores.length > 0) {
            console.log(`Divisores de ${numero}: ${divisores.join(", ")}`);
        } else {
            console.log(`${numero} non ten divisores distintos de 1 e de si mesmo.`);
        }
    }

    // É primo se non se atopou ningún divisor.
    return divisores.length === 0;
}



console.log(esPrimo(7));
// true

console.log(esPrimo(12, true));
// Divisores de 12: 2, 3, 4, 6
// false

console.log(esPrimo(13, true));
// 13 non ten divisores distintos de 1 e de si mesmo.
// true

console.log(esPrimo(9, false));
// false

console.log(esPrimo("7"));
// Erro: o parámetro numero debe ser un número válido.
// null

console.log(esPrimo(7, "true"));
// Erro: mostrarDivisores debe ser true ou false.
// null