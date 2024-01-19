//Globala variabler
let resultatElem; //Variabel för den tomma resultat sektionen
let inputElem; //Variebel för sökrutan
let nyckelOrd = [
    "Kroppkakor",
    "Köttbullar",
    "Fläsklägg med Rotmos",
    "Yakinku"
]; //Array med nyckelord för de recept som sidan erbjuder

//Init funktion
window.onload = () => {
    resultatElem = document.getElementById("resultat");
    inputElem = document.getElementById("sökRuta"); //Deklarerar input och resultat elementen till korresponderande element i HTML koden med hjälp av deras id
    inputElem.addEventListener("keyup", complete); //Lägger till en event lilstener till sökfältet för som lyssnar för "keyup" vilket är när en tangent på ett tangentbord släpps, alltså inte när det trycks ned
}

//Funktion för att filtrera nyckelorden för den string som passar bäst med det användaren har skrivit
function complete() {
    let resultat = [];  //De kompatibla nyckelorden kommer läggas in i denna array som sedan skickas till display funktionen
    let input = inputElem.value; //De som användaren har skrivit i sökrutan blir input variabeln
    
    //Ifall input.lenght är sant (alltså om den har ett innehåll) så kommer resultat bli till de nyckelord som passar in på sökningen
    if (input.length) {
        resultat = nyckelOrd.filter((ord) => {
            return ord.toLowerCase().includes(input.toLowerCase());
        });
        //filter() returnerar de element i en array som passar med de kriterier som ställs i funktionen, i det här fallet så returneras de nyckelord som innehåller något av det användaren har skrivit, toLowerCase() används så att det inte spelar roll om användaren skriver in stora eller små bokstäver
    }

    display(resultat); //Resultatet skickas till display
}

//display gör och visar listan av de nyckelord som är kompatibla med det som användaren har sökt på.
function display(resultat) {
    //map() funktionen fungerar så att ändrar om alla element i en array enligt den parameter som den får, i det här fallet så ändras alla element till ett list element med en onclick som leder till dirigera funktionen med innehållet av det som originellt var i array elementet och detta deklareras innehåll som 
    const innehåll = resultat.map((lista) => {
        return "<li onclick=dirigera(this)>" + lista + "</li>";
    });

    //Nu deklreras innehållet av den tomma sektionen till en ul lista med innehållet i, join() används så att listan ska visas på ett bra sätt.
    resultatElem.innerHTML = "<ul>" + innehåll.join("") + "</ul>";
}

//dirigera() är den funktion som anropas när ett av de dynamiskt skapade list elementen klickas, funktionen tar en parameter (element) som kommer bli objektet av ett av det element som klickades. Dirigeras funktion är att dirigera användaren till den recept sida som korresponderar till det list element som de valde.
function dirigera(element) {
    const destination = element.innerHTML.replace("ä", "a").replace("ä", "a").replace("ö", "o").toLowerCase().split(' ').join('-'); //Destinationen deklareras som innehållet i elementet fast ä byts ut med a och ö med o, mellanslag byts ut till bindestreck och allt blir små bokstäver, detta är så att det ska fungera med filnamnen och i url

    //Logik för att avgöra om användaren befinner sig i index filen genom att kolla om fönstrets href innehåller index. Detta görs så att fönstrets href kan bytas till korrekt href eftersom att den är annorlund beroende på om användaren är på en sida som är inuti html filen eller inte.
    if (window.location.href.includes("index")) {
        window.location.assign("html/" + destination + ".html");
    } else {
        window.location.assign(destination + ".html")
    }
}