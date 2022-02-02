var piedra = "piedra"
var papel = "papel"
var tijeras = "tijeras"
var player1 = piedra
var player2 = papel

if (player1 != player2) {
    if (player1 == piedra && player2 == tijeras) {
        console.log ("Player 1 wins!")
    }
    else if (player1 == tijeras && player2 == papel) {
        console.log ("Player 1 wins!")
    }
    else if (player1 == papel && player2 == piedra) {
        console.log ("Player 1 wins!")
    } else {
        console.log ("Player 2 wins!")
    }
} else {    
    console.log ("¡Empate! Jueguen de nuevo.")
}

// Aquí comienza el juego

var piedra = "piedra"
var papel = "papel"
var tijeras = "tijeras"

function partida(p1, p2) {
    switch (p1) {
        case piedra:
            switch (p2) {
                case tijeras:
                    console.log ("p1 gana");
                    break;
                case piedra:
                    console.log ("¡Empate!");
                    break;  
                default:
                    console.log ("p2 gana");
                    break; }
            break;                
        case papel:
            switch (p2) {
                case tijeras:
                    console.log ("p2 gana");
                    break;
                case piedra:
                    console.log ("p1 gana");
                    break;  
                default:
                    console.log ("¡Empate!");
                    break;}
            break;                                   
        default:
            switch (p2) {
                case tijeras:
                    console.log ("¡Empate!");
                    break;
                case piedra:
                    console.log ("p2 gana");
                    break;  
                default:
                    console.log ("p1 gana");     
                    break;}         
            break;
    }    
}

partida (piedra, papel)

// Aquí empiezan lis ciclos for

var segundoGrado = ["Alexa", "Samantha", "Brian", "Dante", "Italia", "Mario"];

function Lista(alumno) {
    console.log (alumno + ", Presente.")
}

for (var i = 0; i < segundoGrado.length; i++) {
    Lista (segundoGrado [i]);
} 

for (var alumno of segundoGrado) {
    Lista (alumno);
}


for (var noun of ['Pharmacists', 'Squids', 'Twins']) {
    for (var adj of ['Lost', 'Raging', 'Fake']) {
      print('The ' + adj + ' ' + noun);
    }
  }

// Aquí empiezan lis ciclos while

// Tengo que cocinar un pollo. El programa debe detener la estufa cuando el pollo esté cocido.

var cronometro = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function mensaje(minuto) {
    console.log(minuto + ", el pollo aún no está listo.")
};

while (cronometro[0] != "10") {
    var minuto = cronometro.shift();
    console.log(mensaje(minuto));     
}; console.log ("El pollo ya está.");

// Loop de construcción de autos.

function auto(marca, modelo, annio) {
    this.marca = "marca";
    this.modelo = "modelo";
    this.annio = "annio";
}

let coche1 = ['toyota', 'neo', '2030'];

let coche2 = ['mazda', 'm5', '1990'];

let coche3 = ['henroi', 'cavali', '2010'];

let coche4 = ['dodge', 'aztec', '2015'];

let coche5 = ['honda', 'civic', '3030'];

var coches = [coche1, coche2, coche3, coche4, coche5];

for (let coche of coches) {
    new auto(coche[0], coche[1], coche[2])
}

console.log(auto);

// ejemplo robado

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 5 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }