/**
 * Calcula o prezo final aplicando descontos sucesivos.
 *
 * O desconto base é do 5 % por volta.
 * Os clientes VIP reciben un 5 % adicional por volta.
 * O desconto aplícase mentres o prezo sexa maior que 100 €
 * e non se superen cinco voltas.
 *
 * @param {number} precio - Prezo inicial, que debe ser maior que 0.
 * @param {boolean} esClienteVip - Indica se o cliente é VIP.
 * @returns {number|null} Prezo final ou null se os parámetros non son válidos.
 */
function calcularDescuento(precio, esClienteVip) {
    // Validar que o prezo sexa un número finito e positivo.
    if (
        typeof precio !== "number" ||
        !Number.isFinite(precio) ||
        precio <= 0
    ) {
        console.error("Erro: o prezo debe ser un número maior que 0.");
        return null;
    }

    // Validar que esClienteVip sexa booleano.
    if (typeof esClienteVip !== "boolean") {
        console.error("Erro: esClienteVip debe ser true ou false.");
        return null;
    }

    // Inicializar as variables do cálculo.
    let precioFinal = precio;
    let vueltas = 0;

    const descuentoBase = 0.05;
    const descuentoVip = 0.05;
    const maxVueltas = 5;

    // Repetir mentres o prezo supere os 100 € e queden voltas.
    while (precioFinal > 100 && vueltas < maxVueltas) {
        let descuento = descuentoBase;

        // Engadir o desconto adicional para clientes VIP.
        if (esClienteVip) {
            descuento += descuentoVip;
        }

        // Aplicar o desconto sobre o prezo actual.
        precioFinal = precioFinal * (1 - descuento);

        // Incrementar o número de voltas realizadas.
        vueltas++;
    }

    // Devolver o prezo final calculado.
    return precioFinal;
}

console.log(calcularDescuento(80, false));
// 80: non se aplica desconto porque o prezo non supera os 100 €.

console.log(calcularDescuento(150, false));
// 116.067140625: aplícanse cinco voltas como máximo.

console.log(calcularDescuento(150, true));
// 98.415: o desconto VIP é do 10 % por volta.

console.log(calcularDescuento(-20, false));
// Erro: o prezo debe ser un número maior que 0.
// null

console.log(calcularDescuento(150, "true"));
// Erro: esClienteVip debe ser true ou false.
// null