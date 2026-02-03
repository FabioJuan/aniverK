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
const musicas = ["musica/Falling Behind.mp3","musica/Legião Urbana - Tempo Perdido.mp3","musica/Laufey - Lover Girl.mp3","musica/The Girl from Ipanema - Frank Sinatra.mp3",
                "musica/Jesus, Filho de Deus - Fernandinho.mp3","musica/Dançar na chuva - Fernandinho.mp3","musica/A Dança do Pinguim - Aline Barros.mp3","musica/Chega De Saudade - tom jobin.mp3",
                "musica/Cyndi Lauper Girls - Just Want To Have Fun.mp3","musica/Every breath you take.mp3","musica/I love you baby instrumental - frank sinata.mp3","musica/Maravilhosa Graça.mp3"]

const btn_player = [document.querySelector("#voltar"),document.querySelector("#pause"),document.querySelector("#proxima")]
const titulo = document.querySelector("#titulo")
const titulos_musicas = ["falling behind - laufey", "tempo perdido - legião urbana", "lover girl - laufey", "The Girl from Ipanema - Frank Sinatra",
                        "Jesus, Filho de Deus - Fernandinho", "Dançar na chuva - Fernandinho", "A Dança do Pinguim - Aline Barros","chega De Saudade - tom jobim",
                        "Just Want To Have Fun - Cyndi Lauper Girls", "Every breath you take - police", "I love you baby - frank sinata", "Maravilhosa Graça"]
const album = document.querySelector("#img_album")
var tocando = true
var endereco = parseInt(Math.random() * 12)
const minutos_A = [document.querySelector("#minutos_a"),document.querySelector("#segundos_a")]
const duracao = [document.querySelector("#minutos"),document.querySelector("#segundos")]









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
    sec_sem.animate(
      [     
            {marginLeft: "30px"},
            {marginLeft: "10px"},
            {marginLeft:"30px"},
            {marginLeft:"10px"}
            
        ],
        {
            duration:700,
            fill:"forwards"
        }
    )
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
    switch(pagina){
        case 0:
            imagens[0].src = "LIVRO/foto1.jfif"
            imagens[1].src = "LIVRO/foto2.jfif"
            
            paragrafo[0].innerHTML = "olha só Yui, finalmente o dia de você criar juízo ou vai acabar sendo presa por comer o bolo das outras e se a banda ficar rica vai ter que aprender a pagar imposto XD mas sem brincadeiras agora, Feliz aniversário!! de todas nós aqui da HTT com muito amor"
            paragrafo[1].innerHTML = "estamos passando para agradecer por você ser essa pessoa tão iluminada e por ter nos unido, porque desde o primeiro dia no clube de música cada ensaio virou uma festa especial, desde as broncas da Mio até as viagens na praia. a vida no colégio é muito melhor só porque você está nela. sua animação, o carinho que você tem por cada uma de nós e sua vontade de tocar nos inspiram a dar o nosso melhor sempre. Desde 2021 (já faz quatro anos!) vivemos coisas que nunca vamos esquecer. A Ritsu vive dizendo que você é uma eterna criança"
            paragrafo[2].innerHTML = "mas a gente sabe que você se tornou uma guitarrista incrível. passamos por tantos festivais e situações doidas, como quando tivemos que correr para o palco, ou quando fomos todas na feira de"
            break;
        case 1:
            imagens[0].src = "LIVRO/foto3.jfif"
            imagens[1].src = "LIVRO/foto4.jfif"

            paragrafo[0].innerHTML = "voces e você quase comprou a loja inteira! Sabe, Yui, a Mio até tenta ser séria, mas ela não consegue esconder o sorriso quando você faz alguma bobeira. A Mugi adora cada segundo das nossas loucuras e a Azusa, bom, ela finge que não, mas te admira mais do que qualquer solo de guitarra famoso. Você é a alma desse clube e sem o seu 'Ui' constante nada teria a mesma graça ou o mesmo ritmo."
            paragrafo[1].innerHTML = "obrigada por nos ensinar que o mais importante não é acertar todas as notas, mas sim o quanto a gente se diverte tocando juntas. Que seu ano tenha muitas sobremesas, que a Gitah esteja sempre afinada e que seu coração continue gigante desse jeito. Vamos continuar criando memórias, tomando muito chá e fazendo o melhor som do mundo. Você é a nossa 'lead guitar' insubstituível e a amiga que todo mundo gostaria de ter por perto. Parabéns por ser essa garota de ouro, mesmo sendo um pouquinho distraída às vezes!"
            paragrafo[2].innerHTML = "amamos você demais! Prepare o estômago porque a Mugi trouxe um bolo gigante e a gente não vai deixar sobrar nem uma migalha hoje!"
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
    case 7:
      musica.src = musicas[7]
      album.src = "LIVRO/foto 8.jfif "
      break;
    case 8:
      musica.src = musicas[8]
      album.src = "LIVRO/foto9.jfif"
      break;
    case 9:
      musica.src = musicas[9]
      album.src = "LIVRO/foto10.jfif"
      break;
    case 10:
      musica.src = musicas[10]
      album.src = "LIVRO/foto11.jfif"
      break;
    case 11:
      musica.src = musicas[11]
      album.src = "LIVRO/foto12.jfif"
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
function timer_song(){
  minutos_A[0].innerHTML = parseInt(musica.currentTime / 60)
  minutos_A[1].innerHTML = parseInt(musica.currentTime % 60)
  duracao[0].innerHTML = parseInt(musica.duration / 60)
  duracao[1].innerHTML = parseInt(musica.duration % 60)
}
btn_player[0].addEventListener("click",anter_song)
btn_player[1].addEventListener("click",pause_song)
btn_player[2].addEventListener("click",prox_song)
musica.addEventListener("ended",prox_song)
function segundos(){
  progessbar = document.getElementById("progessbar")
  porcentagem = musica.currentTime / musica.duration
  progessbar.style.width = porcentagem * 100 + "%"
  timer_song()
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