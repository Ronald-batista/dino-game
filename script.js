const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;
let position = 0;
let pontuacao = 0;

function handleKeyUp(event){
    if (event.keyCode === 32){
        if(!isJumping){
            jump();
        }
        
    }
}

function jump(){

    isJumping = true;
    let upInverval = setInterval(() => {
        if (position >= 180) {
            clearInterval(upInverval);

            // descendo
            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                dino.style.bottom = position + 'px'
                }
                
                
            })
        }else {           
            //subindo
            position += 18;
            dino.style.bottom = position + 'px'
        }
    }, 20);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000; //posicao inicial do cacto
    let randomTime = Math.random() * 6000; // intervalo de tempo para aparicoes de cactos

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
        if(cactusPosition < -60){ // SE nao existe cacto na tela
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if ( cactusPosition > 0 && cactusPosition < 60 && position < 60 ){ // SENAO SE o dino tocou em um cacto
            //Game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else { // movimento do cacto
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)
    setTimeout(createCactus, randomTime); // chamada recusiva para criar novo cacto
}


createCactus(); 
document.addEventListener('keyup',handleKeyUp);