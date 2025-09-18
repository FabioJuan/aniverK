const id_tela = window.document.getElementById("tela")
const maiin = document.getElementById("main")
const inicio = document.getElementById("inicio")
const foguetes =  document.getElementById("confetes")
const elementos = document.getElementsByClassName("elementos")
addEventListener("load",elem_tela)
addEventListener("resize",elem_tela)
//variaveis da senha
const sec_sem = document.querySelector(".confirm")
const btn_sen = document.querySelector("#Entrar")
var tentativas = 3
const acerto_sen = new Audio()
acerto_sen.src = "sons/sonic-the-hedgehog-continue.mp3"
const erro_sen = new Audio()
erro_sen.src = "sons/sonic-error-sound.mp3"

//variaveis do player de musica
const musica = document.getElementById("music")
const musicas = ["musica/Falling Behind.mp3","musica/Legião Urbana - Tempo Perdido.mp3",
                "musica/Laufey - Lover Girl.mp3","musica/The Girl from Ipanema - Frank Sinatra.mp3",
                "musica/Jesus, Filho de Deus - Fernandinho.mp3","musica/Dançar na chuva - Fernandinho.mp3","musica/A Dança do Pinguim - Aline Barros.mp3"]
const btn_player = [document.querySelector("#voltar"),document.querySelector("#pause"),document.querySelector("#proxima")]
const titulo = document.querySelector("#titulo")
const titulos_musicas = ["falling behind - laufey","tempo perdido - legião urbana","lover girl - laufey",
  "The Girl from Ipanema - Frank Sinatra","Jesus, Filho de Deus - Fernandinho",
  "Dançar na chuva - Fernandinho","A Dança do Pinguim - Aline Barros"]
const album = document.querySelector("#img_album")
var tocando = true
var endereco = parseInt(Math.random() * 8)


//funçoes do livro
var vem = document.getElementById("vem")
var vai = document.getElementById("fim")
var livro = document.getElementById("livroui")
var paragrafo = [document.getElementById("paragrafo1"),document.getElementById("paragrafo2"),document.getElementById("paragrafo3")]
var imagens = [document.getElementById("img1"),document.getElementById("img2")]
var pagina = 0
var btnAntSus = document.getElementById("sus")


btn_sen.addEventListener("click",senha_)
function senha_(event){
  event.preventDefault()
  const senha = document.querySelector("#senha").value 
  if(senha == "lunaticoguita"){
    acerto_sen.play()
    sec_sem.style.display = "none"
    id_tela.style.display = "flex"
  }else{
    tentativas -= 1
    erro_sen.play()
    if(tentativas == 0){ 
      location.href = "senha/sonic.html"
    }
  }
  player_song()
}

window.onload = function(){
  console.log(parseInt(Math.random() *7))
  id_tela.style.display = "none"
  livroui.style.display = "none"
  elem_tela()
  player_song()
}


function elem_tela(){
    const altura_tela = window.screen.height
    const largura_tela = window.screen.width
    id_tela.style.width = largura_tela +"px"
    id_tela.style.height = altura_tela +"px"
    //elementos.style.width = largura_tela +"px"
  }
  
  //codigo do livro
  
vem.addEventListener("click",sobe_L)
vem.addEventListener("click",texto_mf)
vai.addEventListener("click",desce_L)

foguetes.addEventListener("click",confetes)


  
btnAntSus.addEventListener("click",proxima_)

function sobe_L(){
    id_tela.style.display = "none"
    livro.style.display = "block"
    livro.animate([
        {transform: "translateY(100%)"},
        {transform: "translateY(50%)"},
        {transform: "translateY(15%)"}
      ],
    {
        duration: 1500,
        fill:"forwards"
        
    }
)

}
function desce_L(){
    livro.animate([
        {transform: "translateY(15%)"},
        {transform: "translateY(110%)"},
        {transform: "translateY(200%)"}
    ],
    {
        duration: 1500,
        fill:"forwards"
    }
    )
    setTimeout(() => {
        livro.style.display = "none"
        id_tela.style.display = "flex"
    }, 2001);
}

