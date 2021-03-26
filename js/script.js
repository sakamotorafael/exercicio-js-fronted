const btnAdd = document.querySelector('#adicionar-tarefa')
const input = document.querySelector('input')
const apagar = document.querySelector('.botao-tarefa')
const divTarefas = document.querySelector('#tarefas')


function criarTarefa(){
  if(!input.value){
    input.style.outlineColor = 'Red'
    alert('O campo não pode estar vazio!')
    input.focus()
    return
  }

  const divCol = document.createElement('div')
  divCol.classList.add('col-md-4')
  
  const divCard = document.createElement('div')
  divCard.classList.add('card-tarefa')
  
  const divTexto = document.createElement('div')
  divTexto.classList.add('texto-tarefa')
  divTexto.textContent = input.value
  input.value = null
  input.focus()

  const divBtn = document.createElement('div')
  divBtn.classList.add('botao-tarefa')
  
  const img = document.createElement('img')
  img.src = 'img/check.png'
  img.width = '32'
  img.alt = 'Botão para finalizar tarefa'
  img.title = 'Botão para finalizar tarefa'

  divBtn.appendChild(img)
  divCard.appendChild(divTexto)
  divCard.appendChild(divBtn)
  divCol.appendChild(divCard)
  divTarefas.appendChild(divCol)

  divBtn.addEventListener('click', ()=>{
    divCol.remove()
  })
}

btnAdd.addEventListener('click', () => {
  criarTarefa()
})

input.addEventListener('keyup', (event) => {
  if(event.key === 'Enter'){
    criarTarefa()
  }
})

input.addEventListener('input', () => {
  input.style.outlineColor = 'black'
})