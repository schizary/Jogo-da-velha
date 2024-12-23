
$('#registro').click(function(){
    let nomeJogadorX = $('#jogadorX').val()
    let nomeJogadorO = $('#jogadorO').val()
    melhorDe = $('#melhorDe').val()

    $('#nomeJogadorX').text(nomeJogadorX)
    $('#nomeJogadorX').val(nomeJogadorX)
    $('#nomeJogadorO').text(nomeJogadorO)
    $('#nomeJogadorO').val(nomeJogadorO)
})

$('table tr td').click(function(){
    if ($(this).text()== "" && play){
        if((move%2) == 1){
            $(this).append("X") 
            $(this).css('color', 'red')
        }else{
            $(this).append("O")
            $(this).css('color', 'blue',)
        }
        move++
        
        let win = ganhador()
        if (win=='X'){
            $('body').append('<div class="ganhador"><span> O ganhador foi X</span</div>')
            $('body').append('<div class = "ganhador"><button onclick="location.reload()"> Reiniciar o jogo</button></div>')
            $('body').append('<div class = "ganhador"><button onclick="novaRodada()"> Nova rodada </button></div>')
            play=false
            contX++
            placar()
            vencedor()
        }else if (win=='O'){
            $('body').append('<div class="ganhador"><span> O ganhador foi O</span</div>')
            $('body').append('<div class = "reiniciar"><button onclick="location.reload()"> Reiniciar o jogo</button></div>')
            $('body').append('<div class = "ganhador"><button onclick="novaRodada()"> Nova rodada </button></div>')
            play=false
            contO++
            placar()
            vencedor()
        }else if (move>=10){
            $('body').append('<div class="ganhador"><span>Velha!</span</div>')
            $('body').append('<div class = "reiniciar"><button onclick="location.reload()"> Reiniciar o jogo</button></div>')
            $('body').append('<div class = "ganhador"><button onclick="novaRodada()"> Nova rodada </button></div>')
            vencedor()
        }
    }
})




function novaRodada(){
    $('table tr td').each(function(){
        $(this).text("")
        $(this).css('color', '')
        $('.ganhador').remove()
    })
    move=1
    play=true
}

function placar(){
    $('#contX').text(contX)
    $('#contO').text(contO)
}


function ganhador(){
    p1 = $('table tr:nth-child(1) td:nth-child(1)').text()
    p2 = $('table tr:nth-child(1) td:nth-child(2)').text()
    p3 = $('table tr:nth-child(1) td:nth-child(3)').text()
    p4 = $('table tr:nth-child(2) td:nth-child(1)').text()
    p5 = $('table tr:nth-child(2) td:nth-child(2)').text()
    p6 = $('table tr:nth-child(2) td:nth-child(3)').text()
    p7 = $('table tr:nth-child(3) td:nth-child(1)').text()
    p8 = $('table tr:nth-child(3) td:nth-child(2)').text()
    p9 = $('table tr:nth-child(3) td:nth-child(3)').text()

    //linha

    if((p1 == p2 && p2 == p3) & p1 != "") return p1
    if((p4 == p5 && p5 == p6)& p4 !="") return p4
    if((p7 == p8 && p8 == p9)& p7 !="") return p7

    //coluna

    if((p1==p4 && p4 == p7) &p1!="") return p1
    if((p2==p5 && p5 == p8) &p2!="") return p2
    if((p3==p6 && p6 == p9) &p3!="") return p3

    //diagonal

    if((p1==p5 && p5 == p9) &p1!="") return p1
    if((p3==p5 && p5 == p7) &p3!="") return p3

    //velha
    return-1
}

ganhador()


function vencedor() {
    if(contX>melhorDe/2){
        $('.ganhador').remove()
        $('body').append('<div class="reiniciar"><span>O vencedor do jogo é '+ $('#nomeJogadorX').val() + ' X</span</div>')
        $('body').append('<div class = "reiniciar"><button onclick="location.reload()"> Reiniciar o jogo</button></div>')
    }else if(contX>melhorDe/2){
        $('.ganhador').remove()
        $('body').append('<div class="reiniciar"><span>O vencedor do jogo é '+ $('#nomeJogadorO').val() + ' X </span</div>')
        $('body').append('<div class = "reiniciar"><button onclick="location.reload()"> Reiniciar o jogo</button></div>')
    }
}