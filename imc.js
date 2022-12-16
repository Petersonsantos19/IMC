const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

        if(nome !=='' && altura !== '' && peso !=='') {

            const valorIMC = (peso/(altura * altura)).toFixed(2);

            let classificação = '';

            if (valorIMC < 18.5){
                classificação = 'abaixo do peso.';
            }else if (valorIMC < 25){
                classificação = 'com peso ideal. Parabéns!!!';
            }else if (valorIMC < 30){
                classificação = `levemente acima do peso`;
            }else if (valorIMC < 35){
                classificação = `com obesidade grau I`;
            }else if (valorIMC < 40){
                classificação = `com obesidade grau II`;
            }else{
                classificação = `com obesidade grau III. Cuidado!!!`;
            }

            resultado.textContent = `${nome} seu IMC é ${valorIMC} e voçê está ${classificação};

        }else{
            resultado.textContent = 'Preencha todos os campos!!!'
        }
}

calcular.addEventListener('click', imc);
