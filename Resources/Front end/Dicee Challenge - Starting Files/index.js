
//DEFINIMOS NUESTRAS VARIABLES RANDOM 1 Y RANDOM 2 PARA QUE SIMULEN EL RESULTADO DE DOS DADOS (1-6)

var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

// CODIGO PARA CAMBIAR LA IMAGEN CON BASE EN EL RESULTADO RANDOM 1

document.querySelector("img.img1").setAttribute('src', './images/dice' + randomNumber1 + '.png');

// CODIGO PARA CAMBIAR LA IMAGEN CON BASE EN EL RESULTADO RANDOM 2

document.querySelector("img.img2").setAttribute('src', './images/dice' + randomNumber2 + '.png');

// Cambiar el texto de h1 para dar el resultado 

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText = 'PLAYER 1 WINS!!!';
    }
        else if (randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerText = 'PLAYER 2 WINS!!!';
        }
        else if (randomNumber1 == randomNumber2){
            document.querySelector("h1").innerText = 'DRAW!';
        }

