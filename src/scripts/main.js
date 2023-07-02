AOS.init();


const dataDoEvento = new Date('Jul 1, 2023 18:00:00')//criando a data do evento
const timeStampDoEvento = dataDoEvento.getTime();//pegando quanto tempo em milesegundos até a data do evento

const contaAsHoras = setInterval(function () {//configurando uma contagem de tempo de 1 em 1 segundo

    const agora = new Date(); //pegando a data atual
    const timeStampAtual = agora.getTime(); //pegando quanto tempo já se passou até a data atual


    //Posso trocar os cálculos por constantes também, dessa forma:
    //const diasEmMilesegundos = 1000 * 60 * 60 * 24
    // é só pegar a constante diasEmMilesegundos e colocar no lugar do cálculo na linha 20


    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual; //calculando quantos milesegundos faltam até o evento

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));//calculando quantos dias até o evento

    const horasATeOEvento = Math.floor(distanciaAteOEvento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))// pegando o resto da divisão para achar os dias e dividindo por (1000 * 60 * 60) para achar as horas.

    const minutosAteOEvento = Math.floor(distanciaAteOEvento % (1000 * 60 * 60) / (1000 * 60)) // pegando o resto da divisão para achar as horas e dividindo por (1000 * 60) para achar os minutos

    const segundosAteOEvento = Math.floor(distanciaAteOEvento % (1000 * 60) / 1000)// pegando o resto da divisão para achar os minutos e dividindo por 1000 para achar os segundos



    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasATeOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`; //colocando na tela os dados armazenados nas constantes


    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }



}, 1000)
//Então, a cada segundo o conteúdo de contaAsHoras será executado e a constante agora será atualizada.

//1000 milesegundos * 60 = 1 minuto * 60 = 1 hora * 24 = 1 dia