// const cabecera = document.querySelector("#cabecera");
// console.log(cabecera);
// const primerCurso = document.querySelector(".curso");
// console.log(primerCurso.textContent); // "DAW - Desarrollo de Aplicaciones Web"


//  implementa una funcion resaltarCursosSuperiores(elementoUL) que
// - Recibe el elemento ul con la lista de cursos de la pagina
// - Recorre cada uno de los hijos navegando (con children)
// - Si el atributo data-nivel es superior, entonces le añadirá texto existente en la entrada de lista el literal (Superior).

// Para recoger el nodo ul a tratar, usa la instruccion

// const listaCursos = document.getElementById(lista-cursos);


// function resaltarCursosSuperiores(elementoUL) {
//     for (const curso of elementoUL.children) {
//         if (curso.getAttribute("data-nivel") === "superior") {
//             curso.textContent += " (Superior)";
//         }
//     }
// }

// const listaCursos = document.getElementById("lista-cursos");
// resaltarCursosSuperiores(listaCursos);






function actualizarPanelCursos (){
    const listaCursos = document.getElementById("lista-cursos");
        for (const curso of listaCursos.children) {
            const plazas = curso.dataset.plazas
            const nivel = curso.dataset.nivel
         if (plazas === "0") {
             curso.textContent += "—COMPLETO";
        } else{
            curso.setAttribute("estado-curso", `${plazas} plazas libres` )

        }
     }
 }





