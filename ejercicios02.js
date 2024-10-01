// Tarea entregable 02

 // 1) Eliminar el primer elemento hijo desde el padre
 let cardContainer = document.getElementById('cardContainer');
 let firstCard = cardContainer.firstElementChild;
 cardContainer.removeChild(firstCard); 
 

// 2) Eliminar, desde él mismo, el elemento cuya clase es "cards redClass"

let redCard = document.querySelector('.cards.redClass');
if (redCard) {
    redCard.parentNode.removeChild(redCard);
    console.log('Elemento eliminado:', redCard);
} else {
    console.log('No se encontró ningún elemento con la clase "cards redClass".');
}

// 3) Crear un elemento h1 con tu nombre

let h1Element = document.createElement('h1');
h1Element.textContent = 'Javier Polo'; 
console.log(h1Element);


// 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la página del Vedruna

let enlaceVedruna = document.createElement('a');
enlaceVedruna.textContent = 'Vedruna';
enlaceVedruna.href = 'https://vedrunasevilla.org/';


// 5) Crear un elemento botón cuyo id sea "botonJoker" y su texto sea "boton"

let botonJoker = document.createElement('button');
botonJoker.id = 'botonJoker';
botonJoker.textContent = 'botón';

// 6) Crear un elemento div con la clase cards greenClass:

let divGreenClass = document.createElement('div');
divGreenClass.className = 'cards greenClass';

// 7) Añadir los elementos h1, enlace y botón al div creado anteriormente:

divGreenClass.appendChild(h1Element);
divGreenClass.appendChild(enlaceVedruna);
divGreenClass.appendChild(botonJoker);

// 8) Añadir el div creado al contenedor #cardContainer:

cardContainer.appendChild(divGreenClass);

