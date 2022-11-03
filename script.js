
const CALCULAR = document.getElementById('calcular');
const VOLUMEN = document.getElementById('volumen');
const VOLUMEN2 = document.getElementById('volumen2')
const ERROR = document.getElementById('error');
const MANTENIMIENTO = document.getElementById('mantenimiento');
const FLUJO = document.getElementById('flujo');
CALCULAR.addEventListener('click', () => { 
    const PESO = document.getElementById('peso').value
    if (PESO > 0){
        ERROR.style.display = 'none';
        let volumen = 0;
        let volumen2 = 0;
        let aux = 0;
        if(PESO<31){
            volumen = calculoHollidaySegar(PESO);
            volumen=volumen.toFixed();
            VOLUMEN2.style.display = 'none';
        }
        else{ 
            aux = calculoSC(PESO);
            volumen= aux*1500;
            volumen=volumen.toFixed();
            volumen2 = aux*2000;
            volumen=volumen.toFixed();
            VOLUMEN2.innerHTML ='SC*2000=' + volumen2 + 'cc diario';
            VOLUMEN2.style.display = 'block';  
        }
        let flujo = volumen/24;
        flujo=flujo.toFixed();
        let mantmedio = flujo*1.5;
        mantmedio=mantmedio.toFixed();
        VOLUMEN.innerHTML = volumen + 'cc diario';
        FLUJO.innerHTML = flujo + ' cc/hr';
        MANTENIMIENTO.innerHTML = 'm+m/2 = ' + mantmedio + ' cc/hr';
        VOLUMEN.style.display = 'block'
        FLUJO.style.display = 'block';
        MANTENIMIENTO.style.display = 'block';        
}   else {
        ERROR.style.display = 'block';
        VOLUMEN.style.display = 'none';
        VOLUMEN2.style.display = 'none';
        FLUJO.style.display ='none';
        MANTENIMIENTO.style.display = 'none';   
}
} )
function calculoHollidaySegar(peso){
    let volumen = 0;
    
    peso=Number(peso);
    if(peso<=10){
        volumen=peso*100;
    }
    if(peso>10 && peso<=20){
        volumen=1000+(peso-10)*50;
    }
    if(peso>20 && peso<31){
        volumen=1500+(peso-20)*20;
    }
    return volumen;
}
function calculoSC(peso){    
    peso=Number(peso);
    let aux = 0;
    aux=((peso*4)+7)/(peso+90);    
    return aux; 
}
