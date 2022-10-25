function Chutar() {
    let numeroSecreto = 8
    let chute = document.getElementById("valor").value

    let emojiFeliz = "<img src='imagens/emojihappy.png' width='50' height='50'>"
    let emojiTriste= "<img src='imagens/imagem.png' widht='50' height='50'>"


    if (chute == numeroSecreto){
        //verdadeiro
document.getElementById("resultado").innerHTML= emojiFeliz
    }
    else{
        //falso
        document.getElementById("resultado").innerHTML= emojiTriste
    } 
}
//1 - Gerar número aleatório entre 0 e 10 com número secreto
//2 - Substituir o texto por imagem (carinha feliz e carinha triste)
//3 - Mudar o layout (cores,fundos, fontes)
