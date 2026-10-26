const puntosPorResultado = {
    victoria: 3,
    empate: 1,
    derrota: 0
};

function crearJugador(nombre, curso = "2.º DAW") {
    return {
        nombre,
        curso,
        partidas: [],
        bonificaciones: [],

        registrarPartida(resultado) {
            if (!Object.keys(puntosPorResultado).includes(resultado)) {
                return false;
            }

            this.partidas.push(resultado);
            return true;
        },

        aplicarBonificaciones(...bonos) {
            this.bonificaciones.push(...bonos);

            return bonos.reduce((total, bono) => total + bono, 0);
        },

        contar(resultado) {
            return this.partidas.filter(partida => partida === resultado).length;
        },

        puntos() {
            const puntosPartidas = this.partidas.reduce(
                (total, resultado) => total + puntosPorResultado[resultado],
                0
            );

            const puntosBonificaciones = this.bonificaciones.reduce(
                (total, bono) => total + bono,
                0
            );

            return puntosPartidas + puntosBonificaciones;
        },

        categoria() {
            const puntosJugador = this.puntos();

            if (puntosJugador <= 3) {
                return "PRINCIPIANTE";
            } else if (puntosJugador <= 6) {
                return "INTERMEDIO";
            } else if (puntosJugador <= 9) {
                return "AVANZADO";
            } else {
                return "EXPERTO";
            }
        },

        resumen() {
            return `${this.nombre} - ${this.curso} - Partidas: ${this.partidas.length} - Puntos: ${this.puntos()} - Categoría: ${this.categoria()}`;
        }
    };
}

function buscarJugador(lista, nombre) {
    return lista.find(jugador => jugador.nombre === nombre);
}

function clasificacion(lista) {
    const ordenados = [...lista].sort((a, b) => {
        if (a.puntos() !== b.puntos()) {
            return b.puntos() - a.puntos();
        }

        if (a.contar("victoria") !== b.contar("victoria")) {
            return b.contar("victoria") - a.contar("victoria");
        }

        return a.nombre.localeCompare(b.nombre, "es");
    });

    return ordenados.map((jugador, index) => ({
        posicion: index + 1,
        nombre: jugador.nombre,
        puntos: jugador.puntos(),
        categoria: jugador.categoria()
    }));
}

function jugadoresPorCategoria(lista) {
    const categorias = {
        PRINCIPIANTE: [],
        INTERMEDIO: [],
        AVANZADO: [],
        EXPERTO: []
    };

    for (const jugador of lista) {
        categorias[jugador.categoria()].push(jugador.nombre);
    }

    return categorias;
}

function estadisticas(lista) {
    const totales = lista.reduce((total, jugador) => {
        total.totalPartidas += jugador.partidas.length;
        total.victorias += jugador.contar("victoria");
        total.empates += jugador.contar("empate");
        total.derrotas += jugador.contar("derrota");
        total.puntos += jugador.puntos();

        return total;
    }, {
        totalPartidas: 0,
        victorias: 0,
        empates: 0,
        derrotas: 0,
        puntos: 0
    });

    const mediaPuntos = lista.length > 0
        ? Number((totales.puntos / lista.length).toFixed(2))
        : 0;

    return {
        totalPartidas: totales.totalPartidas,
        victorias: totales.victorias,
        empates: totales.empates,
        derrotas: totales.derrotas,
        mediaPuntos
    };
}

function invictos(lista) {
    return lista
        .filter(jugador =>
            jugador.partidas.length > 0 &&
            jugador.contar("derrota") === 0
        )
        .map(jugador => jugador.nombre);
}

function mostrarClasificacion(lista) {
    const ordenados = clasificacion(lista);

    console.log("===== CLASIFICACIÓN DEL CAMPEONATO =====");

    for (const jugador of ordenados) {
        console.log(
            `${jugador.posicion}. ${jugador.nombre} - ${jugador.puntos} puntos - ${jugador.categoria}`
        );
    }
}

function duplicarPuntos(puntos) {
    return puntos * 2;
}

function anadirPuntosExtra(puntos, extra = 2) {
    return puntos + extra;
}

function aplicarPenalizacion(puntos, penalizacion = 2) {
    return Math.max(0, puntos - penalizacion);
}

