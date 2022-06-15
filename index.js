const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const respostas = ['Não', 'Provavelmente', 'Sim!']
const botaoPerguntar = document.querySelector('#botaoPerguntar')

function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite uma pergunta')
    return
  }

  botaoPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  elementoResposta.style.opacity = 1
  //Sumir resposta após 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    botaoPerguntar.removeAttribute('disabled')
  }, 3000)
}
