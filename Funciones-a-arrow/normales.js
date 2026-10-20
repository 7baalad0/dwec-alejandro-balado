
//funciones_normales.js
// funciones_normales.js — DWEC · 17 funciones escritas con la sintaxis clásica
// Ejercicio: pásalas a arrow functions en un fichero nuevo.
// Ejecuta los dos ficheros: la consola debe mostrar EXACTAMENTE lo mismo.
// 1. Sin parámetros
function saludar() {
return "¡Hola, DAW!";
}

() => "¡Hola, DAW!"



// 2. Un parámetro
function doble(n) {
return n * 2;
}

n => n*2

// 3. Dos parámetros
function sumar(a, b) {
return a + b;
}
// 4. Devuelve un booleano
function esMayorDeEdad(edad) {
return edad >= 18;
}
// 5. Usa un texto y un template literal
function presentar(nombre, curso) {
return `Soy ${nombre} y estudio ${curso}`;
}
// 6. Parámetro por defecto
function potencia(base, exponente = 2) {
return base ** exponente;
}
// 7. Varias líneas: necesita llaves y return
function notaFinal(teoria, practica) {
const media = teoria * 0.4 + practica * 0.6;
return Math.round(media * 10) / 10;
}
// 8. Con if
function calificar(nota) {
if (nota >= 5) {
return "Aprobado";
}
return "Suspenso";
}
// 9. Devuelve un objeto
function crearAlumno(nombre, nota) {
return { nombre: nombre, nota: nota };
}
// 10. Parámetro rest
function contar(...elementos) {
return elementos.length;
}
// 11. Recibe una función (callback)
function aplicarATodos(lista, fn) {
const resultado = [];
for (const x of lista) {
resultado.push(fn(x));
}
return resultado;
}
// 12. Callbacks con map y filter
const notas = [4, 8, 6, 9, 3];
const aprobadas = notas.filter(function (n) {
return n >= 5;
});
const subidas = notas.map(function (n) {
return n + 1;
});
// ─── Funciones complejas ───
// 13. Función que devuelve otra función (closure)
function multiplicarPor(factor) {
return function (n) {
return n * factor;
};
}
const triple = multiplicarPor(3);
// 14. Contador con estado privado (closure + objeto con funciones)
function crearContador(inicio) {
let valor = inicio;
return {
sumar: function () {
valor++;
return valor;
},
reiniciar: function () {
valor = inicio;
return valor;
}
};
}
const contador = crearContador(10);
// 15. Cadena filter → sort → map sobre un array de objetos
const alumnos = [
{ nombre: "Ana", nota: 8 },
{ nombre: "Luis", nota: 4 },
{ nombre: "Eva", nota: 9 },
{ nombre: "Iago", nota: 6 }
];
function ranking(lista) {
return lista
.filter(function (a) {
return a.nota >= 5;
})
.sort(function (a, b) {
return b.nota - a.nota;
})
.map(function (a) {
return a.nombre + " (" + a.nota + ")";
});
}
// 16. Aplicar varias funciones seguidas (rest + reduce)
function aplicar(valor, ...funciones) {
return funciones.reduce(function (acc, f) {
return f(acc);
}, valor);
}
function sumarDos(n) {
return n + 2;
}
// 17. Agrupar por una propiedad (reduce + clave calculada)
function agruparPor(lista, clave) {
return lista.reduce(function (grupos, el) {
const k = el[clave];
if (!grupos[k]) {
grupos[k] = [];
}
grupos[k].push(el.nombre);
return grupos;
}, {});
}
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