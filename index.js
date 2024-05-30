var setaEsquerda = Window.document.getElementById("seta-esquerda")
var Bruna = Window.document.getElementById("bruna")
var Leonardo = Window.document.getElementById("leonardo")
var Samantha = Window.document.getElementById("samantha")
var setaDireita = Window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top:50px"
    setaDireita.style = "display:none"
}

function RolarParaEsquerda(){
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaEsquerda.style ="display:none; margin-top:50px;"
    setaDireita.style ="display:flex"

}
 