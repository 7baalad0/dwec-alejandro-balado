const DIAS = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
const temperaturas = [15, 19, 21, 16, 23, 17, 14];
const inventario = { cuaderno: 20, boligrafo: 35 };
const PRECIO_BASE = 9;
const EDAD_INFANTIL = 14;
const EDAD_MAYOR = 65;
const RECARGO_FIN_DE_SEMANA = 2;
const DIA_DEL_ESPECTADOR = "martes";
const DESCUENTO_ESPECTADOR = 3;
const carrito = [
{ producto: "arroz", precio: 1.25, cantidad: 2 },
{ producto: "aceite", precio: 5, cantidad: 1 },
{ producto: "huevos", precio: 2.25, cantidad: 2 },
{ producto: "café", precio: 6.5, cantidad: 1 }
];


// Ejercicio 1

function diasPorDebajoDe(temperaturas, umbral) {
    const diasPorDebajo = [];

    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] < umbral) {
            diasPorDebajo.push(DIAS[i]);
        }
    }

    return diasPorDebajo;
}

console.log(diasPorDebajoDe(temperaturas, 17));


// Ejercicio 2

function registrarCompra(inventario, producto, unidades) {
    if (unidades <= 0) {
        throw new Error("Cantidad no válida: " + unidades);
    }

    if (!(producto in inventario)) {
        inventario[producto] = 0;
    }

    inventario[producto] += unidades;

    return inventario[producto];
}

console.log(registrarCompra(inventario, "boligrafo", 10));

console.log(registrarCompra(inventario, "estuche", 6));

try {
    registrarCompra(inventario, "cuaderno", 0);
} catch (error) {
    console.log(error.message);
}
console.log(inventario);

// Ejercicio 3

function calcularTarifa(edad, dia) {

    if (typeof edad !== "number" || edad < 0 || edad > 120) {
        throw new Error("Edad no válida: " + edad);
    }

    let precio = PRECIO_BASE;

    if (edad < EDAD_INFANTIL || edad >= EDAD_MAYOR) {
        precio = precio / 2;
    }

    switch (dia) {
        case "sábado":
        case "domingo":
            precio += RECARGO_FIN_DE_SEMANA;
            break;

        case DIA_DEL_ESPECTADOR:
            precio -= DESCUENTO_ESPECTADOR;
            break;
    }

return precio;  
}

console.log(calcularTarifa(25, "domingo"))
console.log(calcularTarifa(14, "martes"))
console.log(calcularTarifa(65, "jueves"))

try {
    console.log(calcularTarifa(-5, "lunes"))
} catch (error) {
    console.log(error.message);
}


// Ejercicio 4

function calcularTotal(carrito) {
    return carrito.reduce((total, linea) => {
        if (linea.precio < 5) {
            return total + (linea.precio * linea.cantidad);
        }

        return total;
    }, 0);
}

console.log(calcularTotal(carrito));