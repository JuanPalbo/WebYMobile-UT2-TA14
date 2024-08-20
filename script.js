const btn = document.getElementById('btn')
const salida = document.getElementById('salida')

btn.addEventListener('click', () => {
    let text = document.getElementById('texto').value
    let li = document.createElement('li')
    li.textContent = text
    salida.appendChild(li) 
    document.getElementById('texto').value = ''
})
