let state = Boolean

function pararSemaforo () {
    state = false
}

function iniciarSemaforo () {
    state = true
    return trocarCorDoSemaforoParaNovaCorDiferenteDaAnterior(0)
}

function trocarCorDoSemaforoParaNovaCorDiferenteDaAnterior(index){
    let cor = ['green','yellow', 'red' ];

    setTimeout(function(){
        if (index == 0)
            {
                apagarSemaforo()
                acenderSemaforoAtual(cor[index])
            }
        else if (index == 1)
            {
                apagarSemaforo()
                acenderSemaforoAtual(cor[index])
            } 
        else
            {
                apagarSemaforo(cor[index])
                acenderSemaforoAtual(cor[index])
            }
        }, (index == 1) ? 1000 : 8000);
    if (!state) {
        return 
    } else if (index == 2){
        trocarCorDoSemaforoParaNovaCorDiferenteDaAnterior(index = 0)
    } else {
        trocarCorDoSemaforoParaNovaCorDiferenteDaAnterior(index++)
    }
}

function apagarSemaforo(index) {
    let corAtual = document.getElementById(cor[index])
    corAtual.style.boxShadow = "var(--apagado)"+cor[index]
}

function acenderSemaforoAtual(index) {
    let corAtual = document.getElementById(cor[index])
    corAtual.style.boxShadow = "var(--brilho)"+cor[index]
}