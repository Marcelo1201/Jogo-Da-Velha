const celulas = document.querySelectorAll(".space");
let checarTurno = true;
const player1 = "1";
const player2 = "2";
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
    celula.classList.add(turno);
    checarVencedor(turno);
    if(turno == player1){
        celula.innerHTML = "<img src='x.png'>"
    } else{
        celula.innerHTML = "<img src='bolinha.png'>"
    }
}

function checarVencedor(turno){
    const vencedor = combinacoes.some((comb) =>{
        return comb.every((index)=>{
            return celulas[index].classList.contains(turno);
        })
    })

    if(vencedor){
        encerrarJogo(turno);
    } else if(checarEmpate()){
        encerrarJogo();
    } else{
        checarTurno = !checarTurno;
    }
}

function checarEmpate(){
    let x = 0;
    let o = 0;

    for(index in celulas){
        if(!isNaN(index)){
            if(celulas[index].classList.contains(player1)){
                x++;
            }
            if(celulas[index].classList.contains(player2)){
                o++
            }
        }
    }

    return x + o == 9 ? true : false;
}

function encerrarJogo(vencedor = null){
    const telaEscura = document.getElementById("tela-escura");
    const h2 = document.querySelector(".final");
    const reiniciar = document.querySelector(".reiniciar")

    telaEscura.style.display = "block";
    
    if(vencedor){
        h2.innerHTML = `O player ${vencedor} venceu`;
    } else{
        h2.innerHTML = "Empatou";
    }

    let contador = 3;
    setInterval(() =>{
        reiniciar.innerHTML = `Reiniciando em ${contador--}`;
    }, 1000)

    setTimeout(() => location.reload(), 4000);
}