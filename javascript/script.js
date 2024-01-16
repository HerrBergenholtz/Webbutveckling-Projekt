//Globala variabler
let resultatElem;
let inputElem;
let nyckelOrd = [
    "Kroppkakor",
    "Pasta Pesto",
    "Glass",
    "Svampsoppa"
];

window.onload = () => {
    resultatElem = document.getElementById("resultat");
    inputElem = document.getElementById("sökRuta");
    inputElem.addEventListener("keyup", complete);
}

function complete() {
    let resultat = [];
    let input = inputElem.value;
    if (input.length) {
        resultat = nyckelOrd.filter((ord) => {
            return ord.toLowerCase().includes(input.toLowerCase());
        });
    }

    display(resultat);
}

function display(resultat) {
    const innehåll = resultat.map((lista) => {
        return "<li onclick=dirigera(this)>" + lista + "</li>";
    });

    resultatElem.innerHTML = "<ul>" + innehåll.join("") + "</ul>";
}

function dirigera(element) {
    const destination = element.innerHTML.toLowerCase().split(' ').join('-');

    if (window.location.href.includes("index")) {
        window.location.assign("html/" + destination + ".html");
    } else {
        window.location.assign(destination + ".html")
    }
}