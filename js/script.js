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
    let imc     = peso/Math.pow(altura, 2);

    // exibe o resultado do IMC na tela
    result.innerHTML    = imc.toFixed(2);

    diag.innerHTML      = (
        imc < 16.9
        ? 'Magreza severa.'
        : imc < 18.5
        ? 'Abaixo do peso.'
        : imc < 25
        ? 'Peso normal.'
        : imc < 30
        ? 'Acima do peso.'
        : imc < 35
        ? 'Obesidade I.'
        : imc < 40
        ? 'Obesidade II.'
        : 'Obesidade mórbida.'
    );

});
