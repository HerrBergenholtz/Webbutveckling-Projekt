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
        resultat = nyckelOrd.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(resultat);
    }

    display(resultat);
}

function display(resultat) {
    const innehåll = resultat.map((list) => {
        return "<li onclick=redirect(this)>" + list + "</li>";
    })

    resultatElem.innerHTML = "<ul>" + innehåll.join("") + "</ul>"
}

function redirect (list) {
    const location = list.innerHTML
    window.location.replace("html/" + location + ".html")
}