function trocarCorDoSemaforoParaNovaCorDiferenteDaAnterior(){
    let cor = ['vermelho', 'amarelo', 'verde'];
    
        setTimeout(function(){
            for(i=0; i<3; i++){
                let corAtual = document.getElementById(cor[i]);
                if(corAtual){
                    corAtual.style.boxShadow = "var(--brilho)"+cor[i];
                }else{
                    corAtual.style.boxShadow = "var(--apagado)"+cor[i];
                }
            }
            
        }, (corAtual == 'Amarelo') ? 1000 : 8000); 

}
