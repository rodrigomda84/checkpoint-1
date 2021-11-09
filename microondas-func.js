function pipoca(tempo){
    console.log('================PIPOCA================')
    console.log('=====TEMPO DE COZIMENTO 10 SEGUNDOS===\n')

    if(tempo > 20 && tempo < 30){
        console.log('A sua Comida Queimou')
    }else if(tempo < 10){
        console.log('Tempo insuficiente')
    }else if(tempo >= 30){
        console.log('***KABUUUMMMMM***')
    }else {
        console.log('Prato Pronto, Bom Apetite')
    }
}

 function macarrao(tempo){
    console.log('================MACARRÃO=============')
    console.log('=====TEMPO DE COZIMENTO 8 SEGUNDOS===\n')

    if(tempo > 16 && tempo < 24){
        console.log('A sua Comida Queimou')
    }else if(tempo < 8){
        console.log('Tempo insuficiente')
    }else if(tempo >= 24){
        console.log('***KABUUUMMMMM***')
    }else {
        console.log('Prato Pronto, Bom Apetite')
    }
}

function carne(tempo){
    console.log('================CARNE=================')
    console.log('=====TEMPO DE COZIMENTO 15 SEGUNDOS===\n')

    if(tempo > 30 && tempo < 45){
        console.log('A sua Comida Queimou')
    }else if(tempo < 15){
        console.log('Tempo insuficiente')
    }else if(tempo >= 45){
        console.log('***KABUUUMMMMM***')
    }else {
        console.log('Prato Pronto, Bom Apetite')
    }
}
    
function feijao(tempo){
    console.log('================FEIJÃO================')
    console.log('=====TEMPO DE COZIMENTO 12 SEGUNDOS===\n')

    if(tempo > 24 && tempo < 36){
        console.log('A sua Comida Queimou')
    }else if(tempo < 12){
        console.log('Tempo insuficiente')
    }else if(tempo >= 36){
        console.log('***KABUUUMMMMM***')
    }else {
        console.log('Prato Pronto, Bom Apetite')
    }
}

function brigadeiro(tempo){
    console.log('================BRIGADEIRO================')
    console.log('=====TEMPO DE COZIMENTO 8 SEGUNDOS===\n')

    if(tempo > 16 && tempo < 24){
        console.log('A sua Comida Queimou')
    }else if(tempo < 8){
        console.log('Tempo insuficiente')
    }else if(tempo >= 24){
        console.log('***KABUUUMMMMM***')
    }else {
        console.log('Prato Pronto, Bom Apetite')
    }
}


let menu = 2
switch (menu){
    case 1:
        pipoca(10)
        break;
    
    case 2:
        macarrao(30)
        break;

    case 3:
        carne(10)
        break; 

    case 4:
        feijao(10)
        break; 

    case 5:
        brigadeiro(10)
        break; 
    
    default:
        console.log('Prato Inexistente')

}
