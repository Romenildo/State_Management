import Player from './player.js'
import inputHandler from './input.js'
import {drawStatusText} from './utils.js'

window.addEventListener('load', function(){
    const loading = document.getElementById('loading')
    loading.style.display = 'none'
    
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const player = new Player(canvas.width, canvas.height)
    const input = new inputHandler();

    let lastTime = 0
    function animate(timeStamp){

        const deltaTime = timeStamp - lastTime
        lastTime = timeStamp

        ctx.clearRect(0,0, canvas.width, canvas.height)//limpar tela a cada frame

        player.update(input.lastKey)//pega a ultima tecla e ativa no player
        player.draw(ctx, deltaTime)//desenha o jogador
        
        drawStatusText(ctx, input,player)
        requestAnimationFrame(animate)
    }
    animate(0)
})