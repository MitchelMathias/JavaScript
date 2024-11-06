document.getElementById('enviar').addEventListener('click', calcular);

function calcular(event){
    event.preventDefault();

    var idade = new Date().getFullYear() - Number(document.getElementById('ano').value);
    var sexo = document.getElementsByName('sexo');
    var resp = document.getElementById('resp');
    var img = document.createElement('img');
    img.style.display = 'block'
    img.style.margin = 'auto'
    img.style.Width = '300px'
    img.style.height = '300px'
    img.style.borderRadius = '50%'

    if (idade < 0){
        window.alert('Verifique os dados e tente Novamente!!!')
    }
    else{
        if (sexo[0].checked){
            if (idade <= 13){
                img.src = './img/criança.jpg';
            }
            else if (idade <= 16){
                img.src = './img/adolescente.jpg';
            }
    
            else if ( idade <= 45){
                img.src = './img/adulto.jpg'
            }
            else {
                img.src = './img/velho.jpg'
            }
    
        }
        else {
            resp.innerHTML = 'Feminino'
            if (idade <= 13){
                img.src = './img/menina_criança.jpg';
            }
            else if (idade <= 16){
                img.src = './img/adolescente_menina.jpg';
            }
            else if ( idade <= 45){
                img.src = './img/mulher.jpg'
            }
            else {
                img.src = './img/velha_mulher.jpg'
            }
        }
    }

    resp.innerHTML = `Você tem ${idade} anos`;
    resp.appendChild(img)
}