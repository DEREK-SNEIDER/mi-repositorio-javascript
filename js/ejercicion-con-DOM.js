/*
function init() {

    let contenedor = document.getElementById("resultado");

    // parrafos

    let p1 = document.createElement("p");
    let p1Texto = document.createTextNode("Parrafo 1");
    p1.appendChild(p1Texto);

    let p2 = document.createElement("p");
    let p2Texto = document.createTextNode("Parrafo 2");
    p2.appendChild(p2Texto);

    let p3 = document.createElement("p");
    let p3Texto = document.createTextNode("Parrafo 3");
    p3.appendChild(p3Texto);

    contenedor.appendChild(p1);
    contenedor.appendChild(p2);
    contenedor.appendChild(p3);

    // enlace

    let enlace = document.createElement("a");
    enlace.setAttribute("href", "http://discoduroderoer.es");
    let enlaceTexto = document.createTextNode("Enlace");
    enlace.appendChild(enlaceTexto);

    contenedor.appendChild(enlace);

    // lista desordenada

    let lista = document.createElement("ul");

    for (let index = 0; index < 3; index++) {
        let li = document.createElement("li");
        let liTexto = document.createTextNode("elemento " + index);
        li.appendChild(liTexto);
        lista.appendChild(li);
    }

    contenedor.appendChild(lista);

}

window.onload = init;



function init() {

    let select = document.createElement("select");

    let option1 = document.createElement("option");
    option1.setAttribute("value", "value1");
    let option1Text = document.createTextNode("Opcion 1");
    option1.appendChild(option1Text);
    
    let option2 = document.createElement("option");
    option2.setAttribute("value", "value2");
    let option2Text = document.createTextNode("Opcion 2");
    option2.appendChild(option2Text);

    let option3 = document.createElement("option");
    option3.setAttribute("value", "value3");
    let option3Text = document.createTextNode("Opcion 3");
    option3.appendChild(option3Text);

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    let selectContenedor = document.getElementById("select-contenedor");
    selectContenedor.appendChild(select);


    let input = document.createElement("input");
    input.setAttribute("list", "lista");

    let datalist = document.createElement("datalist");
    datalist.setAttribute("id", "lista");

    let optionDL1 = document.createElement("option");
    optionDL1.setAttribute("value", "opcion 1");
    
    let optionDL2 = document.createElement("option");
    optionDL2.setAttribute("value", "opcion 2");

    let optionDL3 = document.createElement("option");
    optionDL3.setAttribute("value", "opcion 3");

    datalist.appendChild(optionDL1);
    datalist.appendChild(optionDL2);
    datalist.appendChild(optionDL3);

    let datalistContenedor = document.getElementById("datalist-contenedor");
    datalistContenedor.appendChild(input);
    datalistContenedor.appendChild(datalist);

}

window.onload = init;
*/