function texto_mf(){
    if(pagina > 3 || pagina < 0){
        pagina =0
    }
    switch(pagina){
        case 0:
            imagens[0].src = "LIVRO/foto1.jfif"
            imagens[1].src = "LIVRO/foto2.jfif"
            
            paragrafo[0].innerHTML = "bom como hoje é um dia especial no caso o dia em que voce pode ser presa e se ganher muito dinheiro vai ter que pagar imposto XD brincadeiras a parte Feliz aniversario!!e por meio desse excesso de viadagem "
            paragrafo[1].innerHTML = "tambem por meio dessa mensagem te agradecer não somente por nossa amizade, mas pelo simples fato de você existir, porque desde o dia que nos aproximamos cada momento contigo se mostra especial de alguma forma, desde um ensaio qualquer até uma  boa viagem. esses dias ficam melhores pelo simples fato de você estar lá. a alegria em contar algo, o amor que você sente por Deus, o jeito de ser, a determinação em mudar de vida tudo isso me contagia e inspira a ser alguém melhor. Desde 2021(sim faz quatro anos que a gente se conhece) nesse tempo passamos por todo tipo de aventuras e desventuras. as vezes brinco que você não teve "
            paragrafo[2].innerHTML = "infância mas não posso negar que teve uma boa adolescência. grandes momentos como o aniversário da Amanda e tivemos que enfrentar os perigos noturnos, ou quando fomos na feira do"
            break;
        case 1:
            imagens[0].src = "LIVRO/foto3.jfif"
            imagens[1].src = "LIVRO/foto4.jfif"

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
    setTimeout(() => {
      texto_mf()
    }, 350);

    vira_pag()

}
function vira_pag(){
    livro.animate(
        [   
            {transform: "translateY(15%)"},
            {transform: "translateY(0%)"},
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
//fim do codgo do livro
function player_song(){
  switch(endereco){
    case 0:
      musica.src = musicas[0]
      album.src = "LIVRO/foto1.jfif"
      break;
    case 1:
      musica.src = musicas[1]
      album.src = "LIVRO/foto2.jfif"
      break;
    case 2:
      musica.src = musicas[2]
      album.src = "LIVRO/foto3.jfif"
      break;
    case 3:
      musica.src = musicas[3]
      album.src = "LIVRO/foto4.jfif"
      break;
    case 4:
      musica.src = musicas[4]
      album.src = "LIVRO/foto5.jfif"
      break;
    case 5:
      musica.src = musicas[5]
      album.src = "LIVRO/foto6.jfif"
      break;
    case 6:
      musica.src = musicas[6]
      album.src = "LIVRO/foto7.jfif"
      break;
  }
  titulo.innerHTML = titulos_musicas[endereco]
  musica.play();
}
function prox_song(){
  if(endereco != musicas.length -1){
    endereco +=1
  }else{
    endereco = 0
  }
  player_song()
}

function anter_song(){
  if(endereco != 0){
    endereco -=1
  }else{
    endereco = musicas.length -1
  }
  player_song()
}

function pause_song(){
  tempo = musica.currentTime
  if(tocando == true){
    btn_player[1].src = "images/pause.png"
    musica.pause()
    tocando = false
  }else{
    btn_player[1].src = "images/pause2.png"
    musica.play()
    musica.currentTime = tempo

    tocando = true 
  }
}
btn_player[0].addEventListener("click",anter_song)
btn_player[1].addEventListener("click",pause_song)
btn_player[2].addEventListener("click",prox_song)
musica.addEventListener("ended",prox_song)
function segundos(){
  progessbar = document.getElementById("progessbar")
  porcentagem = musica.currentTime / musica.duration
  progessbar.style.width = porcentagem * 100 + "%"
}


setInterval(segundos,500)



//não foi eu que fiz
document.addEventListener("DOMContentLoaded", function () {
  // Função para gerar número aleatório entre min e max
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Função para ajustar randomicamente a posição de x e y na classe fogos
  function FogosPosition() {
    document.querySelectorAll('.fogos').forEach(function(fogos, index) {
      fogos.style.left = getRandomArbitrary(0, 90) + '%';
      fogos.style.top = getRandomArbitrary(20, 60) + 'vh';
    });
  }

  // Ajusta a posição inicial
 FogosPosition();

  // Ajusta a posição entre 5 e 10 segundos
  setInterval(FogosPosition, getRandomArbitrary(5000, 10000));
});

function confetes(){
    const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
}