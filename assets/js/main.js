function IMC() {
    const container = document.querySelector('.container');
    const form = container.querySelector('.form');

    function showIMC(){
        event.preventDefault();
        const peso = Number(form.querySelector('.peso').value);
        const altura = Number(form.querySelector('.altura').value);
        const resultado = form.querySelector('.resultado');

        switch (testParams(peso,altura)) {
            case 'erroPeso':
                resultado.innerHTML = 'O peso digitado é Inválido!';
                break;
        
            case 'erroAltura':
                resultado.innerHTML = 'A altura digitada é Invalida!';
                break;

            case true:
                resultado.innerHTML = calcIMC(peso,altura);
                break;
        }        
    }  

    function calcIMC(peso,altura){
        const imc = peso / (altura **2);
        let result;

        if(imc < 18.5) result = 'Abaixo do Peso';
        else if(imc >= 18.6 && imc < 25) result = 'Peso normal';
        else if(imc >= 25 && imc < 30) result = 'Sobrepeso';
        else if(imc >= 30 && imc < 35) result = 'Obesidade grau 1';
        else if(imc >= 35 && imc < 40) result = 'Obesidade grau 2';
        else if(imc >= 40) result = 'Obesidade grau 3';

        return `Seu IMC é ${imc.toFixed(2)} (${result}).`;
    }

    function testParams(peso,altura){
        if(!peso){
            return 'erroPeso';
        }
        if(!altura){
            return 'erroAltura';
        }
        else{
            return true;
        }
    }    

    form.addEventListener('submit',showIMC); 
}
  
IMC();
