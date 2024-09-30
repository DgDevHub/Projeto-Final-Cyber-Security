function showSquares() {
    document.getElementById('squareContainer').classList.toggle('show');
}

document.getElementById("verificarnome").onclick = function(){
    verificarCampo()
}

const nomeInput = document.getElementById("nomeUser")
const startBotao = document.getElementById("start")

function verificarCampo(){
    let nomeValido = false
    do {
        if(nomeInput.value.trim() !== "" && nomeInput.value.length >= 3 && isNaN(nomeInput.value) ){
            sessionStorage.setItem("nomeUser", nomeInput.value)
            startBotao.style.visibility = "visible"
            nomeValido = true
        }else{
            startBotao.style.visibility = "hidden"
             alert("Digite seu nome corretamente")
             nomeInput.value = prompt("Digite seu nome corretamente (Mínimo de 3 caracteres)")
        }
    } while (!nomeValido);
}