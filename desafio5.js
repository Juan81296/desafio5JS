let documentoUsuario = prompt("Ingrese su DNI");
let edadUsuario = prompt("Ingrese su edad");
let jubiladoUsuario = prompt ("Es usted jubilado/a? Ingrese si o no")
let montoUsuario = prompt("Ingrese el monto de su prestamo");
let cuotasUsuario = prompt("Ingrese la cantidad de cuotas, 3, 6, 12, 24");



class prestamos{
    constructor(documento, edad, monto, cuotas, jubilado){

        this.documento = documento;
        this.edad = edad;
        this.jubilado = jubilado;
        this.monto = monto;
        this.cuotas = cuotas;

    }

}

let infoPrestamo = new prestamos(documentoUsuario, edadUsuario, montoUsuario, cuotasUsuario, jubiladoUsuario);

function intereses(montoUsuario, cuotasUsuario){

if (cuotasUsuario == 3){
    return montoUsuario * 0.15;

}
else if(cuotasUsuario == 6){
    return montoUsuario * 0.30;
}
else if(cuotasUsuario == 12){
    return montoUsuario * 0.60;
}
else if(cuotasUsuario == 24){
    return montoUsuario * 0.90;
}

}

function jubilados(montoUsuario, jubiladoUsuario){

if (jubiladoUsuario == "si"){

    return montoUsuario * 0.05;
}
else if(jubiladoUsuario =="no"){
    
    return 0;
}
else{
    console.log("Ingrese un dato correcto a la pregunta = Es usted jubilado/a, responda si o no");
}

}


let devolucionTotal = (parseInt(montoUsuario) + parseInt(intereses(montoUsuario, cuotasUsuario))) - jubilados(montoUsuario, jubiladoUsuario); 

alert("El monto total a devolver al finalizar el pago es de: " + devolucionTotal);
