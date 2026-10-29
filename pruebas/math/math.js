
function obtenerResumenNotas(notas) {
    const max = Math.max(...notas);
    const min = Math.min(...notas);
    const sumaNotas = notas.reduce((suma, nota) => suma + nota, 0);
    const media = Math.round((sumaNotas / notas.length) * 100) / 100;

    return {
        max: max,
        min: min,
        media: media
    };
}

console.log(obtenerResumenNotas([7.25, 4.5, 9, 6]));