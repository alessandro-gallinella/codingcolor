console.log("inizio esecuzione")
let d = new date();
console.log(d)
document.getElementById("outText").innerHTML = d.getDay();
function elabora() {
let numero = document.getElementById("inNumber").value;
alert(numero);
}
if (numero >=0 && numero <= 255){
  document.getElementById("outText").innerHTML = "hai inserito il numero corretto";
color.push(numero);
  
document.getElementById("error").innerHTML = "hai inserito il"+numero;

}
else {
  document.getElementById("error").innerHTML = "il numero non è corretto";
}

function reset(){
   document.getElementById("inNumber").value = "";
}  

