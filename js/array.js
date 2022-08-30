/*
// EJERCIO #1 //
window.onload = function () {

    //console.log('Hola');

    var mayor = 0;

    var menor = 99999;

    var numeros = [];

    //captura de datos

    for (var i = 0; i < 6; i++) {

        numeros[i] = parseInt(prompt('Dime un numero y te indicare cual es el mayor de los seis...'));

    }

    //recorremos array y comprobamos cual es el mayor / menor

    for (var i = 0; i < numeros.length; i++) {

        if (numeros[i] > mayor) {

            mayor = numeros[i];

        }

        if (numeros[i] < menor) {

            menor = numeros[i];

        }

    }

    console.log('Hemos terminado de comprobar');

    console.log(`El numero mayor es ${mayor}`);

    console.log(`El numero menor es ${menor}`);

}*/


/*
//     EJERCICIO #2    //
const ciudades = ["Colombia", "Cesar", "Barcelona", "La jagua"];

if(ciudades.includes("Barcelona")) {
   console.log("Barcelona esta en la lista");
} else {
    console.log("barcelona no esta en la lista");
}

var encontrada = ciudades.find(function(ciudad) {  
    return ciudad[0] == "B";
});
 
if(encontrada) {
    console.log("hay una ciudads que empieza por B"); 
} else {
    console.log("no hay ciudad que empieza por B")
}
 
console.log(encontrada); 

*/
/*
// EJERCICIO #3
const ciudades = [
    {
        name: "Madrid",
        population: "3M",
        country: "Spain",
    },
    {
        name: "Paris",
        population: "10M",
        country: "France",
    },
    {
        name: "Florianopolis",
        population: "600K",
        country: "Brasil",
    }
];


var ciudad = ciudades.find(function(current) {
    return current.name === "paris";
});

if(ciudad){
    console.log(ciudad.population);
} else {
    console.log("no se encontro la ciudad")
}









