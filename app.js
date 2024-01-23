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

// // Crea una lista vacía llamada "listaGenerica".

// let listaGenerica = [];

// // Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 
// //'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

// let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

// // Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

// lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');

// // Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

// function lenguagesDeProgramacionArr(){
//     for (let index = 0; index < lenguagesDeProgramacion.length; index++) {
        
//         console.log(lenguagesDeProgramacion[index]);
        
//     }
// }
// //lenguagesDeProgramacionArr();

// // Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

// function lenguagesDeProgramacionInverso(){
//     for (let index = lenguagesDeProgramacion.length-1; index >= 0; index--) {
        
//         console.log(lenguagesDeProgramacion[index]);
        
//     }
// }

// //lenguagesDeProgramacionInverso();
// // Crea una función que calcule el promedio de los elementos en una lista de números.

// function Promedio(){

// let notas = [90 , 85 , 70];
// let sumatoria;
// for (let index = 0; index < notas.length; index++) {
    
//     sumatoria = sumatoria + notas[index];
    
// }

// console.log(`El valor promedio es ${sumatoria/notas.length}`);


// }
// // Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

// function NumeroPequeYgrande(){

//     let ArregloNumero = [1,151,2156,246312231,2153,2,155,32];
//     let numeroPeque;
//     let numerogrande;
    
    
//     numeroPeque = Math.min(...ArregloNumero);
//     numerogrande = Math.max(...ArregloNumero);
//     console.log(`El numero maximo es ${numerogrande} y el numero minimo es ${numeroPeque}`);
    
    

// }

// //NumeroPequeYgrande();
// // Crea una función que devuelva la suma de todos los elementos en una lista.

// function SumatoriaArr(){

//     let ArregloNumero = [5 , 6 , 10 , 12];
//     let sumatoria = 0;

//     for (let index = 0; index < ArregloNumero.length; index++) {
//         sumatoria = sumatoria + ArregloNumero[index];
        
//     }

//     console.log(`La sumatoria de todo es ${sumatoria}`)
// }

// //SumatoriaArr();

// // Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

// function NumeroArr(numero){

//     let ArregloNumero = [2,5,3,56,1,8];
//     let posición = 0;
//     for (let index = 0; index < ArregloNumero.length; index++) {
        
//         if(ArregloNumero[index] == numero ){
//             posición = index;
//         }
//         else{
//             posición = -1;
//         }
        
//     }

//     console.log(posición);
    
// }

// NumeroArr(8);
// // Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

// function SumaArreglo(arreglo1, arreglo2){

// if(arreglo1.length != arreglo2.length){
//     console.log("El arreglo no tiene el mismo");
// }else{

//     let NuevoArr = [];

//     for (let index = 0; index < arreglo1.length; index++) {
        
//         NuevoArr.push((arreglo1[index] + arreglo2[index]));
//     }
    
//     console.log(NuevoArr);

// }
// }
// let arr1 = [1,2,3,4,5];
// let arr2 = [2,3,4,5,6];
// SumaArreglo(arr1 , arr2);
// // Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

// function NumeroElevado(arr){

// let numeroElevadoArr = [];

// for (let index = 0; index < arr.length; index++) {
    
//     numeroElevadoArr.push(Math.pow(arr[index] , 2));
    
// }

// console.log(numeroElevadoArr);

// }

// NumeroElevado(arr1);