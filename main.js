let cobra = [{x: 10, y: 10}];
let comida = gerationComida();
let direcao = 'DIRETA';
let velocidade = 150;
let pontos = 0;
let intervalo;

function iniciar(){
    criarTabuleiro();
    document.addEventListener('keydown', mudarDirecao);
    intervalo = setInterval(moverCobra, velocidade);	
}

function criarTabuleiro () {
    const tabuleiro = document.getElementById
    ('tabuleiro');
    tabuleiro.innerHTML = '';

    cobra.forEach(segmento => {
        const div = document.createElement('div');
        elemento.style.gridRowStart = segmento.y;
        elemento.style.gridColumnStart = segmento.x;
        elemento.classList.add('snake');
        tabuleiro.appendChild(elemento);
    } );

    function gerationComida() {
        let novaComida;
        while (!novaComida || posicaoOcupada(novaComida)) 
        {
            novaComida = {
                x: Math.floor(Math.random() * 18) + 2,
                y: Math.floor(Math.random() * 18) + 2
            };
        }
        
    }


}
