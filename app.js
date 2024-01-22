let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

// desafios

// let listaGenerica = [];
// let listaDeLenguajes = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
// listaDeLenguajes.push( 'Java', 'Ruby', 'GoLang');

// function mostrarListaDeLenguajes(){
//     for( let i = 0; 1 < listaDeLenguajes.length; i++){
//         console.log(listaDeLenguajes[i]);
//     }
// }
// mostrarListaDeLenguajes();

// function mostrarLenguagesReversoSeparadamente() {
//     for (let i = listaDeLenguajes.length - 1; i >= 0; i--) {
//       console.log(listaDeLenguajes[i]);
//     }
// }
  
// mostrarLenguagesReversoSeparadamente();

// function calcularMedia(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//       suma += lista[i];
//     }
//     return suma / lista.length;
//   }
  
//   let Numeros = [10, 20, 30, 40, 50];
//   let media = calcularMedia(Numeros);
//   console.log('Média:', media);

//   function encontrarMayorMenor(lista) {
//     let mayor = lista[0];
//     let menor = lista[0];
  
//     for (let i = 1; i < lista.length; i++) {
//       if (lista[i] > mayor) {
//         mayor = lista[i];
//       }
//       if (lista[i] < menor) {
//         menor = lista[i];
//       }
//     }
  
//     console.log('Mayor:', mayor);
//     console.log('Menor:', menor);
//   }
  
//   let num = [15, 8, 25, 5, 12];
//   encontrarMayorMenor(num);

//   function calcularSuma(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//       suma += lista[i];
//     }
//     return suma;
//   }
  
//   let numeros = [15, 8, 25, 5, 12];
//   let suma = calcularSuma(numeros);
//   console.log('Suma:', suma);

//   function encontrarIndiceElemento(lista, elemento) {
//     for (let i = 0; i < lista.length; i++) {
//       if (lista[i] === elemento) {
//         return i; // Retorna el índice del elemento encontrado
//       }
//     }
//     return -1; // Retorna -1 si el elemento no se encuentra en la lista
//   }

