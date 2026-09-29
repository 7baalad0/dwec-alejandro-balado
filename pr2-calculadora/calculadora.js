const formulario = document.getElementById("formulario");
const examen = document.getElementById("examen");
const practica = document.getElementById("practica");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
evento.preventDefault();


const notaExamen = parseFloat(examen.value);
const notaPractica = parseFloat(practica.value);

const notaFinal = notaExamen * 0.7 + notaPractica * 0.3;

if (notaFinal >= 5) {
    resultado.textContent = "Nota final: " + notaFinal.toFixed(2) + " - Aprobado";
    resultado.className = "aprobado";
} else {
    resultado.textContent = "Nota final: " + notaFinal.toFixed(2) + " - Suspenso";
    resultado.className = "suspenso";
}


});
