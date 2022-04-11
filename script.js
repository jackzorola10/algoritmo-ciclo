
alert("Bienvenido al servicio de entrega de Alienigena Express");

let nombre = prompt("Dinos tu nombre, por favor");
alert("Hola " + nombre + ", vamos a calcular cuanto costaría enviar un marciano a tu casa.");
console.log(nombre);


let continente = prompt("En que continente vives?");
while (continente !== "Asia" && continente !== "Norte America" && continente !== "Sud America" && continente !== "Africa" && continente !== "Europa" && continente !== "Oceania"){
    continente = prompt("Vos te crees graciosito? Escribí uno de estos continentes: 'Norte America', 'Sud America', 'Asia', 'Africa', 'Europa', 'Oceania' ");  
}
alert("Genial, vos vivis en " + continente + ", mi vigecimo octavo tatara tío es de ahí.");        
console.log(continente);

let patioStatus = prompt("Tu casa cuenta con patio? (Si/No)");
while (patioStatus !== "Si" && patioStatus !== "No" ){
    patioStatus = prompt("Le pido seriedad señor@, la entrega de alienigenas usa una logistica muy compleja.");  
}
alert("Como que para que queremos saber eso? Para saber si puede aterrizar la nave marciana obviamente...");
console.log(patioStatus);

let precioContinente 
switch(continente){
    case "Norte America":
        precioContinente = 100;
        break;

    case "Sud America":
        precioContinente = 90;
        break;  

    case "Asia":
        precioContinente = 300;
        break;

    case "Africa":
        precioContinente = 150;
        break;

    case "Oceania":
        precioContinente = 340;
        break;

    case "Europa":
        precioContinente = 95;
        break;
};
console.log(precioContinente);

let precioPatio
switch(patioStatus){
    case "Si":
        precioPatio = 200;
        break;
    
    case "No":
        precioPatio = 400;
        break;
}
console.log(precioPatio);


alert("Muy bien " + nombre + ", es muy importante que el marciano se sienta en casa, te pedimos que nos nombres a 3 personas que formaran parte de la familia del marciano");
let familia = [];
console.log(familia);

for (let i = 0; i < 3; i++) {
        familia[i] = prompt("Ingresa los nombres de los familiares");        
        console.log(familia[i]);
}
console.log(familia);

let costoEnvio = precioContinente + precioPatio;
alert("El costo de enviarlo a " + continente + " a vuestra casa que " + patioStatus.toLowerCase() + " tiene patio, es de $" + costoEnvio + " dolares marcianos.")
console.log(costoEnvio);

let envioDividido = costoEnvio / (familia.length + 1);
alert("Pueden dividirselo entre " + familia[0] + ", " + familia[1] + ", " + familia[2] + " y tu. Les tocaría " + "$" + envioDividido + ".");
console.log(envioDividido);

alert("Gracias por usar los servicios de Alienigena Express")