/*
/// producto para la comida  ////
const listaComida = [
    {
        nombre: "Tomate",
        precio: "1200$",
        cantidad: "1 kilo",
    },
    {
        nombre: "Cebolla",
        precio: "1000$",
        cantidad: "1/4 libra",
    },
    {
        nombre: "Cebollin",
        precio: "900$",
        cantidad: "1/2 libra",
    },
    {
        nombre: "Melon",
        precio: "2000$",
        cantidad: "2 kilo",
    },
    {
        nombre: "Pepino",
        precio: "1100$",
        cantidad: "3 kilo",
    },
    {
        nombre: "Ojita",
        precio: "700$",
        cantidad: "1 libra",
    },
]

/////  elecion de usuario  ///

let accion = ""

while (accion != "SALIR") {
    accion = prompt("Ingrese COMPRAR|VER|AGREGAR|SALIR")
    switch (accion) {
        case "COMPRAR":
            comprarComida()
            break;
        case "VER":
            verComida()
            break;
        case "AGREGAR":
            agregarComida()
            break;
        case "SALIR":
            alert("Estoy saliendo")
            break;
        default:
            alert("Ingrese una acción válida")
            break;
    }
}

//// funciones  ////

//// funcion para compra comida  ////

function comprarComida() {
    let ComidaElegida = prompt("Ingrese el nombre de la comida a comprar")
    const ComidaBuscada = listaComida.find((comida) => {
        return comida.nombre == ComidaElegida
    })
    if (ComidaBuscada) {
        console.log("Compré la siguiente comida:")
        console.log(ComidaBuscada)
    } else {
        console.log("No se encontró la comida")
    }
}

/// funciones para ver lo que hay en la lista de comida  ////

function verComida() {
    listaComida.forEach((comida) => {
        alert(`Nombre: ${comida.nombre} Precio: ${comida.precio} cantidad: ${comida.cantidad}`)
    })
}

//// funciones para agregar otro producto de comida ////

function agregarComida() {
    let nuevoNombre = prompt("Ingrese el nombre de la comida:")
    let nuevoPrecio = prompt("Ingrese el precio de la comida:")
    let nuevoCantidad = prompt("Ingrese la cantidad de la comida:")

    const nuevaComida = {
        nombre: nuevoNombre,
        precio: nuevoPrecio,
        cantidad: nuevoCantidad,
    }

    const comidaBuscada = listaComida.some((comida) => {
        return comida.nombre == nuevoNombre
    })

    if (comidaBuscada) {
        alert("La comida ya existe")
    } else {
        listaComida.push(nuevaComida)
    }
}
*/




/// midificacion de DOM  ////

//Definición de clases, esto en un futuro va en otros archivos
class FormData {
    constructor(name, city, phone, PostalCode,) {
        this.name = name
        this.surname = city
        this.phone = phone
        this.pass = PostalCode
    }

    getValue(field) {
        let value = "";
        switch (field) {
            case "Nombre":
                value = this.name
                break;
            case "Ciudad":
                value = this.surname
                break;
            case "Teléfono":
                value = this.phone
                break;
            case "Codigopostal":
                value = this.pass
                break;

        }
        return value
    }
}

//Definición de mis objetos
const datosControlado = new FormData()

//Definición de mis elementos de DOM
const formControlado = document.getElementById("formControlado")

const submitControlado = document.getElementById("controlAccept")

const repPassword = document.querySelectorAll(".repass")

//Definición de mis eventos

formControlado.addEventListener("input", handleInputControl)
formControlado.addEventListener("submit", handleSubmitControl)

repPassword.forEach((field) => { field.addEventListener("blur", handleBlur) })

//Funciones de mis eventos

//Ahora vamos con las funciones de los form controlados

function handleSubmitControl(event) {
    console.log(datosControlado)
}


function handleInputControl(event) {
    //console.log(event)
    //console.log(event.target)
    //console.log(event.target.placeholder)
    event.preventDefault()

    const id = event.target.placeholder
    const value = event.target.value

    switch (id) {
        case "Teléfono":
            if (!isNaN(value) || value == "") {
                // este codigo no me cuadra me puedes ayudar me arias el favor ///
                datosControlado.setValue(value, id)
                event.target.value = datosControlado.getValue(id)
            } else if (datosControlado.getValue(id)) {
                event.target.value = datosControlado.getValue(id)
            } else {
                event.target.value = ""
            }
            break;
        case "Codigopostal":
            event.target.type = "Codigopostal"
            datosControlado.setValue(value, id)
            event.target.value = datosControlado.getValue(id)
    }
}

function handleBlur(event) {
    //console.log(event.target.parentNode.id)
    const id = event.target.parentNode.id
    if (id == "formControlado") {
        if (datosControlado.pass != datosControlado.repass) {
            console.log("diferentes")
            event.target.style.border = "1px solid red"
        } else {
            console.log("Iguales")
            event.target.style.border = "0px solid black"
        }
    }
}