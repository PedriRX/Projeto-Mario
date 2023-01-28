// OBJETIVO 1 - Abrir a modal quando o usuário clicar no botão trailer
    // Passo 1 - Pegar o elemento que representa o botão usando o js
    // Passo 2 - Identificar quando o usuário clicar no botão
    // Passo 3 - Pegar o elemento da modal
    // Passo 4 - Mostrar a modal

// OBJETIVO 2 - Fechar a modal quando o usuário clicar no X  
    // Passo 1 - Pegar o elemento que representa o 'fechar modal' usando o js
    // Passo 2 - Identificar quando o usuário clicar no X
    // Passo 3 - Fechar a modal
 
//OBJETIVO 3 - Parar o video após o usuário ter clicado no botão X e fazer com que ele possa ser aberto novamente
    // Passo 1 - Pegar o elemento que representa o video usando o js
    // Passo 2 - Parar o video
    // Passo 3 - Fazer o video abrir denovo

const buttonTrailer = document.querySelector(".button-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkVideo = video.src;
function alternarModal() 
{
    modal.classList.toggle("aberto");
}

buttonTrailer.addEventListener("click" , () => { 
    
    alternarModal ();
    video.setAttribute("src", linkVideo);
})

botaoFecharModal.addEventListener("click" , () =>{

    alternarModal ();
    video.setAttribute("src" , "");
})









