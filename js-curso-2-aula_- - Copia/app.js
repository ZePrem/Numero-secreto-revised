let numRange = 3;
let tentativas = 0;
let listNum = [];

{ // FUNCTIONS
    function exibirTextoNaTela(tag,texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
    }

    function cleanInput() {
        let chute = document.querySelector('input');
        chute.value = '';
    }

    function verificarChute() {
        let chute = document.querySelector('input').value;
        if (numSecret == chute) {
            exibirTextoNaTela('h1','Acertou!');
            exibirTextoNaTela('p',`Você acertou o número secreto em ${tentativas} tentativas`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else if (numSecret > chute) {
            tentativas ++;
            cleanInput();
            exibirTextoNaTela('h1','Errou!');
            exibirTextoNaTela('p',`O número secreto é maior que ${chute}`);
        } else if (numSecret < chute) {
            tentativas++;
            cleanInput();
            exibirTextoNaTela('h1','Errou!');
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}`);
         }
    }

    function numRandom() {
        let numSecret = parseInt(Math.random() * numRange + 1);
        if (listNum.length == numRange){
            listNum = [];
        }
        if (listNum.includes(numSecret)){
            return numRandom();
        } else {
            listNum.push(numSecret);
            return numSecret;
        }
        
    }

    function textWelcome(){
        exibirTextoNaTela('h1','Jogo do número secreto');
        exibirTextoNaTela('p',`Escolha um núbero entre 1 e ${numRange}`);
    }

    function newGame() {
        tentativas = 0;
        numSecret = numRandom();
        textWelcome();
        console.log(numSecret);
        document.getElementById('reiniciar').setAttribute('disabled',true);
    }
}

let numSecret = numRandom();
console.log(numSecret);
textWelcome();
