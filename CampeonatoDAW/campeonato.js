const jugador = "Ana";
const resultados = ["victoria", "empate", "derrota", "victoria", "error"];
const bonificaciones = [2, 1, 3];

const duplicarPuntos = false;
const puntosExtra = 0;
const penalizacion = 0;

let puntos = 0;
let partidasJugadas = 0;
let victorias = 0;
let empates = 0;
let derrotas = 0;

for (const resultado of resultados) {
    switch (resultado) {
        case "victoria":
            puntos += 3;
            victorias++;
            partidasJugadas++;
            break;

        case "empate":
            puntos += 1;
            empates++;
            partidasJugadas++;
            break;

        case "derrota":
            puntos += 0;
            derrotas++;
            partidasJugadas++;
            break;

        default:
            console.log("Resultado no válido: " + resultado);
    }
}

function sumarBonificaciones(...bonificaciones) {
    let total = 0;

    for (const bonificacion of bonificaciones) {
        total += bonificacion;
    }

    return total;
}

puntos += sumarBonificaciones(...bonificaciones);

function aplicarOperaciones(puntos, duplicar = false, extra = 0, penalizacion = 0) {
    if (duplicar) {
        puntos *= 2;
    }

    puntos += extra;
    puntos -= penalizacion;

    if (puntos < 0) {
        puntos = 0;
    }

    return puntos;
}

puntos = aplicarOperaciones(puntos, duplicarPuntos, puntosExtra, penalizacion);

const calcularCategoria = puntos => {
    if (puntos <= 3) {
        return "PRINCIPIANTE";
    } else if (puntos <= 6) {
        return "INTERMEDIO";
    } else if (puntos <= 9) {
        return "AVANZADO";
    } else {
        return "EXPERTO";
    }
};

const categoria = calcularCategoria(puntos);

console.log("----- CAMPEONATO DAW -----");
console.log("Jugador: " + jugador);
console.log("Partidas jugadas: " + partidasJugadas);
console.log("Victorias: " + victorias);
console.log("Empates: " + empates);
console.log("Derrotas: " + derrotas);
console.log("Puntos obtenidos: " + puntos);
console.log("Categoría: " + categoria);