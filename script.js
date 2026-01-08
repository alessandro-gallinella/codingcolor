console.log("Inizio esecuzione");

let d = new Date();
console.log(d);

document.getElementById("saluto").innerHTML =
    d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();

let colori = [];

function elabora() {
    let numero = Number(document.getElementById("inNumber").value);
   
    document.getElementById("error").innerHTML = "";
   
    if (numero >= 0 && numero <= 255) {
        colori.push(numero);
       
        document.getElementById("outText").innerHTML =
            "Hai inserito il numero corretto";
        document.getElementById("outText").innerHTML +=
            "<br>I colori inseriti sono: " + colori;
       
        console.log(colori);
       
        if (colori.length == 3) {
            document.getElementById("inText").style.color =
                `rgb(${colori[0]},${colori[1]},${colori[2]})`;
        }
    }
    else {
        document.getElementById("error").innerHTML = "Il numero non è corretto";
    }
}

function reset() {
    colori = [];
    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";
    document.getElementById("inText").style.color = "black";
    document.getElementById("outText").innerHTML = "Inserisci il testo e tre valori RGB per colorarlo!";
    document.getElementById("error").innerHTML = "";
}
