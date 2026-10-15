//  1. Crea un array con cinco notas y muestra la media.

const notas = [7, 9, 5, 8, 2];

function calcmedia(notas) {
    let total = 0;
    for (let index = 0; index < notas.length; index++) {
        let nota = notas[index];
        total = total + nota; 
    }
    return total / notas.length;

}
console.log(calcmedia(notas));


// 2. Obtén un nuevo array únicamente con las notas aprobadas.
// 3. Obtén otro array con las notas incrementadas en un punto, sin modificar el original.
// 4. Busca la primera nota igual o superior a 9.
// 5. Con un array de alumnos {nombre, nota}, muestra únicamente los nombres de los aprobados. 







