
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

const calificar = ()

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