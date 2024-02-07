
const button = document.getElementById('calcular')

button.addEventListener('click', function() {
    
    imc()
    alert("O seu IMC é: " + imc())
})



const imc=()=>{
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let imc2 = peso/(altura**2)

    return imc2
}
