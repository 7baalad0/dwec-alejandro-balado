const alumno = "Alejandro"
const anio = new Date().getFullYear();
const numeros = Math.floor(Math.random() * 901) + 100;
const primerastres = alumno.slice(0,3).toUpperCase()


const codigoFinal = `${primerastres}-${anio}-${numeros}`;

const patronCodigo = /^[A-Z]{3}-\d{4}-\d{3,4}$/;

// 2. Validación
const esValido = patronCodigo.test(codigoFinal);

console.log("Código generado:", codigoFinal);
console.log("¿Es válido?:", esValido);