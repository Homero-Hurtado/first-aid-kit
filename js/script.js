/* Variable de control */
let controlView = false;

const elementList = document.getElementById("list");
const elementBtn = document.getElementById("myButton");

/* Desplazamiento del header */

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})

/* Cuando el documento este completamenta cargado ejecutar la funcion */

document.addEventListener("DOMContentLoaded", function () {

    /* Renderizar vertical u horizontalmente basandonos en la variable de control */

    if (!controlView) {
        elementList.setAttribute("class", "vertical");
    } else {
        elementList.setAttribute("class", "horizontal");
    }
});

elementBtn.addEventListener("click", function () {

    /* Si es true la pasa a false y si es false lo pasa a true */

    controlView = !controlView;

    if (!controlView) {
        elementList.setAttribute("class", "vertical");
    } else {
        elementList.setAttribute("class", "horizontal");
    }
});

switch (controlView) {
    case controlView: // si controlView == true
        elementList.setAttribute("class", "horizontal");
        break;
    case !controlView: // si controlView == true
        elementList.setAttribute("class", "vertical");
        break;
    default:   // si controlview es otro valor que no esta en los case
        elementList.setAttribute("class", "vertical");
        break;

}


//Ejecutar funciones

document.getElementById("icon-search").addEventListener("click", show_input);
document.getElementById("cover-ctn-search").addEventListener("click", hide_input);

//Declaracion de variables

bars_search = document.getElementById("box-search");
cover_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
optionsSearch = document.getElementById("options-search");

// Funcion para mostrar el buscador

function show_input() {
    bars_search.style.visibility = "visible";
    cover_search.style.display = "block"
    bars_search.style.left = "1px"
    inputSearch.focus();

    if (inputSearch.value === "") {
        optionsSearch.style.display = "none";
    }
}

//Funcion para ocultar el buscador

function hide_input() {
    bars_search.style.visibility = "hidden";
    cover_search.style.display = "none";
    inputSearch.value = "";
    optionsSearch.style.display = "none";
}


/* Busqueda */

document.addEventListener('DOMContentLoaded', function () {
    const inputSearch = document.getElementById('inputSearch');
    const elements = document.querySelectorAll('.element');

    inputSearch.addEventListener('input', function () {
        const searchTerm = inputSearch.value.toLowerCase();

        elements.forEach(element => {
            const nameElement = element.dataset.name.toLowerCase();
            const isEqual = nameElement.includes(searchTerm);

            if (isEqual) {
                element.style.display = 'block';
            } else {
                element.style.display = 'none';
            }

        })
    })

})

