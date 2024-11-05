window.addEventListener('load', carregar);


function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var day = document.getElementById('day')
    var dia = new Date().getDate()
    var hora = new Date().getHours()
    var minutos = new Date().getMinutes()
    
    if (hora <= 12 ){
        day.innerText = `Hora do Dia ${dia}`
        msg.innerText = `Bom Dia são ${hora}:${minutos}`
    }
    else if(hora < 18){
        day.innerText = `Hora do Dia ${dia}`
        msg.innerText = `Boa Tarde são ${hora}:${minutos} minutos`

        document.body.style.backgroundColor = 'orange'
        img.style.backgroundImage ='url(./img/tarde.jpg)'
    }
    else{
        day.innerText = `Hora do Dia ${dia}`
        msg.innerText = `Boa Noite são ${hora}:${minutos} minutos`

        document.body.style.backgroundColor = 'darkgray'
        img.style.backgroundImage = 'url(./img/noite.jpg)'
    }
}