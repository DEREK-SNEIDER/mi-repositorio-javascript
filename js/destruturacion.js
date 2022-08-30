/// operador ternario 
/// ejercicios 1
 /*
const patas = 4;
const accion = "Ladra";

///sin operador ternario
/*
if(patas == 4 && accion == "Ladra"){
    console.log("Es un perro");
}else{
    console.log("No es un perro");
} */
/*
//// con operador ternario

(patas == 4) && (accion == "Ladra") ? console.log("Es un perro") : console.log("No es un perro");
*/

/// ejercicio 2
/*
 function devolverSaludo(nombre, esDeDia){
    
/// sin operador ternario
/*
var saludo;
if (esDeDia){
    saludo = "Buenos Dia"
}else{
    saludo = "Buenas Noche"
}
/////////
*/
/*
/// con operador ternario
const saludo = esDeDia ? "Buenos Dia" : "Buenas Noche"

////////*/
/*
return saludo + ", " + nombre;
 }
console.log(devolverSaludo('esneider', true));
*/

/// ejercicio 3
/*
/// sin operacion ternario
if (1 < 5){
    console.log("Es menor")
} else{
    console.log("Es mayor")
} */
/*
/// con operador ternario
((1 < 5) && true) ? (true || false) ? console.log("Se cumplio la segunda condicion") : console.log("No se cumplio nada !!") : console.log("Es mayor");
*/


/////  optimisacion 
//// ejercicio 1


/* function Verificacion(){
    var obj = {
        cantida: 50,
        nombre: "Moto",
        marca: "Auteco",
        motor: "4 tiempo"
    }
    return obj

}
console.log(Verificacion()); */

/// ejercicio 2

/* var cantidad_laptops = 400;

function verificarDidponibilidad(cantida){
//     if (cantida < cantidad_laptops){
//         return "Tenemos la cantidad necesaria"
//     }else {
// return "No tenemos esa cantidad"
//     } 
    
return cantida < cantidad_laptops;

}
console.log(verificarDidponibilidad(22)); */



////  destruturando ejercicio
/// ejercicio 1
/*
const item = {
    nombre: "Esneider",
    apellido: "Aranzales",
    edad: "26",
    altura:"1.75"
}
/*
/// sin estruturacion

const nombre = item.nombre;
const apellido = item.apellido;
const edad = item.edad;
const altura = item.altura;

console.log(nombre, apellido, edad, altura); 
*/
/*
///estruturacion 

const {nombre, apellido, edad, altura} = item;

console.log(nombre, apellido, edad, altura);
*/
/*
/// estruturacion por parte 

const {nombre, apellido, ... otros} = item;

console.log(nombre, apellido, otros);
*/
/*
/// estruturacion cambiando objeto de la propiedad

const {nombre:nameItem, apellido:surItem, ... otros} = item;

console.log(nameItem, surItem);
*/

///ejercicio 2
/*
const numero = [1,2,3,4,5,6,7,8,9];

///sin destruturacion 
/*
const valor1 = numero[0];
const valor2 = numero[1];
const valor3 = numero[2];
const valor4 = numero[3];
const valor5 = numero[4];
const valor6 = numero[5];
const valor7 = numero[6];
const valor8 = numero[7];
const valor9 = numero[8];

console.log(valor1, valor2, valor3, valor4, valor5, valor6 ,valor7, valor8, valor9);
*/
/*
/// destruturacion 

const [valor1, valor2, valor3, valor4, valor5, valor6,valor7, valor8, valor9] = numero

console.log(valor1, valor2, valor3, valor4, valor5, valor6,valor7, valor8, valor9)
*/
/*
/// destruturacion combiando objeto y ocultando variable

const [, valor3, valor4, ... otros] = numero

console.log(valor3, valor4, otros)
*/

/*
/// ejercicio 3

let telefono = {
    marca: "Huawei",
    color: "Negro",
    pantalla: 5.5,
    ram: 12,
    procesador: "Android",
    precio: 800
};

/*
/// sin destruturacion 

let marca = telefono.marca,
    color = telefono.color,
    pantalla = telefono.pantalla,
    ram = telefono.ram,
    procesador = telefono.procesador,
    precio = telefono.precio

console.log(telefono.marca, telefono.color, telefono.pantalla, telefono.ram, telefono.procesador, telefono.precio);
*/

/*
/// destrututacion
let {marca, color, pantalla, ram, procesador, precio} = telefono;

console.log(marca, color, pantalla, ram, procesador, precio);
*/

/*
let computador = {
    marca: "Hp",
    color: "Gris",
    pantalla: 12.5,
    ram : 8,
    procesador: "windows 10", 
    precio: 1200000
};

/*
/// sin destruturacion

let marca = computador.marca,
    color = computador.color,
    pantalla = computador.pantalla,
    ram = computador.ram,
    procesador = computador.procesador,
    precio = computador.precio

console.log(computador.marca, computador.color, computador.pantalla, computador.ram, computador.procesador, computador.precio);
*/

/*
/// destrututacion

let {marca, color, pantalla, ram, procesador, precio} = computador;

console.log(marca, color, pantalla, ram, procesador, precio);
*/

/*
/// ejecicio 4

let vehiculo = {
    marca: "Mazda",
    modelo: "2022",
    motor: "V2",
    garantia: "5 año",
    color: "Platiado",
    precio: "24,000,000",
};

/*
/// sin destruturacion 

let marca = vehiculo.marca,
modelo = vehiculo.modelo,
motor = vehiculo.motor,
garantia = vehiculo.garantia,
color = vehiculo.color,
precio = vehiculo.precio

console.log(vehiculo.marca, vehiculo.modelo, vehiculo.motor, vehiculo.garantia, vehiculo.color, vehiculo.precio)
*/


/*
/// destrututacion 
let {marca, modelo, motor, garantia, color, precio}= vehiculo

console.log(marca, modelo, motor, garantia, color, precio)
*/


//// ejemplo de operador spread

/// ejemplo 1

const sumar = (a,b) => a+b;

const numero = [2,3];

const suma = sumar(...numero);

// console.log(suma);

// elemplo 2

// const masNumeros = [1, ...numero, 4, 5];

console.log(masNumeros);

// ejemplo 3

const otrosNumeros = [4, 5];

const concatenar =[...numero, ...otrosNumeros];

// console.log(concatenar);

// ejemplo 3
// 
const [primero, ...resto] = masNumeros;

// console.log('masNumero', masNumeros);
// console.log('primero', primero);
// console.log('resto', resto);

// ejemplo 5

const masNumeroClonado = [... masNumeros];

// console.log('masNumero', masNumeros);
// console.log('masNumeroClonado', masNumeroClonado)

// ejemplo 6

const persona = {
    nombre: 'Juan',
    apellido: 'Alvare'
}

const persona2 = {
    ...persona,
    edad: 52
};

// console.log('persona2', persona2);

// ejemplo 7

const persona3 = {...persona2};
persona3.nombre = 'Roberto';

// console.log(persona3);

// ejemplo 8

const {edad, ...persona4} = persona3;

console.log('edad', edad);
console.log('persona4', persona4);

