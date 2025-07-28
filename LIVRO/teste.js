var vem = document.getElementById("vem")
var vai = document.getElementById("fim")
var livro = document.getElementById("livroui")
var paragrafo = [document.getElementById("paragrafo1"),document.getElementById("paragrafo2"),document.getElementById("paragrafo3")]
var imagens = [document.getElementById("img1"),document.getElementById("img2")]
var pagina = 0
var btnAntSus = [document.getElementById("ant"),document.getElementById("sus")]
vem.addEventListener("click",sobe_L)
vai.addEventListener("click",desce_L)

btnAntSus[0].addEventListener("mouseup",anterior_)
btnAntSus[1].addEventListener("mouseup",proxima_)
function sobe_L(){
    livro.style.display = "block"
    livro.animate([
        {transform: "translateY(100%)"},
        {transform: "translateY(25%)"},
        {transform: "translateY(0%)"}
    ],
    {
        duration: 2000,
        fill:"forwards"
    }
)

}
function desce_L(){
    livro.animate([
        {transform: "translateY(0%)"},
        {transform: "translateY(110%)"},
        {transform: "translateY(200%)"}
    ],
    {
        duration: 2000,
        fill:"forwards"
    }
    )
    setTimeout(() => {
        livro.style.display = "none"
    }, 2001);

}

function texto_mf(){
    if(pagina > 3 || pagina < 0){
        pagina =0
    }
    switch(pagina){
        case 0:
            imagens[0].src = "foto1.jfif"
            imagens[1].src = "foto2.jfif"
            
            paragrafo[0].innerHTML = "bom como hoje é um dia especial no caso o dia em que voce pode ser presa e se ganher muito dinheiro vai ter que pagar imposto XD brincadeiras a parte Feliz aniversario!!e por meio desse excesso de viadagem "
            paragrafo[1].innerHTML = "tambem por meio dessa mensagem te agradecer não somente por nossa amizade, mas pelo simples fato de você existir, porque desde o dia que nos aproximamos cada momento contigo se mostra especial de alguma forma, desde um ensaio qualquer até uma  boa viagem. esses dias ficam melhores pelo simples fato de você estar lá. a alegria em contar algo, o amor que você sente por Deus, o jeito de ser, a determinação em mudar de vida tudo isso me contagia e inspira a ser alguém melhor. Desde 2021(sim faz quatro anos que a gente se conhece) nesse tempo passamos por todo tipo de aventuras e desventuras. as vezes brinco que você não teve "
            paragrafo[2].innerHTML = "infância mas não posso negar que teve uma boa adolescência. grandes momentos como o aniversário da Amanda e tivemos que enfrentar os perigos noturnos, ou quando fomos na feira do"
            break;
        case 1:
            imagens[0].src = "foto3.jfif"
            imagens[1].src = "foto4.jfif"

            paragrafo[0].innerHTML = "livro, e após de um dia inteiro andando em busca de você descidir um livro pra comprar e depois de tanto pensar tu comprou um livro da Collen Hoover q em suas palavras 'não é muito bom eu ler isso' (quem diria né KKKKKKK)"
            paragrafo[1].innerHTML = "também quando levei o play2 pra jogar na tvzinha da tua avó, e nesse dia descobri o porquê de você não gostar de video games,afinal ate mesmo para subir uma escada em um jogo de lego tava tendo dificuldade, e finalmente a nossa viagem pra mosqueiro, vulgo acapulco, e sendo sincero eu voltaria no tempo para passar esse final de semana tudo de novo porque não lembro de ter me divertido tanto na praia. e sendo redundande tudo isso se mostra especial por você estar lá, estar ouvindo as minhas piadas sem graça, falando sobre o futuro passando vergonha sem medo de ser julgada(ou com medo mesmo),tudo isso te torna amavel e incrivel de "
            paragrafo[2].innerHTML = "ter por perto. Diante disso quero te dizer: Feliz aniversário e que Deus te faça rica(pra bancar uma viagem na suiça comigokkkkk), não só de dinheiro,mas também de tudo que te edfique como pessoa."
            break;
        default:
            pagina = 0
            texto_mf()
    }
}
function proxima_(){
    console.log(pagina)
    pagina += 1
    texto_mf()
    vira_pag()

}
function anterior_(){
    pagina -= 1 
    texto_mf()
    vira_pag()
}
function vira_pag(){
    livro.animate(
        [
            {transform:"rotateY(180deg)"},
            {transform:"rotateY(360deg)"}
        ],
        {
            duration:700,
            iterations:1,
            easing:"ease-in-out"
        }
    )
}