function aplicarOperacion(lista, operacion) {
    return lista.map(jugador => ({
        nombre: jugador.nombre,
        puntos: operacion(jugador.puntos())
    }));
}

function copiarJugador(jugador) {
    const copia = crearJugador(jugador.nombre, jugador.curso);

    for (const resultado of [...jugador.partidas]) {
        copia.registrarPartida(resultado);
    }

    copia.aplicarBonificaciones(...jugador.bonificaciones);

    return copia;
}

function unirCampeonatos(...listas) {
    return [].concat(...listas);
}

const datosJugadores = [
    {
        nombre: "Ana",
        resultados: ["victoria", "victoria", "empate", "derrota", "victoria"],
        bonificaciones: [2]
    },
    {
        nombre: "Brais",
        resultados: ["empate", "empate", "derrota", "victoria"],
        bonificaciones: []
    },
    {
        nombre: "Carla",
        resultados: ["victoria", "victoria", "victoria", "empate"],
        bonificaciones: []
    },
    {
        nombre: "Diego",
        resultados: ["victoria", "victoria", "empate", "empate", "empate", "empate"],
        bonificaciones: []
    },
    {
        nombre: "Eva",
        resultados: ["derrota", "derrota", "empate"],
        bonificaciones: [1, 1]
    },
    {
        nombre: "Fran",
        resultados: ["victoria", "empate", "derrota"],
        bonificaciones: [3]
    }
];

const jugadores = datosJugadores.map(datos => {
    const jugador = crearJugador(datos.nombre, datos.curso);

    for (const resultado of datos.resultados) {
        jugador.registrarPartida(resultado);
    }

    jugador.aplicarBonificaciones(...datos.bonificaciones);

    return jugador;
});

console.log("===== RESUMEN DE LOS JUGADORES =====");

for (const jugador of jugadores) {
    console.log(jugador.resumen());
}

console.log("\n===== BÚSQUEDA DE JUGADORES =====");
console.log(buscarJugador(jugadores, "Carla"));
console.log(buscarJugador(jugadores, "Luis"));

console.log("\n===== CLASIFICACIÓN =====");
mostrarClasificacion(jugadores);

console.log("\n===== JUGADORES POR CATEGORÍA =====");
console.log(jugadoresPorCategoria(jugadores));

console.log("\n===== ESTADÍSTICAS =====");
console.log(estadisticas(jugadores));

console.log("\n===== JUGADORES INVICTOS =====");
console.log(invictos(jugadores));

console.log("\n===== PRUEBA DE RESULTADO NO VÁLIDO =====");
const ana = buscarJugador(jugadores, "Ana");
const partidasAntes = ana.partidas.length;

console.log("Resultado registrado:", ana.registrarPartida("gana"));
console.log("Las partidas siguen igual:", ana.partidas.length === partidasAntes);

console.log("\n===== PRUEBA DE EMPATE A PUNTOS =====");
const zoe = crearJugador("Zoe");
const alba = crearJugador("Alba");

zoe.registrarPartida("victoria");
alba.registrarPartida("victoria");

mostrarClasificacion([zoe, alba]);

console.log("\n===== OPERACIONES ESPECIALES =====");
console.log("Duplicar puntos:", aplicarOperacion(jugadores, duplicarPuntos));
console.log("Añadir 2 puntos:", aplicarOperacion(jugadores, anadirPuntosExtra));
console.log("Penalizar 2 puntos:", aplicarOperacion(jugadores, aplicarPenalizacion));
console.log("Puntos originales de Ana:", ana.puntos());

console.log("\n===== PRUEBA DE COPIA =====");
const copiaAna = copiarJugador(ana);

copiaAna.registrarPartida("victoria");
copiaAna.aplicarBonificaciones(10);

console.log("Puntos de Ana original:", ana.puntos());
console.log("Puntos de la copia:", copiaAna.puntos());

console.log("\n===== UNIR CAMPEONATOS =====");
const campeonato1 = jugadores.slice(0, 3);
const campeonato2 = jugadores.slice(3);
const campeonatoUnido = unirCampeonatos(campeonato1, campeonato2);

console.log("Jugadores del campeonato unido:", campeonatoUnido.length);