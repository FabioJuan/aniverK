const btn = document.querySelector("#Entrar")
var tentativas = 3
btn.addEventListener("click",function(event){
    event.preventDefault()
    const senha = document.querySelector("#senha").value
    console.log(senha)
    if(senha == "fabill123"){
        document.body.style.backgroundColor = "green"
    }else{
        document.body.style.backgroundColor = "red"
        tentativas -= 1

    }
    if(tentativas == 0 ){
        location.host = "sonic.html"
    }
})
