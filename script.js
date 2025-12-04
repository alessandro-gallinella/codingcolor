console.log("inizio esecuzione")
function elabora() {
let numero = document.getElementById("inNumber").value;
alert(numero);
  
if (numero >=0 && numero <= 255){
  document.getElementById("outText").innerHTML = "hai inserito il numero corretto";

}
else {
  document.getElementById("error").innerHTML = "il numero non è corretto";
}

function reset(){
  document.getElementById("inNumber").value = "";
}  
