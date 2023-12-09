/* Scroller header */

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})


/* Row or column view change */

let controlView = false; //Variable de control

const elementList = document.getElementById("list");
const elementBtn = document.getElementById("myButton");

document.addEventListener("DOMContentLoaded", function () { // When the document is completely loaded, execute the function

    if (!controlView) {  //Render vertically or horizontally based on control variable
        elementList.setAttribute("class", "vertical");
    } else {
        elementList.setAttribute("class", "horizontal");
    }
});

elementBtn.addEventListener("click", function () { //If it is true it changes it to false and if it is false it changes it to true

    controlView = !controlView;

    if (!controlView) {
        elementList.setAttribute("class", "vertical");
    } else {
        elementList.setAttribute("class", "horizontal");
    }
});

switch (controlView) {
    case controlView: // if controlView == true
        elementList.setAttribute("class", "horizontal");
        break;
    case !controlView: // if controlView == true
        elementList.setAttribute("class", "vertical");
        break;
    default:   // if controlview It is another value that is not in the cases
        elementList.setAttribute("class", "vertical");
        break;

}

/*  Show or hide search bar and shadow main content */

document.getElementById("icon-search").addEventListener("click", show_input); //Run functions
document.getElementById("cover-ctn-search").addEventListener("click", hide_input);

bars_search = document.getElementById("box-search"); //Declaration of variables
cover_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
optionsSearch = document.getElementById("options-search");

function show_input() { // Function to show the search bar
    bars_search.style.visibility = "visible";
    cover_search.style.display = "block"
    bars_search.style.left = "1px"
    inputSearch.focus();

    if (inputSearch.value === "") {
        optionsSearch.style.display = "none";
    }
}

function hide_input() { // Function to hide search bar
    bars_search.style.visibility = "hidden";
    cover_search.style.display = "none";
    inputSearch.value = "";
    optionsSearch.style.display = "none";
}

/* Content search*/

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
                cover_search.style.display = "none";
            } else {
                element.style.display = 'none';
            }

        })
    })

})

