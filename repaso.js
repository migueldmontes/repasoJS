// 1 - Imprimir números del 20 al 5
for (let i = 20; i >= 5; i--) {
    console.log(i);
}

// 2 - Imprimir los cuadrados de los números del 3 al 33
for (let i = 3; i <= 33; i++) {
    console.log(i * i);
}

// 3 - Pedir día y tiempo, y mostrar mensaje
function elTiempo(dia, clima) {
    console.log(`El ${dia} hará ${clima}.`);
}

let dia = prompt("¿Qué día de la semana es?");
let clima = prompt("¿Qué tiempo hace?");
elTiempo(dia, clima);

// 4 - Recorrer un array de recetas y mostrar los nombres
let recetas = ["Paella", "Tortilla", "Gazpacho", "Croquetas"];
recetas.forEach(receta => console.log(receta));

// 5 - Selección de lenguajes de programación en un bucle while
let lenguajes = ["Python", "Java", "C", "JavaScript", "Ruby", "Swift"];
let numero;

while (true) {
    numero = parseInt(prompt("Número de orden? (Escribe 0 para salir)"));

    if (numero === 0) {
        break;
    }

    if (numero > 0 && numero <= lenguajes.length) {
        console.log(lenguajes[numero - 1]); // Ajuste de índice
    } else {
        console.log("Número fuera de rango.");
    }
}

// 6 - Stock de Papa Noel
let stock = parseInt(prompt("Introduce la cantidad inicial de regalos (más de 100):"));

while (stock > 0) {
    let repartidos = parseInt(prompt("¿Cuántos regalos has repartido hoy?"));
    stock -= repartidos;

    if (stock < 100 && stock > 0) {
        console.log(`Ojo, quedan menos de 100 regalos.`);
    } else if (stock <= 0) {
        console.log("¡Misión cumplida! Hasta el año que viene.");
    } else {
        console.log(`Quedan ${stock} regalos.`);
    }
}
