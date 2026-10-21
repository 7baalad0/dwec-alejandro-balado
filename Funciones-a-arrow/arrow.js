
//1
const saludar = () => "¡Hola, DAW!"

//2

const doble = n => n*2

//3

const sumar = (a, b) => a + b

//4

const esMayorDeEdad = edad => edad >=18

//5

const presentar = (nombre, curso) => `Soy ${nombre} y estudio ${curso}`

//6

const potencia  = (base, exponente = 2) => base ** exponente

//7

// const notaFinal = (teoria, practica) => Math.round((teoria * 0.4 + practica * 0.6) * 10)

const notaFinal = (teoria, practica) => {
  const media = teoria * 0.4 + practica * 0.6;
  return Math.round(media * 10) / 10;
};

// 8
// const calificar = nota => nota >= 5 ? "Aprobado" : "Suspenso";

const calificar = (nota) => {
    if (nota >= 5) {
return "Aprobado";
}
return "Suspenso";
}


// 9

//const crearAlumno = (nombre, nota) => ({ nombre, nota });


const crearAlumno = (nombre, nota) => ({ nombre: nombre, nota: nota });



// 10
const contar = (...elementos) => elementos.length;



// 11

// const aplicarATodos = (lista, fn) => lista.map(fn);

const aplicarATodos = (lista, fn) => {
  const resultado = [];
  for (const x of lista) {
    resultado.push(fn(x));
  }
  return resultado;
};

// 12

const notas =[];

const aprobadas = notas.filter(n => n >= 5);

const subidas = notas.map(n => n + 1);

// 13
const multiplicarPor = factor => n => n * factor;

const triple = multiplicarPor(3);

// 14
const crearContador = inicio => {
    let valor = inicio;
    return {
        sumar: () => {
            valor++;
            return valor;
        },
        reiniciar: () => {
            valor = inicio;
            return valor;
        }
    };
};

const contador = crearContador(10);

// 15
const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Eva", nota: 9 },
    { nombre: "Iago", nota: 6 }
];

const ranking = lista => lista
    .filter(a => a.nota >= 5)
    .sort((a, b) => b.nota - a.nota)
    .map(a => a.nombre + " (" + a.nota + ")");

// 16
const aplicar = (valor, ...funciones) => funciones.reduce((acc, f) => f(acc), valor);

const sumarDos = n => n + 2;

// 17
const agruparPor = (lista, clave) => lista.reduce((grupos, el) => {
    const k = el[clave];
    if (!grupos[k]) {
        grupos[k] = [];
    }
    grupos[k].push(el.nombre);
    return grupos;
}, {});

const modulos = [
    { nombre: "Ana", curso: "DAW" },
    { nombre: "Luis", curso: "DAM" },
    { nombre: "Eva", curso: "DAW" }
];


// ─── Pruebas ───
console.log(saludar());
console.log(doble(7));
console.log(sumar(3, 4));
console.log(esMayorDeEdad(17), esMayorDeEdad(20));
console.log(presentar("Ana", "2.º DAW"));
console.log(potencia(3), potencia(2, 10));
console.log(notaFinal(6, 8));
console.log(calificar(7), calificar(3));
console.log(crearAlumno("Luis", 9));
console.log(contar("a", "b", "c"), contar());
console.log(aplicarATodos([1, 2, 3], doble));
console.log(aprobadas, subidas);
console.log(triple(5), multiplicarPor(2)(8));
console.log(contador.sumar(), contador.sumar(), contador.reiniciar());
console.log(ranking(alumnos));
console.log(aplicar(5, sumarDos, doble), aplicar(5, doble, sumarDos));
console.log(agruparPor(modulos, "curso"));