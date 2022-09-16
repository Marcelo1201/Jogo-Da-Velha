const celulas = document.querySelectorAll(".space");
let checarTurno = true;
const player1 = "X";
const player2 = "O";
const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

document.addEventListener("click", (event) => {
    if(event.target.matches(".space")){
        jogar(event.target.id);
    }
})

function jogar(id){
    const celula = document.getElementById(id);
    turno = checarTurno ? player1 : player2;
    celula.textContent = turno;
    checarTurno = !checarTurno;
    checarVencedor(turno);
    if(turno == player1){
        celula.innerHTML = "<img src='x.png'>"
    } else{
        celula.innerHTML = "<img src='bolinha.png'>"
    }
}

function checarVencedor(turno){

}

































// var playTime = player1;
// var gameOver = false;

// inicializarEspaço();

// function inicializarEspaço(){
//     var espaços = document.getElementsByClassName("space");
//     for (var i = 0; i < espaços.length; i++) {
//         espaços[i].addEventListener("click", function(){
//             if(gameOver){
//                 return;
//             }
//             if(espaços[i].getElementsByTagName("img").length == 0){
//                 if(playTime == player1){
//                     espaços[i].innerHTML = "<img src='x.png'>";
//                     espaços[i].setAttribute("jogada", player1);
//                     playTime = player2;
//                 } else{
//                     espaços[i].innerHTML = "<img src='bolinha.png'>";
//                     espaços[i].setAttribute("jogada", player2);
//                     playTime = player1;
//                 }
//             }
//         })
//     }
// }