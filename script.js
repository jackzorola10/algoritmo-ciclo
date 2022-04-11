alert("Bienvenido al servicio de entrega alienigena express");

let nombre = prompt("Dinos tu nombre, por favor");
alert("Hola " + nombre + ", vamos a calcular cuanto costaría enviar un marciano a tu casa");

let continente = prompt("En que continente vives?");

function calculadora (primerNumero, segundoNumero, operacion){
    switch(operacion){
        case "+":
        return primerNumero + segundoNumero;
        break;

        case "-":
        return primerNumero - segundoNumero;
        break;

        case "*":
        return primerNumero * segundoNumero;
        break;

        case "/":
        return primerNumero / segundoNumero;
        break;

        default:
        return 0;
        break;
    }
}

let patioStatus = prompt("Tu casa cuenta con patio? (Si/No)");
alert("Como que para que queremos saber eso? Para saber si puede aterrizar la nave obviamente...");

