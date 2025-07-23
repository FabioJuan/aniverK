const id_tela = window.document.getElementById("tela")
const inicio = document.getElementById("inicio")
addEventListener("load",elem_tela)
addEventListener("resize",elem_tela)
function elem_tela(){
    const altura_tela = window.screen.height
    const largura_tela = window.screen.width
    id_tela.style.width = largura_tela +"px"
    id_tela.style.height = altura_tela +"px"
}
function centro(){
    
}