// declaração de constantes
const form  = document.querySelector('form');
const imc   = document.querySelector('button');

// anula submissão de dados do formulário
form.onsubmit = () => false;

imc.addEventListener('click', () => {

    // declaração de variáveis
    let peso    = document.querySelector('#peso').value.replace(',', '.');
    let altura  = document.querySelector('#altura').value.replace(',', '.');
    let result  = document.querySelector('#result');
    let diag    = document.querySelector('#diag');
    let imcImg  = document.createElement('img');
    let imc     = peso/Math.pow(altura, 2);

    // exibe o resultado do IMC na tela
    result.innerHTML    = imc.toFixed(2);

    diag.innerHTML      = (
        imc < 18.5
        ? 'Você está abaixo do peso.'
        : imc < 25
        ? 'Você está no seu peso ideal.'
        : imc < 30
        ? 'Você está acima do peso.'
        : imc < 35
        ? 'Você está obeso.'
        : imc < 40
        ? 'Você está com obesidade severa.'
        : 'Você está com obesidade mórbida. Procure um médico.'
    );

    imcImg.src = '../imagens/imc.jpg';
    document.querySelector('#imc-img').appendChild(imcImg);

});
